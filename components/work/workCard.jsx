import React from "react";

const WorkCard = ({ img, name, desc }) => {
  return (
    <div className="work">
      <img src={img} alt="work" />
      <div className="text">
        <h3>{name}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default WorkCard;
