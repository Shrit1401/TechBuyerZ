import Footer from "@/resuable/Footer";
import Navbar from "@/resuable/Navbar";
import React from "react";

const Error = () => {
  return (
    <div>
      <Navbar />

      <section className="error">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
        <a href="/">Go to Home</a>
      </section>

      <Footer />
    </div>
  );
};

export default Error;
