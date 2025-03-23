import { useContext, useEffect, useState } from "react";
import { MobileContext, UserContext } from "../../AppContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "@mui/icons-material/Menu";
import styles from "./Navbar.module.css";
import SingleLink from "./SingleLink/SingleLink";

const Navbar = () => {
  const { toggleSidebar } = useContext(MobileContext);
  const navigate = useNavigate();
  const { user, handleSignout } = useContext(UserContext);

  return (
    <nav id={styles["navbar"]}>
      <button className={styles["menu-btn"]} onClick={toggleSidebar}>
        <Menu />
      </button>
      <div className={styles["sidebar-logo"]} onClick={() => navigate("/")}>
        <img src="/logo.png" alt="asm-logo" />
        <div className={styles["asm-name"]}>Materials and processing</div>
      </div>

      <div className={styles["nav-links"]}>
        <SingleLink name="Home" linkTo="/" />
        <SingleLink name="Members" linkTo="/board-of-member" />
        <SingleLink name="Guidelines" linkTo="/author/author-guidelines" />
        <SingleLink name="Issues" linkTo="/previous-issues" />
      </div>

      <div className={styles["links"]}>
        {user ? (
          <button
            to="/"
            className={styles["login-link"]}
            onClick={handleSignout}
          >
            Signout
          </button>
        ) : (
          <>
            <Link to="/login" className={styles["login-link"]}>
              Login
            </Link>
            <Link to="/signup" className={styles["signup-link"]}>
              Sign up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
