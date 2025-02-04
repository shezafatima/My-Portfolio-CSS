
import Link from "next/link";
import React from "react";
import { BsFacebook, BsYoutube, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import "../../styles/footer.css"; 

const Footer = () => {
  return (
    <div id="Footer" className="footer-wrapper">
      <footer className="footer">
        <div className="footer-container">
          <a className="footer-brand-container">
            <span className="footer-brand">
              Sheza Fatima
            </span>
          </a>
          <p className="footer-text">
            © 2024 Sheza Fatima. Created by Sheza Fatima
          </p>
          <span className="footer-social">
            <Link 
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61566351903578&mibextid=ZbWKwL" 
              className="footer-social-link"
            >
              <BsFacebook />
            </Link>
            <Link
              target="_blank"
              href="https://www.youtube.com/@shizacrafts7250"
              className="footer-social-link"
            >
              <BsYoutube />
            </Link>
            <Link 
              target="_blank"
              href="https://www.instagram.com/1824digital_sf?igsh=ZGUzMzM3NWJiOQ=="
              className="footer-social-link"
            >
              <BsInstagram />
            </Link>
            <Link 
              target="_blank"
              href="https://github.com/shezafatima"
              className="footer-social-link"
            >
              <BsGithub />
            </Link>
            <a className="footer-social-link">
              <BsLinkedin />
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
