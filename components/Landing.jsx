import { useRouter } from "next/router";
import React from "react";
import { AiOutlineCheck, AiOutlineSearch } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import Block from "../resuable/block";
import { brands } from "./data";

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

        <div className="brands">
          <Block key="apple" image={brands[0].svg} url="sellSamsung" />
          <Block key="apple" image={brands[1].svg} url="sellIphone" />
          <Block key="apple" image={brands[2].svg} url="sellMac" />

          <a href="#" onClick={() => router.push("/sell")} className="more">
            <p>
              More
              <br /> Devices
            </p>
            <FaArrowRight />
          </a>
        </div>
        <div onClick={() => router.push("/sell")} className="btn mobile">
          More Devices
        </div>
      </div>

      <div className="right">
        <img src="/landImg.png" alt="" />
      </div>
    </div>
  );
};

export default Landing;
