import SellGird from "@/components/sell/grid";
import Footer from "@/resuable/Footer";
import { client, urlFor } from "../lib/client";
import Navbar from "@/resuable/Navbar";
import { AiOutlineSearch } from "react-icons/ai";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/router";

const Sell = ({ phones }) => {
  const router = useRouter();
  const [filterItems, setfilterItems] = useState([]);

  const search = (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = phones.filter((phone) => {
      return phone.phoneName.toLowerCase().includes(query);
    });
    setfilterItems(filtered);
  };

  // when input not in focus remove results
  const removeResults = () => {
    setfilterItems([]);
  };

  // when input in focus show results
  const showResults = () => {
    setfilterItems(phones);
  };

  return (
    <div className="sell">
      <Navbar />

      <div>
        <div className="heading">
          <div className="text">
            <h1>Sell Your Devices</h1>
            <p className="sub">Select Brand</p>
          </div>

          <div className="input">
            <input
              type="text"
              onChange={search}
              onFocus={showResults}
              onBlur={removeResults}
              placeholder="Search for your device"
              size={24}
            />

            <div className="results">
              {filterItems.map((item) => {
                return (
                  <div
                    onClick={() => router.push(`/phones/${item.slug.current}`)}
                    className="result"
                    key={item.phoneName}
                  >
                    <img src={urlFor(item.phoneImage)} alt="" />

                    <div className="price">
                      <h4>{item.phoneName}</h4>

                      <p>
                        $ {item.newPrice} - ${item.brokenPrice}
                      </p>
                    </div>

                    <div className="arrow">
                      <FaArrowRight />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="icon">
              <AiOutlineSearch size={30} />
            </div>
          </div>

          {/* small ui with name containg the results of the search */}
        </div>

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
