
import React from 'react';
import './ArticleCard.css';

const ArticleCard = () => {

  const articles = [
    {
      title: "Materials and Processing : Vol 1 Issue 1",
      author: "ASM Journal",
      date: "2024-11-15",
      fileURL: "https://heyzine.com/flip-book/67d753c541.html",
    },
    {
      title: "Materials and Processing : Vol 1 Issue 2",
      author: "ASM Journal",
      date: "2024-11-18",
      fileURL: "https://heyzine.com/flip-book/1d9866f8fc.html",
    },
  ];
  
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

// import React from 'react';
// import './ArticleCard.css'; // Update CSS for table styling

// const ArticleCard = ({ articles }) => {
//   return (
//     <table className="article-table">
//       <thead>
//         <tr>
//           <th>Title</th>
//           <th>Author</th>
//           <th>Date</th>
//           <th>Link</th>
//         </tr>
//       </thead>
//       <tbody>
//         {articles.map((article, index) => (
//           <tr key={index}>
//             <td>{article.title}</td>
//             <td>{article.author}</td>
//             <td>{new Date(article.date).toLocaleDateString()}</td>
//             <td>
//               <a href={article.fileURL} target="_blank" rel="noopener noreferrer">
//                 View Article
//               </a>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default ArticleCard;
