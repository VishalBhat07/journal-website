import React from 'react';
import './ArticleCard.css'; // Update CSS for table styling

const ArticleCard = ({ articles }) => {
  return (
    <table className="article-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Date</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        {articles.map((article, index) => (
          <tr key={index}>
            <td>{article.title}</td>
            <td>{article.author}</td>
            <td>{new Date(article.date).toLocaleDateString()}</td>
            <td>
              <a href={article.fileURL} target="_blank" rel="noopener noreferrer">
                View Article
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ArticleCard;
