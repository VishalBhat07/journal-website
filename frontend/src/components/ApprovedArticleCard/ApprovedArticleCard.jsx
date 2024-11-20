import React from 'react';
import './ApprovedArticleCard.css'; // Create CSS specific to this component
import { deleteArticle } from '../../articleService'; // Import the delete function

const ApprovedArticleCard = ({ articles, onArticleDeleted }) => {
  console.log(articles)
  const handleDelete = async (articleId) => {
    // Delete article permanently from 'approved' folder and Firebase Storage
    const result = await deleteArticle('approved', articleId);
    if (result.success) {
      onArticleDeleted(articleId); // Callback to update UI after deletion
    } else {
      console.error(result.message);
    }
  };

  return (
    <table className="approved-article-card__table">
      <thead className="approved-article-card__table-head">
        <tr className="approved-article-card__table-row">
          <th className="approved-article-card__table-header">Title</th>
          <th className="approved-article-card__table-header">Author</th>
          <th className="approved-article-card__table-header">Date</th>
          <th className="approved-article-card__table-header">Link</th>
          <th className="approved-article-card__table-header">Actions</th>
        </tr>
      </thead>
      <tbody className="approved-article-card__table-body">
        {articles.map((article, index) => (
          <tr key={article.id || index} className="approved-article-card__table-row">
            <td className="approved-article-card__table-cell">{article.title}</td>
            <td className="approved-article-card__table-cell">{article.author}</td>
            <td className="approved-article-card__table-cell">
              {new Date(article.date).toLocaleDateString()}
            </td>
            <td className="approved-article-card__table-cell">
              <a
                href={article.fileURL}
                target="_blank"
                rel="noopener noreferrer"
                className="approved-article-card__link"
              >
                View Article
              </a>
            </td>
            <td className="approved-article-card__table-cell">
              <button
                onClick={() => handleDelete(article.id)}
                className="approved-article-card__button approved-article-card__button--delete"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ApprovedArticleCard;
