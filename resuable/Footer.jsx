import { companyName } from "@/components/data";
import { useRouter } from "next/router";
import React from "react";
import { AiFillMail } from "react-icons/ai";
import { FaLocationArrow, FaMailBulk } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

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
            <h3>Links</h3>
            <ul>
              <li onClick={() => router.push("/")}>
                <a href="#">Home</a>
              </li>
              <li onClick={() => router.push("/sell")}>
                <a href="#">Sell Devices</a>
              </li>
            </ul>
          </div>
        </div>

        {/* customer care */}
        <div className="footer__links">
          <div className="footer__links__item">
            <h3>Customer Care</h3>
            <ul className="care">
              <li
                style={{
                  paddingTop: "20px",
                }}
              >
                <GoLocation size={48} /> Address: 20436 Rte 19 Ste 620 #348
                Cranberry Township PA 16066 USA
              </li>

              <li style={{ paddingTop: "20px" }}>
                <a href="mailto:sales@buybacksurgeon.com">
                  {" "}
                  <AiFillMail /> sales@buybacksurgeon.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className="sub">
        &copy;
        {new Date().getFullYear()} {companyName}. All rights reserved.
      </p>
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
