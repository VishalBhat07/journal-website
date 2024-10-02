// display.js
import app from './config.js';
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(app);

export const displayFiles = async (fileListDiv) => {
  const querySnapshot = await getDocs(collection(db, "publications"));
  fileListDiv.innerHTML = ""; // Clear the current list

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const fileItem = document.createElement('div');
    fileItem.innerHTML = `
      <strong>Author:</strong> ${data.author} <br>
      <strong>Date:</strong> ${data.date.toDate().toLocaleDateString()} <br>
      <a href="${data.downloadURL}" target="_blank">Download File</a>
      <hr>
    `;
    fileListDiv.appendChild(fileItem);
  });
};
