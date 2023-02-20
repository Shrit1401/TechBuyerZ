export const companyName = "TechBuyerZ";

export const brands = [
  {
    name: "Samsung Phones",
    svg: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
  },
  {
    name: "Apple Iphone",
    svg: "https://itronics.in/wp-content/uploads/2021/09/iphone-13-pink-select-2021.png",
  },
  {
    name: "Apple Macbook",
    svg: "https://itronics.in/wp-content/uploads/2022/06/mbp-spacegray-select-202206-removebg-preview.png",
  },
  {
    name: "Apple Ipad",
    svg: "https://itronics.in/wp-content/uploads/2021/05/ipad-pro-11-select-202104_GEO_IN_GRID-e1660552788240.png",
  },
];

export const phoneCompany = [
  ...brands.map((brand) => {
    return {
      name: brand.name.split(" ").join("").toLocaleLowerCase(),
      title: brand.name,
    };
  }),
];
