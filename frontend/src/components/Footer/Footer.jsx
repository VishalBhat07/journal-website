import React, { useEffect } from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const Footer = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  // Use effect to handle scroll on navigation
  useEffect(() => {
    const handleLinkClick = (event) => {
      if (event.target.closest("a")) {
        scrollToTop();
      }
    };

    window.addEventListener("click", handleLinkClick);

    return () => {
      window.removeEventListener("click", handleLinkClick);
    };
  }, []);

  return (
    <MDBFooter
      style={{ backgroundColor: "rgba(61, 57, 177, 1)" }}
      className="text-center text-lg-start"
    >
      {/* Social Links Section */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span style={{ color: "#fff" }}>
            Get connected with us on social networks:
          </span>
        </div>

        <div>
          <a
            href="https://www.facebook.com/"
            aria-label="Facebook"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="facebook-f" style={{ color: "#fff" }} />
          </a>
          <a
            href="https://twitter.com/"
            aria-label="Twitter"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="twitter" style={{ color: "#fff" }} />
          </a>
          <a
            href="https://www.google.com/"
            aria-label="Google"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="google" style={{ color: "#fff" }} />
          </a>
          <a
            href="https://www.instagram.com/"
            aria-label="Instagram"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="instagram" style={{ color: "#fff" }} />
          </a>
          <a
            href="https://www.linkedin.com/"
            aria-label="LinkedIn"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="linkedin" style={{ color: "#fff" }} />
          </a>
          <a
            href="https://github.com/VishalBhat07/journal-website"
            aria-label="GitHub"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="github" style={{ color: "#fff" }} />
          </a>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="text-muted">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            {/* Company Info */}
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6
                className="text-uppercase fw-bold mb-4"
                style={{ color: "#fff" }}
              >
                ASM (INC)
              </h6>
              <p style={{ color: "#fff" }}>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </MDBCol>

            {/* Useful Links */}
            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6
                className="text-uppercase fw-bold mb-4"
                style={{ color: "#fff" }}
              >
                Quick Links
              </h6>
              <p style={{ color: "#fff" }}>
                <Link to="/" className="text-reset" onClick={scrollToTop}>
                  Home
                </Link>
              </p>
              <p style={{ color: "#fff" }}>
                <Link
                  to="/about/board-of-member"
                  className="text-reset"
                  onClick={scrollToTop}
                >
                  Board of Members
                </Link>
              </p>
              <p style={{ color: "#fff" }}>
                <Link
                  to="/uploads"
                  className="text-reset"
                  onClick={scrollToTop}
                >
                  Journals
                </Link>
              </p>
              <p style={{ color: "#fff" }}>
                <Link
                  to="/author/author-guidelines"
                  className="text-reset"
                  onClick={scrollToTop}
                >
                  Author Guideline
                </Link>
              </p>
            </MDBCol>

            {/* Contact Information */}
            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6
                className="text-uppercase fw-bold mb-4"
                style={{ color: "#fff" }}
              >
                Contact
              </h6>
              <p style={{ color: "#fff" }}>
                <MDBIcon
                  icon="home"
                  className="me-2"
                  style={{ color: "#fff" }}
                />
                RVCE, Bengaluru.
              </p>
              <p style={{ color: "#fff" }}>
                <MDBIcon
                  icon="envelope"
                  className="me-3"
                  style={{ color: "#fff" }}
                />
                sample@rvce.edu.in
              </p>
              <p style={{ color: "#fff" }}>
                <MDBIcon
                  icon="phone"
                  className="me-3"
                  style={{ color: "#fff" }}
                />{" "}
                +01 234 567 88
              </p>
              <p style={{ color: "#fff" }}>
                <MDBIcon
                  icon="print"
                  className="me-3"
                  style={{ color: "#fff" }}
                />{" "}
                +01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", color: "#fff" }}
      >
        © 2024 <b>RVCE</b> All copyrights reserved.
      </div>
    </MDBFooter>
  );
};

export default Footer;
