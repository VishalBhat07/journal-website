// articleService.js
import { db } from './firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const storage = getStorage(); // Get a reference to the storage

const volumeNo = "24";  // Simpler format for volume
const issueNo = "2";    // Simpler format for issue

// Firestore reference, reflecting the folder structure in Firestore as well
const articlesRef = collection(db, `${volumeNo}/${issueNo}/articles`);

// Function to upload an article
export const uploadArticle = async (articleData, file) => {
  try {
    // Create the correct folder structure `24/2/articles/filename` for Firebase Storage
    const storageRef = ref(storage, `${volumeNo}/${issueNo}/articles/${file.name}`);
    
    // Upload the file to Firebase Storage
    await uploadBytes(storageRef, file);
    
    // Get the file's download URL
    const fileURL = await getDownloadURL(storageRef);

    // Calculate file size in MB
    const fileSize = (file.size / (1024 * 1024)).toFixed(2) + ' MB'; // Convert bytes to MB

    // Add the article data to Firestore, including the file URL and the current date
    const articleWithFile = {
      ...articleData,
      fileURL: fileURL,
      size: fileSize, // Add file size
      date: new Date().toISOString(), // Add the current date
    };
    
    await addDoc(articlesRef, articleWithFile);
    console.log("Article uploaded successfully!");
    return { success: true, message: "Article uploaded successfully!" };
  } catch (error) {
    console.error("Error uploading article: ", error);
    return { success: false, message: `Error uploading article: ${error.message}` };
  }
};

// Function to fetch articles
export const fetchArticles = async () => {
  try {
    const articlesSnapshot = await getDocs(articlesRef);
    const articlesList = articlesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return articlesList;
  } catch (error) {
    console.error("Error fetching articles: ", error);
    return []; // Return an empty array on error
  }
};
