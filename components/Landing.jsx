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

        <div className="brands">
          <Block
            key="apple"
            image="https://cdn.sanity.io/images/wc54ztom/production/5fc8f45a79332325f61c0453a7a44fbd2203e647-144x144.png"
            url="phones/iphone-13-pro-max"
          />
          <Block
            key="apple"
            image="https://cdn.sanity.io/images/wc54ztom/production/18bb49dc9238d77038f5f51cfab3472b1ea82a7e-172x172.png"
            url="phones/galaxy-s22-ultra"
          />
          <Block
            key="apple"
            image="https://cdn.sanity.io/images/wc54ztom/production/c8eead700704369438090a2da3a5a2c22c1ca627-239x167.png"
            url="phones/macbook-pro-14-and-16"
          />

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
