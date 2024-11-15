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
    <table className="review-article-card__table">
      <thead className="review-article-card__table-head">
        <tr className="review-article-card__table-row">
          <th className="review-article-card__table-header">Title</th>
          <th className="review-article-card__table-header">Author</th>
          <th className="review-article-card__table-header">Date</th>
          <th className="review-article-card__table-header">Link</th>
          <th className="review-article-card__table-header">Actions</th>
        </tr>
      </thead>
      <tbody className="review-article-card__table-body">
        {articles.map((article, index) => (
          <tr key={article.id || index} className="review-article-card__table-row">
            <td className="review-article-card__table-cell">{article.title}</td>
            <td className="review-article-card__table-cell">{article.author}</td>
            <td className="review-article-card__table-cell">
              {new Date(article.date).toLocaleDateString()}
            </td>
            <td className="review-article-card__table-cell">
              <a
                href={article.fileURL}
                target="_blank"
                rel="noopener noreferrer"
                className="review-article-card__link"
              >
                View Article
              </a>
            </td>
            <td className="review-article-card__table-cell">
              <button
                onClick={() => handleApprove(article.id, article)}
                className="review-article-card__button review-article-card__button--approve"
              >
                &#10003;
              </button>
              <button
                onClick={() => handleReject(article.id)}
                className="review-article-card__button review-article-card__button--reject"
              >
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
