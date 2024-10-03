import React, { useState, useEffect } from 'react';
import { uploadArticle, fetchArticles } from '../../articleService'; // Import functions
import './Hero.css';

const Hero = () => {
  const [author, setAuthor] = useState('');
  const [file, setFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);

  useEffect(() => {
    const getUploadedFiles = async () => {
      const articles = await fetchArticles();
      setUploadedFiles(articles);
    };
    getUploadedFiles();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Check if author and file are provided
    if (!author || !file) {
      setSuccessMessage('Please provide author name and a file.');
      return;
    }

    const articleData = {
      author: author,
      // Add other fields as necessary, like date and pages if required
    };

    // Attempt to upload the article
    try {
      const response = await uploadArticle(articleData, file);

      if (response.success) {
        setSuccessMessage('File uploaded successfully!');
        resetForm(); // Reset form after successful upload
        const articles = await fetchArticles();
        setUploadedFiles(articles); // Fetch and display updated list of uploaded files
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
  };

  return (
    <div className="hero-section">
      <h1 className="hero-title">Upload File</h1>
      <form id="uploadForm" className="hero-form" onSubmit={handleSubmit}>
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

        <button type="submit">Upload</button>
      </form>

      {successMessage && (
        <div className="popup-message">{successMessage}</div>
      )}

      <h1 className="hero-title">Uploaded Files</h1>
      <div id="fileList" className="file-list">
        {uploadedFiles.map((article) => (
          <div key={article.id} className="file-box">
            <img src={"https://picsum.photos/200/300"} alt={`${article.author}'s thumbnail`} className="file-thumbnail" />
            <div className="file-details">
              <a href={article.fileURL} target="_blank" rel="noopener noreferrer">
                Author : {article.author}
              </a>
              <p>Uploaded on : {new Date(article.date).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
