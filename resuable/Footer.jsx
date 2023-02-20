import { companyName } from "@/components/data";
import { useRouter } from "next/router";
import React from "react";

const Footer = () => {
  const router = useRouter();
  return (
    <footer className="foot">
      <h1>We Sell Your Happiness</h1>

      <div className="button">
        <a onClick={() => router.push("/")} className="btn">
          Home
        </a>
        <a onClick={() => router.push("/sell")} className="btn active">
          Sell My Phone
        </a>
      </div>

      <div className="footer">
        <p>
          © {new Date().getFullYear()} {companyName} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
