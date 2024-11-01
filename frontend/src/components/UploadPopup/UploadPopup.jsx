import React, { useState } from 'react';
import { uploadArticle } from '../../articleService'; // Import functions
import './UploadPopup.css'; // Add your modal CSS styles here

const UploadPopup = ({ isOpen, onClose }) => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!author || !title || !file) {
      setMessage('Please provide author name, title, and a file.');
      return;
    }

    if (!file.name.endsWith('.pdf')) { // Example file type check for PDF
      setMessage('Only PDF files are allowed.');
      return;
    }

    const articleData = {
      author,
      title,
    };

    setIsUploading(true);

    try {
      const response = await uploadArticle(articleData, file);

      if (response.success) {
        setMessage('File uploaded successfully!');
        resetForm();
        setTimeout(onClose, 2000);
      } else {
        setMessage(response.message);
      }
    } catch (error) {
      setMessage('Error uploading file: ' + error.message);
      console.error("Upload error:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const resetForm = () => {
    setAuthor('');
    setTitle('');
    setFile(null);
    setMessage('');
  };

  return (
    isOpen && (
      <div className="upload-modal-overlay" onClick={onClose}>
        <div className="upload-modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="upload-modal-header">
            <h1 className="upload-hero-title">Upload File</h1>
            <button className="upload-close-icon" onClick={onClose} aria-label="Close">&times;</button>
          </div>
          <form id="uploadForm" className="upload-hero-form" onSubmit={handleSubmit}>
            <label htmlFor="file">Choose file:</label>
            <input
              type="file"
              id="fileInput"
              required
              accept=".pdf" // Restrict file types to PDFs
              onChange={(e) => setFile(e.target.files[0])}
            />

            <label htmlFor="author">Author Name:</label>
            <input
              type="text"
              id="authorInput"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />

            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="titleInput"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <button type="submit" disabled={isUploading}>
              {isUploading ? (
                <span>Uploading...</span> // You could replace this with a spinner
              ) : (
                'Upload'
              )}
            </button>
          </form>

          {message && (
            <div className="upload-popup-message">{message}</div>
          )}
        </div>
      </div>
    )
  );
};

export default UploadPopup;
