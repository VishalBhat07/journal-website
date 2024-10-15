import React, { useState } from 'react';
import { uploadArticle } from '../../articleService.js'; // Import functions
import './UploadPopup.css'; // Add your modal CSS styles here

const UploadPopup = ({ isOpen, onClose }) => {
  const [author, setAuthor] = useState('');
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(''); // New state for title
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // New state to track form submission

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

    setIsSubmitting(true); // Disable the form during submission

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
    } finally {
      setIsSubmitting(false); // Re-enable the form after submission
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
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="titleInput"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <label htmlFor="author">Author Name:</label>
            <input
              type="text"
              id="authorInput"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />

            <button type="submit" id="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Uploading...' : 'Upload'}
            </button>
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
