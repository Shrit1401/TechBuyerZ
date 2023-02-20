import React from "react";
import { companyName } from "./data";

const Working = () => {
  return (
    <section className="working ">
      <h1>
        How <b>{companyName}</b> Works
      </h1>

      <div className="steps">
        <div className="step">
          <img src="/step/one.png" alt="steps" />
          <h3>Check Price</h3>
          <p>
            Select your device & tell us about its current condition, and our
            advanced AI tech will tailor make the perfect price for you.
          </p>
        </div>
        <div className="step">
          <img src="/step/two.png" alt="steps" />
          <h3>Schedule Pickup</h3>
          <p>
            Book a free pickup from your home or work at a time slot that best
            suits your convenience.
          </p>
        </div>
        <div className="step">
          <img src="/step/three.png" alt="steps" />
          <h3>Get Paid</h3>
          <p>
            Did we mention you get paid as soon as our executive picks up your
            device? It’s instant payment all the way!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Working;
