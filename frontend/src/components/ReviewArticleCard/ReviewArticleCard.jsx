import React from 'react';
import './ReviewArticleCard.css'; // Create CSS specific to this component
import { moveArticle, deleteArticle } from '../../articleService'; // Import the move and delete functions

const ReviewArticleCard = ({ articles, onArticleReviewed }) => {
  const handleApprove = async (articleId, articleData) => {
    // Move article from 'pending' to 'approved' folder
    const result = await moveArticle('pending', 'approved', articleId, articleData);
    if (result.success) {
      onArticleReviewed(articleId); // Callback to update UI after action
    } else {
      console.error(result.message);
    }
  };

  const handleReject = async (articleId) => {
    // Delete article from 'pending' folder and Firebase Storage
    const result = await deleteArticle('pending', articleId);
    if (result.success) {
      onArticleReviewed(articleId); // Callback to update UI after action
    } else {
      console.error(result.message);
    }
  };

  return (
    <table className="review-article-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Date</th>
          <th>Link</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {articles.map((article, index) => (
          <tr key={article.id || index}>
            <td>{article.title}</td>
            <td>{article.author}</td>
            <td>{new Date(article.date).toLocaleDateString()}</td>
            <td>
              <a href={article.fileURL} target="_blank" rel="noopener noreferrer">
                View Article
              </a>
            </td>
            <td>
              <button onClick={() => handleApprove(article.id, article)}>
                &#10003;
              </button>
              <button onClick={() => handleReject(article.id)}>
                &#10005;
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReviewArticleCard;
