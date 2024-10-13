import React, { useState } from 'react';
import { uploadArticle } from '../../articleService.js'; // Import functions
import './UploadPopup.css'; // Add your modal CSS styles here

const UploadPopup = ({ isOpen, onClose }) => {
  const [author, setAuthor] = useState('');
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(''); // New state for title
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Check if author, title, and file are provided
    if (!author || !title || !file) {
      setSuccessMessage('Please provide author name, title, and a file.');
      return;
    }

    const articleData = {
      author: author,
      title: title, // Include title in the article data
      // Add other fields as necessary, like date and pages if required
    };

    // Attempt to upload the article
    try {
      const response = await uploadArticle(articleData, file);

      if (response.success) {
        setSuccessMessage('File uploaded successfully!');
        resetForm(); // Reset form after successful upload
        setTimeout(onClose, 2000); // Close the modal after 2 seconds
      } else {
        setSuccessMessage(response.message);
      }
    } catch (error) {
      setSuccessMessage('Error uploading file: ' + error.message);
      console.error("Upload error:", error); // Log the error for debugging
    }
  };

  const resetForm = () => {
    setAuthor('');
    setFile(null);
    setTitle(''); // Reset title state
  };

  return (
    isOpen && (
      <div className="upload-modal-overlay" onClick={onClose}>
        <div className="upload-modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="upload-modal-header">
            <h1 className="upload-hero-title">Upload File</h1>
            <button className="upload-close-icon" onClick={onClose}>&times;</button>
          </div>
          <form id="uploadForm" className="upload-hero-form" onSubmit={handleSubmit}>
            <label htmlFor="file">Choose file:</label>
            <input
              type="file"
              id="fileInput"
              required
              onChange={(e) => {
                setFile(e.target.files[0]); // Set selected file
              }}
            />
            <label htmlFor="title">Title:</label> {/* New label for title */}
            <input
              type="text"
              id="titleInput" // Add an id for the title input
              value={title} // Bind the title state
              onChange={(e) => setTitle(e.target.value)} // Set title
              required
            />

            <label htmlFor="author">Author Name:</label>
            <input
              type="text"
              id="authorInput"
              value={author}
              onChange={(e) => setAuthor(e.target.value)} // Set author name
              required
            />



            <button type="submit">Upload</button>
          </form>

          {successMessage && (
            <div className="upload-popup-message">{successMessage}</div>
          )}
        </div>
      </div>
    )
  );
};

export default UploadPopup;
