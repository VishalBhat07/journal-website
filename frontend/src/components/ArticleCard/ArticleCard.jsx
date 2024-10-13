// ArticleCard.jsx
import React from 'react';
import './ArticleCard.css'; // Create a separate CSS file for styling

const ArticleCard = ({ article }) => {
  return (
    <div className="article-card">
      <h2 className="article-author">{article.author}</h2>
      <p className="article-date">Uploaded on: {new Date(article.date).toLocaleDateString()}</p>
      <a href={article.fileURL} target="_blank" rel="noopener noreferrer" className="article-link">View Article</a>
    </div>
  );
};

export default ArticleCard;
