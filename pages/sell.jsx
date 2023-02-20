import SellGird from "@/components/sell/grid";
import Footer from "@/resuable/Footer";
import { client } from "../lib/client";
import Navbar from "@/resuable/Navbar";
import React from "react";

const Sell = ({ phones }) => {
  return (
    <div className="sell">
      <Navbar />

      <div>
        <h1>Sell Your Devices</h1>
        <p className="sub">Select Brand</p>

        <SellGird phones={phones} />
      </div>
      <Footer />
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "phones"]';
  const phones = await client.fetch(query);

  return {
    props: { phones },
  };
};

export default Sell;
