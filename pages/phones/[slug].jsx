import Footer from "@/resuable/Footer";
import Navbar from "@/resuable/Navbar";
import React, { useEffect, useState } from "react";
import { client, urlFor } from "@/pages/lib/client";
import { AiOutlineCloseCircle } from "react-icons/ai";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import PhoneModal from "@/components/phones/modal";

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
  const [errorVarient, setErrorVarient] = useState(false);
  const [price, setPrice] = useState("");

  const varientClicked = () => {
    const btns = document.querySelectorAll(".btns .btn");
    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        btns.forEach((btn) => {
          btn.classList.remove("active");
        });
        btn.classList.add("active");
        setvarientSelected(btn.innerHTML);
      });
    });

    switch (varientSelected) {
      case "New":
        setPrice("$" + newPrice);
        break;
      case "Mint":
        setPrice("$" + mintPrice);
        break;
      case "Used":
        setPrice("$" + usedPrice);
        break;
      case "Damaged":
        setPrice("$" + damagedPrice);
        break;
      case "Broken":
        setPrice("$" + brokenPrice);
        break;
      default:
        setPrice("");
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

            <div className="price">
              <p>
                Price Range : <b>{price}</b>
              </p>
              <p>
                Condtion: <b>{varientSelected}</b>
              </p>
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
        <PhoneModal
          price={price}
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
