import React, { useEffect, useState } from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import { useNavigate } from "react-router-dom";
import { fetchArticles } from "../../articleService"; // Import fetchArticles function

const Uploads = () => {
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
      <button onClick={() => navigate("/")} className="back-to-home">
        Back to Home
      </button>{" "}
      {/* Button to go back to home */}
      {fetchedArticles.map((article) => (
        <ArticleCard article={article} key={article.id} /> // Render ArticleCard for each article
      ))}
    </div>
  );
};

export default Uploads;
