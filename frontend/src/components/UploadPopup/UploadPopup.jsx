import React, { useState } from "react";
import { uploadArticle } from "../../articleService";
import "./UploadPopup.css";

const UploadPopup = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const currentFolderPath = "pending";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!author || !title || !file) {
      setMessage("Please provide author name, title, and a file.");
      return;
    }

    if (!file.name.endsWith(".pdf")) {
      setMessage("Only PDF files are allowed.");
      return;
    }

    const articleData = { author, title };

    setIsUploading(true);
    setMessage(""); // Clear any previous messages

    try {
      const response = await uploadArticle(
        articleData,
        file,
        currentFolderPath
      );

      if (response.success) {
        setMessage("File uploaded successfully!");
        // Delay closing the popup to allow message to be read
        setTimeout(() => {
          resetForm();
        }, 2000); // Close after 2 seconds
      } else {
        setMessage(
          response.message || "Failed to upload file. Please try again."
        );
      }
    } catch (error) {
      setMessage("Error uploading file: " + error.message);
      console.error("Upload error:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const resetForm = () => {
    setAuthor("");
    setTitle("");
    setFile(null);
    setMessage("");
  };

  return (
    <div className="upload-modal-content" onClick={(e) => e.stopPropagation()}>
      <div className="upload-modal-header">
        <h1 className="upload-hero-title">Upload Article</h1>
      </div>
      <form
        id="uploadForm"
        className="upload-hero-form"
        onSubmit={handleSubmit}
      >
        <label htmlFor="fileInput">Choose file:</label>
        <input
          type="file"
          id="fileInput"
          required
          accept=".pdf"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <label htmlFor="authorInput">Author of the Article:</label>
        <input
          type="text"
          id="authorInput"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />

        <label htmlFor="titleInput">Title of the Article:</label>
        <input
          type="text"
          id="titleInput"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <button type="submit" disabled={isUploading}>
          {isUploading ? "Uploading..." : "Upload"}
        </button>
      </form>

      {message && <div className="upload-popup-message">{message}</div>}
    </div>
  );
};

export default UploadPopup;
