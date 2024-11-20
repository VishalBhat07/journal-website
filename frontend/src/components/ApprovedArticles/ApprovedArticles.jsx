import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchArticles } from "../../articleService";
import ApprovedArticleCard from "../ApprovedArticleCard/ApprovedArticleCard.jsx"
import "./ApprovedArticles.css";

const ApprovedArticles = ({admin}) => {
  const navigate = useNavigate();
  const [fetchedArticles, setFetchedArticles] = useState([]);
  const approvedFolderPath = "approved";

  useEffect(() => {
    const loadArticles = async () => {
      const articles = await fetchArticles(approvedFolderPath);
      setFetchedArticles(articles);
    };

    loadArticles();
  }, []);

  const handleArticleDeleted = (articleId) => {
    // Update state by filtering out the deleted article
    setFetchedArticles(fetchedArticles.filter(article => article.id !== articleId));
  };

  return (
    admin ?  <div className="articles-container">
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
    </div> : <h1>You are not authorized to access this page</h1>
  );
};

export default ApprovedArticles;
