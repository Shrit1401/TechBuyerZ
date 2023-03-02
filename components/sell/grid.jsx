import { urlFor } from "@/lib/client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { brands } from "../data";
import SellBlock from "./sellBlock";

const SellGird = ({ phones }) => {
  const router = useRouter();
  const [brandVisible, setBrandVisible] = useState(false);
  const [brandName, setbrandName] = useState("");

  const brandClicked = (brand) => {
    setBrandVisible(true);
    setbrandName(brand);
  };

  return (
    <div className="sell-grid">
      {brands.map((brand) => {
        return (
          <div
            onClick={() => brandClicked(brand.name)}
            className={brandVisible ? "none" : "show"}
          >
            <SellBlock key={brand.name} name={brand.name} img={brand.svg} />
          </div>
        );
      })}

      {phones.map((phone) => {
        return (
          <div
            className={`phone-grid {brandVisible ? "show" : "none"}`}
            style={{
              display:
                phone.company ===
                brandName.split(" ").join("").toLocaleLowerCase()
                  ? "block"
                  : "none",
            }}
            onClick={() => router.push(`/sell/${phone.slug.current}`)}
          >
            <SellBlock key={phone._id} img={urlFor(phone.phoneImage)} />
            <h2>{phone.phoneName}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default SellGird;
