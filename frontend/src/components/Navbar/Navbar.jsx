import { useContext } from "react";
import { MobileContext } from "../../AppContext";
import { Link, useNavigate } from "react-router-dom";
import Menu from "@mui/icons-material/Menu";
import styles from "./Navbar.module.css";
import SingleLink from "./SingleLink/SingleLink";

const Navbar = () => {
  const { toggleSidebar } = useContext(MobileContext);
  const navigate = useNavigate();

  return (
    <nav id={styles["navbar"]}>
      <button className={styles["menu-btn"]} onClick={toggleSidebar}>
        <Menu />
      </button>
      <div className={styles["sidebar-logo"]} onClick={() => navigate("/")} >
        <img src="/logo.png" alt="asm-logo" />
        <div className={styles["asm-name"]} >
          Materials and processing
        </div>
      </div>

      <div className={styles["nav-links"]}>
        <SingleLink name="About" linkTo="author" isActive={0}/>
        <SingleLink name="About" linkTo="author" isActive={1}/>
        <SingleLink name="About" linkTo="author" isActive={1}/>
        <SingleLink name="About" linkTo="author" isActive={0}/>
        <SingleLink name="About" linkTo="author" isActive={1}/>


      </div>

      <div className={styles["links"]}>
        <Link to="/login" className={styles["login-link"]}>
          Login
        </Link>
        <Link to="/signup" className={styles["signup-link"]}>
          Sign up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
