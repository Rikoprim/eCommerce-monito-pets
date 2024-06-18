import { Container } from "react-bootstrap";
import "./footer.scss";
import Subscribe from "../Subscribe";

const Footer = () => {
  const navItems = [
    { id: 1, label: "Home", url: "#" },
    { id: 2, label: "Category", url: "#" },
    { id: 3, label: "About", url: "#" },
    { id: 4, label: "Contact", url: "#" },
  ];

  return (
    <footer>
      <Container>
        <Subscribe />
        <div className="footer-row">
          <nav className="footer-nav">
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={item.url}>{item.label}</a>
                  <svg
                    width="42"
                    height="38"
                    viewBox="0 0 42 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="" fill="#003459" />
                  </svg>
                </li>
              ))}
            </ul>
          </nav>
          <div className="footer-social">
            <a href="https://www.facebook.com/">
              <img src="/img/icons/fb-icon.svg" alt="Facebook" />
            </a>
            <a href="https://www.twitter.com/">
              <img src="/img/icons/tw-icon.svg" alt="Twitter" />
            </a>
            <a href="https://www.instagram.com/">
              <img src="/img/icons/inst-icon.svg" alt="Instagram" />
            </a>
            <a href="https://www.youtube.com/">
              <img src="/img/icons/yt-icon.svg" alt="YouTube" />
            </a>
          </div>
        </div>
        <hr />
        <div className="footer-row">
          <p className="copyright">&copy; 2022 Monito. All rights reserved.</p>
          <a href="#">
            <img
              src="/img/logo.svg"
              alt="Monito-Logo"
              width="auto"
              height="auto"
            />
          </a>
          <div className="copyright-links">
            <a href="/terms-of-service">Terms of Service</a>
            <a href="/privacy-policy">Privacy Policy</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
