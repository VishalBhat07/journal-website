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

const Footer = () => {
  const scrollToTop = () => window.scrollTo(0, 0);

  useEffect(() => {
    const handleLinkClick = (event) => {
      if (event.target.closest("a")) scrollToTop();
    };
    window.addEventListener("click", handleLinkClick);
    return () => window.removeEventListener("click", handleLinkClick);
  }, []);

  return (
    <footer
      className="relative text-center bg-cover bg-center bg-no-repeat bg-background text-foreground"
      style={{
        backgroundImage: `url('https://www.asminternational.org/wp-content/uploads/2023/03/Footer-Background-Image.png')`,
        backgroundPosition: "center top",
        backgroundSize: "cover",
      }}
    >
      {/* Reduced opacity overlay for more visible background */}
      <div className="absolute inset-0 bg-background/40 z-0" />

      <section className="relative z-10 flex flex-col md:flex-row justify-between items-center px-8 py-4 border-y border-foreground/20">
        <div className="hidden md:block text-white">
          Get connected with us on social networks:
        </div>
        <div className="flex gap-4 mx-auto md:mx-0">
          {[
            { href: "https://www.facebook.com/", Icon: Facebook },
            { href: "https://twitter.com/", Icon: Twitter },
            { href: "https://www.instagram.com/", Icon: Instagram },
            { href: "https://www.linkedin.com/", Icon: Linkedin },
            {
              href: "https://github.com/VishalBhat07/journal-website",
              Icon: Github,
            },
          ].map(({ href, Icon }, i) => (
            <a
              key={i}
              href={href}
              aria-label={Icon.name}
              className="text-white hover:text-blue-300 transition duration-300"
            >
              <Icon size={20} className="drop-shadow-lg hover:drop-shadow-xl" />
            </a>
          ))}
        </div>
      </section>

      <section className="relative z-10 px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto text-left">
          <div>
            <h6 className="font-bold uppercase mb-4 text-sm text-white">
              ASM India
            </h6>
            <p className="text-sm leading-relaxed text-gray-200">
              Published by the ASM India National Council Trust (INC), Materials
              and Processing is a biannual open-access journal that provides a
              platform for the latest research, technical insights, and case
              studies in engineering and manufacturing.
            </p>
          </div>

          <div>
            <h6 className="font-bold uppercase mb-4 text-sm text-white">
              About ASM
            </h6>
            <div className="flex flex-col gap-2 text-sm text-gray-200">
              {[
                "contact",
                "about",
                "strategic-plan",
                "advertise",
                "technical-support",
                "legal",
              ].map((path) => (
                <Link
                  key={path}
                  to={`/${path}`}
                  onClick={scrollToTop}
                  className="hover:text-blue-300 transition"
                >
                  {path
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (c) => c.toUpperCase())}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h6 className="font-bold uppercase mb-4 text-sm text-white">
              Membership
            </h6>
            <div className="flex flex-col gap-2 text-sm text-gray-200">
              {["join", "benefits", "awards", "career-center"].map((path) => (
                <Link
                  key={path}
                  to={`/${path}`}
                  onClick={scrollToTop}
                  className="hover:text-blue-300 transition"
                >
                  {path
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (c) => c.toUpperCase())}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h6 className="font-bold uppercase mb-4 text-sm text-white">
              Contact
            </h6>
            <div className="flex flex-col gap-3 text-sm text-gray-200">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-blue-300" />
                <span>asmincjournal@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-blue-300" />
                <span>080 2839 5327</span>
              </div>
              <div className="flex items-start gap-2">
                <Home size={16} className="text-blue-300 mt-1" />
                <span>
                  C/O Process pumps (I) Pvt. Ltd.
                  <br />
                  Plot No. 86, Phase 3, Peenya, Bengaluru, Karnataka 560058.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <h6 className="font-bold uppercase mb-4 text-sm text-white">
            Who We Are
          </h6>
          <p className="text-sm max-w-3xl mx-auto leading-relaxed text-gray-200">
            ASM International is the world's largest association of
            materials-centric engineers and scientists. We are dedicated to
            informing, educating, and connecting the materials community to
            solve problems and stimulate innovation around the world.
          </p>
        </div>
      </section>

      <div className="relative z-10 bg-blue-600/90 text-white text-center py-4 backdrop-blur-md">
        © 2024 <strong>ASM INC</strong> (All copyrights reserved)
      </div>
    </footer>
  );
};

export default Footer;
