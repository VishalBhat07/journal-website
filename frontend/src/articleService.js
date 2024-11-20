// articleService.js
import { db } from './firebaseConfig';
import { doc, getDoc, setDoc, deleteDoc, collection, addDoc, getDocs } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'; // Add deleteObject import

const storage = getStorage(); // Get a reference to the storage

// Function to upload an article
export const uploadArticle = async (articleData, file, folderPath) => {
  try {
    // Create a storage reference
    const storageRef = ref(storage, `${folderPath}/${file.name}`);
    const articlesRef = collection(db, `${folderPath}`)
    
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
export const fetchArticles = async (folderPath) => {
  try {
    const folderRef = collection(db, folderPath);
    const articlesSnapshot = await getDocs(folderRef);
    const articlesList = articlesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return articlesList;
  } catch (error) {
    console.error("Error fetching articles: ", error);
    return []; // Return an empty array on error
  }
};

export const moveArticle = async (fromFolder, toFolder, articleId) => {
  try {
    // Reference to the source document
    const fromDocRef = doc(db, fromFolder, articleId);
    const toDocRef = doc(db, toFolder, articleId); // Use the same ID in the target folder

    // Fetch the document data
    const articleDoc = await getDoc(fromDocRef);
    if (articleDoc.exists()) {
      const articleData = articleDoc.data();

      // Copy the article to the target collection
      await setDoc(toDocRef, articleData);

      // Delete the original article
      await deleteDoc(fromDocRef);

      console.log("Article moved successfully!");
      return { success: true, message: "Article moved successfully!" };
    } else {
      throw new Error("Article not found in the source folder");
    }
  } catch (error) {
    console.error("Error moving article:", error);
    return { success: false, message: `Error moving article: ${error.message}` };
  }
};


export const deleteArticle = async (folderPath, articleId) => {
  try {
    // Reference to the article document in Firestore
    const articleRef = doc(db, folderPath, articleId);
    
    // Get the article's data to retrieve the file URL
    const articleDoc = await getDoc(articleRef);
    if (articleDoc.exists()) {
      const { fileURL } = articleDoc.data();
      
      // Delete the article from Firestore
      await deleteDoc(articleRef);

      // If there’s a file associated, delete it from Firebase Storage
      if (fileURL) {
        const fileRef = ref(storage, fileURL);
        await deleteObject(fileRef);
      }

      console.log("Article deleted successfully!");
      return { success: true, message: "Article deleted successfully!" };
    } else {
      throw new Error("Article not found");
    }
  } catch (error) {
    console.error("Error deleting article:", error);
    return { success: false, message: `Error deleting article: ${error.message}` };
  }
};
