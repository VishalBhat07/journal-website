import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  Phone,
  Home,
} from "lucide-react";
import "./Footer.css";

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
    <footer
      style={{ backgroundColor: "var(--primary-color)" }}
      className="footer-container"
    >
      {/* Social Links Section */}
      <section className="social-section">
        <div className="social-text">
          <span style={{ color: "var(--text-color)" }}>
            Get connected with us on social networks:
          </span>
        </div>

        <div className="social-icons">
          <a
            href="https://www.facebook.com/"
            aria-label="Facebook"
            className="social-link"
          >
            <Facebook size={20} style={{ color: "var(--accent-color)" }} />
          </a>
          <a
            href="https://twitter.com/"
            aria-label="Twitter"
            className="social-link"
          >
            <Twitter size={20} style={{ color: "var(--accent-color)" }} />
          </a>
          <a
            href="https://www.instagram.com/"
            aria-label="Instagram"
            className="social-link"
          >
            <Instagram size={20} style={{ color: "var(--accent-color)" }} />
          </a>
          <a
            href="https://www.linkedin.com/"
            aria-label="LinkedIn"
            className="social-link"
          >
            <Linkedin size={20} style={{ color: "var(--accent-color)" }} />
          </a>
          <a
            href="https://github.com/VishalBhat07/journal-website"
            aria-label="GitHub"
            className="social-link"
          >
            <Github size={20} style={{ color: "var(--accent-color)" }} />
          </a>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="main-content">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-column">
            <h6 className="footer-heading">ASM India</h6>

            <p className="footer-text">
              Published by the ASM India National Council Trust (INC), Materials
              and Processing is a biannual open-access journal that provides a
              platform for the latest research, technical insights, and case
              studies in engineering and manufacturing.
            </p>
          </div>

          {/* About ASM Links */}
          <div className="footer-column">
            <h6 className="footer-heading">About ASM</h6>
            <div className="footer-links">
              <p>
                <Link
                  to="/contact"
                  className="footer-link"
                  onClick={scrollToTop}
                >
                  Contact Us
                </Link>
              </p>
              <p>
                <Link to="/about" className="footer-link" onClick={scrollToTop}>
                  About ASM
                </Link>
              </p>
              <p>
                <Link
                  to="/strategic-plan"
                  className="footer-link"
                  onClick={scrollToTop}
                >
                  Strategic Plan
                </Link>
              </p>
              <p>
                <Link
                  to="/advertise"
                  className="footer-link"
                  onClick={scrollToTop}
                >
                  Advertise with Us
                </Link>
              </p>
              <p>
                <Link
                  to="/technical-support"
                  className="footer-link"
                  onClick={scrollToTop}
                >
                  Technical Support
                </Link>
              </p>
              <p>
                <Link to="/legal" className="footer-link" onClick={scrollToTop}>
                  Legal
                </Link>
              </p>
            </div>
          </div>

          {/* Membership Links */}
          <div className="footer-column">
            <h6 className="footer-heading">Membership</h6>
            <div className="footer-links">
              <p>
                <Link to="/join" className="footer-link" onClick={scrollToTop}>
                  Join
                </Link>
              </p>
              <p>
                <Link
                  to="/benefits"
                  className="footer-link"
                  onClick={scrollToTop}
                >
                  Benefits
                </Link>
              </p>
              <p>
                <Link
                  to="/awards"
                  className="footer-link"
                  onClick={scrollToTop}
                >
                  Awards
                </Link>
              </p>
              <p>
                <Link
                  to="/career-center"
                  className="footer-link"
                  onClick={scrollToTop}
                >
                  Career Center
                </Link>
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="footer-column">
            <h6 className="footer-heading">Contact</h6>

            <div className="contact-item">
              <Mail size={16} style={{ color: "var(--accent-color)" }} />
              <span className="footer-text">asmincjournal@gmail.com</span>
            </div>

            <div className="contact-item">
              <Phone size={16} style={{ color: "var(--accent-color)" }} />
              <span className="footer-text">080 2839 5327</span>
            </div>

            <div className="contact-item">
              <Home size={16} style={{ color: "var(--accent-color)" }} />
              <span className="footer-text">
                C/O Process pumps (I) Pvt. Ltd.
              </span>
            </div>

            <div className="address-text">
              Plot No. 86, Phase 3, Peenya, Bengaluru, Karnataka 560058.
            </div>
          </div>
        </div>

        {/* Who We Are Section */}
        <div className="who-we-are-section">
          <h6 className="footer-heading">Who We Are</h6>
          <p className="footer-description">
            ASM International is the world's largest association of
            materials-centric engineers and scientists. We are dedicated to
            informing, educating, and connecting the materials community to
            solve problems and stimulate innovation around the world.
          </p>
        </div>
      </section>

      <div className="footer-bottom">
        © 2024 <b>ASM INC</b> (All copyrights reserved)
      </div>
    </footer>
  );
};

export default Footer;
