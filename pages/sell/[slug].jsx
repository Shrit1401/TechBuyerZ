import Footer from "@/resuable/Footer";
import Navbar from "@/resuable/Navbar";
import React, { useEffect, useState } from "react";
import { client, urlFor } from "@/lib/client";
import "react-phone-number-input/style.css";
import PhoneModal from "@/components/phones/modal";
import { FaInfoCircle } from "react-icons/fa";
import {
  AttInfo,
  brokenInfo,
  constDeductionStorage,
  costDeduction,
  damagedInfo,
  mintInfo,
  newInfo,
  otherNetworkInfo,
  sprintInfo,
  tmobileInfo,
  unlockedInfo,
  usedInfo,
  verizonInfo,
} from "@/components/data";

const PhoneDetailsPage = ({ phone, phones }) => {
  const {
    phoneImage,
    phoneName,
    newPrice,
    mintPrice,
    usedPrice,
    damagedPrice,
    brokenPrice,
  } = phone;

  const [varientSelected, setvarientSelected] = useState("");
  const [networkSelected, setnetworkSelected] = useState("");
  const [storageSelected, setstorageSelected] = useState("");
  const [errorVarient, setErrorVarient] = useState(false);
  const [price, setPrice] = useState("");
  const [varientInfo, setVarientInfo] = useState("");
  const [networkInfo, setnetworkInfo] = useState("");

  const [priceNetwork, setpriceNetwork] = useState("");
  const [priceStorage, setpriceStorage] = useState("");
  const [priceReal, setPriceReal] = useState("");

  const varientClicked = () => {
    const btns = document.querySelectorAll(".varients .btns .btn");

    switch (varientSelected) {
      case "New":
        setPrice(newPrice);
        break;
      case "Mint":
        setPrice(mintPrice);
        break;
      case "Used":
        setPrice(usedPrice);
        break;
      case "Damaged":
        setPrice(damagedPrice);
        break;
      case "Broken":
        setPrice(brokenPrice);
        break;
      default:
        setPrice("");
    }

    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        setvarientSelected(btn.innerHTML);
        btns.forEach((btn) => {
          btn.classList.remove("active");
        });
        btn.classList.add("active");
      });
    });
  };

  const networkClicked = () => {
    const btns = document.querySelectorAll(".network .btns .btn");
    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        btns.forEach((btn) => {
          btn.classList.remove("active");
        });
        btn.classList.add("active");
        setnetworkSelected(btn.innerHTML);
      });
    });

    switch (networkSelected) {
      case "Unlocked":
        setpriceNetwork(-costDeduction);
        break;
      case "AT-T":
        setpriceNetwork(-costDeduction * 2);
        break;
      case "Verizon":
        setpriceNetwork(-costDeduction * 3);
        break;
      case "Sprint":
        setpriceNetwork(-costDeduction * 4);
        break;
      case "T-Mobile":
        setpriceNetwork(-costDeduction * 5);
        break;
      case "Other":
        setpriceNetwork(-costDeduction * 6);
        break;
      default:
        setPrice("");
    }
  };

  const storageClicked = () => {
    const btns = document.querySelectorAll(".storage .btns .btn");
    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        btns.forEach((btn) => {
          btn.classList.remove("active");
        });
        btn.classList.add("active");
        setstorageSelected(btn.innerHTML);
      });
    });

    switch (storageSelected) {
      case "256GB":
        setpriceStorage("");
        break;

      case "128GB":
        setpriceStorage(-constDeductionStorage);
        break;

      default:
        setpriceStorage("");
    }
  };

  const getEstimatedValue = () => {
    const btns = document.querySelectorAll(".btns .btn");

    if (varientSelected === null || varientSelected === "") {
      setErrorVarient(true);
      return;
    }

    btns.forEach((btn) => {
      if (btn.classList.contains("active")) {
        document.querySelector(".modal").classList.add("show");
      }
    });
  };

  useEffect(() => {
    varientClicked();
    networkClicked();
    storageClicked();
  }, []);

  if (errorVarient) {
    setTimeout(() => {
      setErrorVarient(false);
    }, 3000);
  }

  useEffect(() => {
    if (varientSelected === "") setErrorVarient(true);
    const modal = document.querySelector(".modal");
    const close = document.querySelector(".value a");

    close.addEventListener("click", () => {
      modal.classList.toggle("show");
    });

    const closeBtn = document.querySelector(".close");
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("show");
    });
  }, []);

  useEffect(() => {
    // if price is less zero then set price to empty string

    if (price + priceNetwork + priceStorage < 0) {
      setPriceReal("$0");
    } else {
      setPriceReal("$" + (price + priceNetwork + priceStorage));
    }
  }, [priceReal, priceNetwork, price, priceStorage]);

  useEffect(() => {
    switch (varientSelected) {
      case "New":
        setVarientInfo(newInfo);
        break;

      case "Mint":
        setVarientInfo(mintInfo);
        break;

      case "Used":
        setVarientInfo(usedInfo);
        break;

      case "Damaged":
        setVarientInfo(damagedInfo);
        break;

      case "Broken":
        setVarientInfo(brokenInfo);
        break;
    }

    switch (networkSelected) {
      case "Unlocked":
        setnetworkInfo(unlockedInfo);
        break;

      case "Verizon":
        setnetworkInfo(verizonInfo);
        break;

      case "AT-T":
        setnetworkInfo(AttInfo);
        break;

      case "Sprint":
        setnetworkInfo(sprintInfo);
        break;

      case "T-Mobile":
        setnetworkInfo(tmobileInfo);
        break;

      case "Other":
        setnetworkInfo(otherNetworkInfo);
        break;

      default:
        setnetworkInfo("");
    }
  }, [varientSelected, networkSelected]);

  useEffect(() => {
    const tooltip = document.querySelector(".tooltip");
    const info = document.querySelector(".icon");

    info.addEventListener("mouseover", () => {
      tooltip.classList.add("show");
    });

    info.addEventListener("mouseout", () => {
      tooltip.classList.remove("show");
    });

    tooltip.addEventListener("mouseover", () => {
      tooltip.classList.add("show");
    });

    tooltip.addEventListener("mouseout", () => {
      tooltip.classList.remove("show");
    });
  }, []);

  return (
    <div className="phone-page">
      <Navbar />
      <section>
        <h1>Sell Your Devices</h1>
        <p className="sub">Sell Old {phoneName}</p>
      </section>

      <div className="flex">
        <div className="left">
          <img src={urlFor(phoneImage)} alt={phoneName} />
        </div>

        <div className="right">
          <div className="first-page">
            <div className="about">
              <h3>{phoneName}</h3>
              <p className="sub">My Phone Is:</p>
            </div>

            <div className="varients">
              <p className="sub">Condition:</p>
              <div className="btns">
                <a onClick={() => varientClicked()} className="btn ">
                  New
                </a>
                <a onClick={() => varientClicked()} className="btn">
                  Mint
                </a>
                <a onClick={() => varientClicked()} className="btn">
                  Used
                </a>
                <a onClick={() => varientClicked()} className="btn">
                  Damaged
                </a>
                <a onClick={() => varientClicked()} className="btn">
                  Broken
                </a>
              </div>
            </div>

            <div className="network">
              <p className="sub">Network:</p>
              <div className="btns ">
                <a onClick={() => networkClicked()} className="btn ">
                  Unlocked
                </a>
                <a onClick={() => networkClicked()} className="btn">
                  AT-T
                </a>
                <a onClick={() => networkClicked()} className="btn">
                  Verizon
                </a>
                <a onClick={() => networkClicked()} className="btn">
                  Sprint
                </a>
                <a onClick={() => networkClicked()} className="btn">
                  T-Mobile
                </a>
                <a onClick={() => networkClicked()} className="btn">
                  Other
                </a>
              </div>
            </div>

            <div className="storage">
              <p className="sub">Storage:</p>
              <div className="btns ">
                <a onClick={() => storageClicked()} className="btn ">
                  256GB
                </a>
                <a onClick={() => storageClicked()} className="btn">
                  128GB
                </a>
              </div>
            </div>

            <div className="price">
              <div className="left">
                <p>
                  Price Range : <b>{priceReal}</b>
                </p>
                <p>
                  Condtion:{" "}
                  <b>
                    {varientSelected}, {networkSelected}, {storageSelected}
                  </b>
                </p>
              </div>

              <div className="right">
                <div className="icon">
                  <FaInfoCircle className="info" size={24} />
                  <p className="sub">Info</p>
                </div>

                {/* tooltip  */}

                <div className="tooltip">
                  <p>
                    <b>{varientSelected}</b>: {varientInfo}
                  </p>

                  <p>
                    <b>{networkSelected}</b>: {networkInfo}
                  </p>
                </div>
              </div>
            </div>

            <div className="value">
              <a onClick={getEstimatedValue} className="btn active">
                Continue
              </a>
              <p className={errorVarient ? "show" : "none"}>
                Please select a varient
              </p>
            </div>
          </div>
        </div>

        {/* modal */}
        {/* price real is 0 then alert  */}

        <PhoneModal
          price={priceReal}
          phoneName={phoneName}
          varientSelected={varientSelected}
        />
      </div>
      <Footer />
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "phones"] {
    slug{
      current
    }
  }`;
  const phones = await client.fetch(query);

  const paths = phones.map((phone) => ({
    params: { slug: phone.slug.current },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "phones" && slug.current == "${slug}"][0]`;
  const phonesQuery = '*[_type == "phones"]';
  const phone = await client.fetch(query);
  const phones = await client.fetch(phonesQuery);

  return {
    props: { phone, phones },
  };
};

export default PhoneDetailsPage;
