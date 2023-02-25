import { useRouter } from "next/router";
import React from "react";
import { AiOutlineCheck, AiOutlineSearch } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import Block from "../resuable/block";

const Landing = () => {
  const router = useRouter();
  return (
    <div className="landing">
      <div className="left">
        <h1>Sell your Devices for Instant Cash</h1>
        <div className="checks">
          <div className="check">
            <AiOutlineCheck />
            Maximum Value
          </div>
          <div className="check">
            <AiOutlineCheck />
            Safe & Hassle-free
          </div>
          <div className="check">
            <AiOutlineCheck />
            Free Doorstep Pickup
          </div>
        </div>

        <div className="brands" onClick={() => router.push("/sell")}>
          <Block
            key="apple"
            image="https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg"
          />
          <Block
            key="apple"
            image="https://itronics.in/wp-content/uploads/2021/09/iphone-13-pink-select-2021.png"
          />
          <Block
            key="apple"
            image="https://itronics.in/wp-content/uploads/2022/06/mbp-spacegray-select-202206-removebg-preview.png"
          />

          <a href="#" onClick={() => router.push("/sell")} className="more">
            <p>
              More
              <br /> Brands
            </p>
            <FaArrowRight />
          </a>
        </div>
        <div onClick={() => router.push("/sell")} className="btn mobile">
          More Brands
        </div>
      </div>

      <div className="right">
        <img src="/landImg.png" alt="" />
      </div>
    </div>
  );
};

export default Landing;
