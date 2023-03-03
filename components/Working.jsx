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
            Provide us with your personal information and select your preferred
            payment method.
          </p>
        </div>
        <div className="step">
          <img src="/step/two.png" alt="steps" />
          <h3>Schedule Pickup</h3>
          <p>
            Once you're done with step one, please go ahead and send us your
            phone, iPad, or MacBook. If what we receive matches the details you
            gave us for your quote, we'll take care of the shipping costs for
            you.
          </p>
        </div>
        <div className="step">
          <img src="/step/three.png" alt="steps" />
          <h3>Free Shipping</h3>
          <p>
            After receiving your product, we will process your payment within
            24-48 hours, which will include the agreed amount for your device
            and the cost of shipping
          </p>
        </div>
      </div>
    </section>
  );
};

export default Working;
