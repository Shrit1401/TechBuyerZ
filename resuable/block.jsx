import React from "react";
import { useRouter } from "next/router";

const Block = ({ image, url }) => {
  const router = useRouter();

  return (
    <div className="block" onClick={() => router.push(url)}>
      <img src={image} alt="" />
    </div>
  );
};

export default Block;
