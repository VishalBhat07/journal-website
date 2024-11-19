import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchArticles } from "../../articleService";
import ApprovedArticleCard from "../ApprovedArticleCard/ApprovedArticleCard"; // Import the approved articles component
import "./ApprovedArticles.css";

const ApprovedArticles = () => {
  const navigate = useNavigate();
  const [fetchedArticles, setFetchedArticles] = useState([]);
  const approvedFolderPath = "approved";

  useEffect(() => {
    const loadArticles = async () => {
      const articles = await fetchArticles(approvedFolderPath); // Fetch articles from 'approved' folder
      setFetchedArticles(articles);
    };

    loadArticles();
  }, []);

  const handleArticleDeleted = (articleId) => {
    // Update state by filtering out the deleted article
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

      <ApprovedArticleCard 
        articles={fetchedArticles} 
        onArticleDeleted={handleArticleDeleted} 
      />
    </div>
  );
};

export default ApprovedArticles;
