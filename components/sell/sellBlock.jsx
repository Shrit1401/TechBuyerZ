import React from "react";

const SellBlock = ({ name, img }) => {
  return (
    <div className="seller">
      <div className="sell-block">
        <img src={img} alt="" />
      </div>
      <h2>{name}</h2>
    </div>
  );
};

export default SellBlock;
