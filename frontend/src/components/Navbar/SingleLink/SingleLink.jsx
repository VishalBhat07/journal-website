import { useNavigate } from "react-router-dom";
import styles from './SingleLink.module.css'

export default function SingleLink({ name, linkTo, isActive }) {
  const navigate = useNavigate();

  return (
    <div className={`${styles['link']} ${isActive ? styles['active'] : ''}`} onClick={() => {
      navigate(linkTo)
    }}>
      <div className={styles['name']}>{name}</div>
    </div>

  );
}