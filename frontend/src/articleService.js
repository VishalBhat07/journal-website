// articleService.js
import { db } from './firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const articlesRef = collection(db, 'articles');
const storage = getStorage(); // Get a reference to the storage

// Function to upload an article
// Function to upload an article
export const uploadArticle = async (articleData, file) => {
  try {
    // Create a storage reference
    const storageRef = ref(storage, `articles/${file.name}`);
    
    // Upload the file to Firebase Storage
    await uploadBytes(storageRef, file);
    
    // Get the file's download URL
    const fileURL = await getDownloadURL(storageRef);

    // Add the article data to Firestore, including the file URL and the current date
    const articleWithFile = {
      ...articleData,
      fileURL: fileURL,
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
  const articlesSnapshot = await getDocs(articlesRef);
  const articlesList = articlesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return articlesList;
};
