import React from "react";
import WorkCard from "./work/workCard";

const Why = () => {
  return (
    <section className="working ">
      <h1>Why Us?</h1>
      <div className="workList">
        <div className="works">
          <WorkCard
            img="/work/one.png"
            name="Best Prices"
            desc="Objective AI-based pricing"
          />
          <WorkCard
            img="/work/two.png"
            name="Instant Payment"
            desc="Instant Money Transfer
"
          />
          <WorkCard
            img="/work/three.png"
            name="Simple & Convenient"
            desc="Check price, schedule pickup & get paid"
          />
        </div>
        <div className="works">
          <WorkCard
            img="/work/four.png"
            name="Free Doorstep Pickup"
            desc="No fees for pickup across 1500 cities across India
"
          />
          <WorkCard
            img="/work/five.png"
            name="Factory Grade Data Wipe"
            desc="100% Safe and Data Security Guaranteed"
          />
          <WorkCard
            img="/work/six.png"
            name="Valid Purchase Invoice"
            desc="Genuine Bill of Sale

"
          />
        </div>
      </div>
    </section>
  );
};

export default Why;
