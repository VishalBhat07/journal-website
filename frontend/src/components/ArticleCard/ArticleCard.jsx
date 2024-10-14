import React from 'react';
import './ArticleCard.css'; // Ensure you have your CSS file linked

const ArticleCard = ({ article }) => {
  return (
    <div className="article-card">
      <h3 className="article-title">{article.title}</h3> {/* Added title */}
      <h4 className="article-author">By : {article.author}</h4>
      <p className="article-date">Uploaded on : {new Date(article.date).toLocaleDateString()}</p>
      <a href={article.fileURL} target="_blank" rel="noopener noreferrer" className="article-link">View Article</a>
    </div>
  );
};

export default ArticleCard;
