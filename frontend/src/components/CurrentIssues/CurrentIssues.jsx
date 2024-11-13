import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchArticles } from "../../articleService";
import ReviewArticleCard from "../ReviewArticleCard/ReviewArticleCard"; // Import new component
import "./CurrentIssues.css";

const CurrentIssues = () => {
  const navigate = useNavigate();
  const [fetchedArticles, setFetchedArticles] = useState([]);
  const pendingFolderPath = "pending";

  useEffect(() => {
    const loadArticles = async () => {
      const articles = await fetchArticles(pendingFolderPath);
      setFetchedArticles(articles);
    };

    loadArticles();
  }, []);

  const handleArticleReviewed = (articleId) => {
    // Update state by filtering out the reviewed article
    setFetchedArticles(fetchedArticles.filter(article => article.id !== articleId));
  };

  return (
    <div className="articles-container">
      <button
        onClick={() => navigate("/")}
        className="back-to-home"
        style={{ marginBottom: "5px" }}
      >
        Back to Home
      </button>

      <ReviewArticleCard articles={fetchedArticles} onArticleReviewed={handleArticleReviewed} />
    </div>
  );
};

export default CurrentIssues;
