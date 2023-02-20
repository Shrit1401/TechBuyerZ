import React from "react";

const Block = ({ image }) => {
  return (
    <div className="block">
      <img src={image} alt="" />
    </div>
  );
};

export default Block;
