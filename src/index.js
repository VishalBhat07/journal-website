import { uploadFile } from './upload.js';
import { displayFiles } from './display.js';

    const uploadForm = document.getElementById("uploadForm");
    const statusDiv = document.getElementById("status");
    const fileListDiv = document.getElementById("fileList");

    uploadForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const fileInput = document.getElementById("fileInput");
      const authorInput = document.getElementById("authorInput").value;
      await uploadFile(fileInput, authorInput, statusDiv);
      await displayFiles(fileListDiv); // Refresh the file list
    });

    // Initial load of the file list
    displayFiles(fileListDiv);