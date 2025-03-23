import { useLocation, useNavigate } from "react-router-dom";
import styles from "./SingleLink.module.css";

export default function SingleLink({ name, linkTo }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      className={`${styles["link"]} ${location.pathname === linkTo ? styles["active"] : ""}`}
      onClick={() => {
        navigate(linkTo);
      }}
    >
      <div className={styles["name"]}>{name}</div>
    </div>
  );
}
