import React, { useState } from 'react';
import { uploadArticle } from '../../../../backend/articleService'; // Import functions
import './UploadPopup.css'; // Add your modal CSS styles here

const UploadPopup = ({ isOpen, onClose }) => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState(''); // New state for title
  const [file, setFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [isUploading, setIsUploading] = useState(false); // New state for upload status

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Check if author, title, and file are provided
    if (!author || !title || !file) {
      setSuccessMessage('Please provide author name, title, and a file.');
      return;
    }

    const articleData = {
      author: author,
      title: title, // Include title in the articleData
      // Add other fields as necessary, like date and pages if required
    };

    setIsUploading(true); // Set uploading state to true

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
      setIsUploading(false); // Reset uploading state to false
    }
  };

  const resetForm = () => {
    setAuthor('');
    setTitle(''); // Reset title field
    setFile(null);
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

            <label htmlFor="author">Author Name:</label>
            <input
              type="text"
              id="authorInput"
              value={author}
              onChange={(e) => setAuthor(e.target.value)} // Set author name
              required
            />

            <label htmlFor="title">Title:</label> {/* New input field for title */}
            <input
              type="text"
              id="titleInput"
              value={title}
              onChange={(e) => setTitle(e.target.value)} // Set title
              required
            />

            <button type="submit" disabled={isUploading}>
              {isUploading ? 'Uploading...' : 'Upload'}
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
