import { companyName } from "@/components/data";
import { useRouter } from "next/router";
import React from "react";

const Footer = () => {
  const router = useRouter();
  return (
    <footer className="foot">
      <div className="footer">
        <div className="footer__logo">
          <img src="/logo.png" alt="logo" />
        </div>

        <div className="footer__links">
          <div className="footer__links__item">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__links">
          <div className="footer__links__item">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
        </div>

        {/* customer care */}
        <div className="footer__links">
          <div className="footer__links__item">
            <h3>Customer Care</h3>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>

              <li>
                <a href="#">Shipping</a>
              </li>

              <li>
                <a href="#">Returns</a>
              </li>

              <li>
                <a href="#">Order Status</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className="sub">&copy; 2021 {companyName}. All rights reserved.</p>
      <p className="sub">
        Made by{" "}
        <a href="https://github.com/shrit1401" target="_blank">
          Shrit1401
        </a>
      </p>
    </footer>
  );
};

export default Footer;
