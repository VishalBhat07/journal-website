import { useContext, useState } from "react";
import { MobileContext, UserContext } from "../../AppContext";
import { Link, useNavigate } from "react-router-dom";
import Menu from "@mui/icons-material/Menu";
import styles from "./Navbar.module.css";
import SingleLink from "./SingleLink/SingleLink";
import NavAccordion from "./NavAccordion/NavAccordion";

const accordionGroups = [
  {
    title: "Benefits",
    links: [
      { url: "/benefits/academic-benefits", title: "Academic" },
      { url: "/benefits/industry-benefits", title: "Industry" },
    ],
  },
  {
    title: "Author",
    links: [
      { url: "/author/author-guidelines", title: "Guidelines" },
      { url: "/author/peer-review-process", title: "Publication process" },
    ],
  },
  {
    title: "Monetization",
    links: [
      { url: "/ad/advertisement-tariff", title: "Tariff" },
      { url: "/ad/bank-details", title: "Bank details" },
    ],
  },
  {
    title: "Admin",
    links: [
      { url: "/current-issues", title: "Current" },
      { url: "/approved-issues", title: "Approved" },
    ],
  }
];

const adminLink = {
  title: "Admin",
  links: [
    { url: "/current-issues", title: "Current" },
    { url: "/approved-issues", title: "Approved" },
  ],
};

const Navbar = () => {
  const { toggleSidebar } = useContext(MobileContext);
  const navigate = useNavigate();
  const { user, isAdmin, handleSignout } = useContext(UserContext);
  const [activeAccordionIndex, setActiveAccordionIndex] = useState(-1);

  function handleAccordionContentToggle(index) {
    if (activeAccordionIndex == index) {
      setActiveAccordionIndex(-1);
    } else {
      setActiveAccordionIndex(index);
    }
  }

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
        <SingleLink name="Issues" linkTo="/previous-issues" />
        {accordionGroups.map((accordion, index) => {
          if (!isAdmin && accordion.title == "Admin") {
            return "";
          }

          return (<NavAccordion
            key={index}
            title={accordion.title}
            links={accordion.links}
            isOpen={index == activeAccordionIndex}
            onClick={() => handleAccordionContentToggle(index)}
          />);
        })}
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
