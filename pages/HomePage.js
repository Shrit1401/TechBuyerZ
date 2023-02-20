import Faq from "@/components/Faq";
import Landing from "@/components/Landing";
import Why from "@/components/Why";
import Working from "@/components/Working";
import Footer from "@/resuable/Footer";
import Navbar from "@/resuable/Navbar";
import React from "react";

const HomePage = ({ faqs }) => {
  return (
    <div>
      <Navbar />
      <Landing />
      <Working />
      <Faq content={faqs} />

      <Why />
      <Footer />
    </div>
  );
};

export default HomePage;
