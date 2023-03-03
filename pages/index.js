import Faq from "@/components/Faq";
import Landing from "@/components/Landing";
import Why from "@/components/Why";
import Working from "@/components/Working";
import Footer from "@/resuable/Footer";
import Navbar from "@/resuable/Navbar";
import React from "react";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Landing />
        <Working />
        <Faq />
        <Footer />
      </main>
    </>
  );
}
