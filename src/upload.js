// upload.js
import app from './config.js';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const storage = getStorage(app);
const db = getFirestore(app);

export const uploadFile = async (fileInput, authorInput, statusDiv) => {
  const file = fileInput.files[0];
  const fileRef = ref(storage, 'files/' + file.name);

  try {
    // Upload file
    await uploadBytes(fileRef, file);

    // Get download URL
    const downloadURL = await getDownloadURL(fileRef);

    // Store metadata in Firestore
    await addDoc(collection(db, "publications"), {
      author: authorInput,
      date: new Date(),
      downloadURL: downloadURL
    });

    statusDiv.innerText = "File uploaded successfully!";
  } catch (error) {
    statusDiv.innerText = "Error uploading file: " + error.message;
  }
};
