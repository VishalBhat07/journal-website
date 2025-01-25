import styles from "./PageNotFound.module.css";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className={styles["not-found-container"]}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className={styles["back-link"]}>
        Back to Home
      </Link>
    </div>
  );
}

export default PageNotFound;