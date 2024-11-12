import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchArticles } from "../../articleService"; // Import fetchArticles function
import ArticleCard from "../ArticleCard/ArticleCard"; // Import ArticleTable instead of ArticleCard
import "./CurrentIssues.css";

const CurrentIssues = () => {
  const navigate = useNavigate();
  const [fetchedArticles, setFetchedArticles] = useState([]); // State to store articles

  useEffect(() => {
    const loadArticles = async () => {
      const articles = await fetchArticles(); // Fetch articles
      setFetchedArticles(articles); // Set fetched articles to state
    };

    loadArticles();
  }, []);

  return (
    <div className="articles-container">
      <button
        onClick={() => navigate("/")}
        className="back-to-home"
        style={{ marginBottom: "5px" }}
      >
        Back to Home
      </button>

      <ArticleCard articles={fetchedArticles} />
    </div>
  );
};

export default CurrentIssues;
