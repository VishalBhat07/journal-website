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
      style={{ backgroundColor: "var(--primary-color)" }}
      className="text-center text-lg-start"
    >
      {/* Social Links Section */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom border-top">
        <div className="me-5 d-none d-lg-block">
          <span style={{ color: "var(--text-color)" }}>
            Get connected with us on social networks:
          </span>
        </div>

        <div>
          <a
            href="https://www.facebook.com/"
            aria-label="Facebook"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="facebook-f" style={{ color: "var(--accent-color)" }} />
          </a>
          <a
            href="https://twitter.com/"
            aria-label="Twitter"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="twitter" style={{ color: "var(--accent-color)" }} />
          </a>
          <a
            href="https://www.google.com/"
            aria-label="Google"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="google" style={{ color: "var(--accent-color)" }} />
          </a>
          <a
            href="https://www.instagram.com/"
            aria-label="Instagram"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="instagram" style={{ color: "var(--accent-color)" }} />
          </a>
          <a
            href="https://www.linkedin.com/"
            aria-label="LinkedIn"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="linkedin" style={{ color: "var(--accent-color)" }} />
          </a>
          <a
            href="https://github.com/VishalBhat07/journal-website"
            aria-label="GitHub"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="github" style={{ color: "var(--accent-color)" }} />
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
                style={{ color: "var(--text-color)" }}
              >
                ASM India National Council
              </h6>
              <p style={{ color: "var(--text-color)" }}>
              Published by the ASM India National Council Trust (INC), Materials and Processing is a biannual open-access journal that provides a platform for the latest research, technical insights, and case studies in engineering and manufacturing.
              </p>
            </MDBCol>

            {/* Useful Links */}
            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6
                className="text-uppercase fw-bold mb-4"
                style={{ color: "var(--text-color)" }}
              >
                Quick Links
              </h6>
              <p style={{ color: "var(--text-color)" }}>
                <Link to="/" className="text-reset" onClick={scrollToTop}>
                  Home
                </Link>
              </p>
              <p style={{ color: "var(--text-color)" }}>
                <Link
                  to="/board-of-member"
                  className="text-reset"
                  onClick={scrollToTop}
                >
                  Board of Members
                </Link>
              </p>
              <p style={{ color: "var(--text-color)" }}>
                <Link
                  to="/previous-issues"
                  className="text-reset"
                  onClick={scrollToTop}
                >
                  Journals
                </Link>
              </p>
              <p style={{ color: "var(--text-color)" }}>
                <Link
                  to="/author-guidelines"
                  className="text-reset"
                  onClick={scrollToTop}
                >
                  Author Guidelines
                </Link>
              </p>
            </MDBCol>

            {/* Contact Information */}
            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6
                className="text-uppercase fw-bold mb-4"
                style={{ color: "var(--text-color)" }}
              >
                Contact
              </h6>
              <p style={{ color: "var(--text-color)" }}>
                <MDBIcon
                  icon="envelope"
                  className="me-3"
                  style={{ color: "var(--accent-color)" }}
                />
                asmincjournal@gmail.com
              </p>
              <p style={{ color: "var(--text-color)" }}>
              <p style={{ color: "var(--text-color)" }}>
                <MDBIcon
                  icon="phone"
                  className="me-3"
                  style={{ color: "var(--accent-color)" }}
                />{" "}
                080 2839 5327
              </p>
                <MDBIcon
                  icon="home"
                  className="me-3"
                  style={{ color: "var(--accent-color)" }}
                />
                C/O Process pumps (I) Pvt. Ltd.
              </p>
              <p style={{color:"var(--text-color)",marginLeft:"35px", marginTop:"-12px"}}>Plot No. 86, Phase 3, Peenya, Bengaluru, Karnataka 560058.</p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "var(--accent-color)", color: "var(--primary-color)" }}
      >
        © 2024 <b>ASM INC</b> (All copyrights reserved)
      </div>
    </MDBFooter>
  );
};

export default Footer;
