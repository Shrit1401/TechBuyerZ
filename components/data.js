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

// make a array for faq , question and answer

export const faq = [
  {
    question: "What is TechBuyerZ?",
    answer:
      "TechBuyerZ is a platform that helps you to buy the best tech products at the best price. We have a team of experts who research and review the products and then recommend the best ones to you.",
  },
  {
    question: "How does TechBuyerZ work?",
    answer:
      "TechBuyerZ is a platform that helps you to buy the best tech products at the best price. We have a team of experts who research and review the products and then recommend the best ones to you.",
  },
  {
    question: "How does TechBuyerZ work?",

    answer:
      "TechBuyerZ is a platform that helps you to buy the best tech products at the best price. We have a team of experts who research and review the products and then recommend the best ones to you.",
  },
  {
    question: "How does TechBuyerZ work?",
    answer:
      "TechBuyerZ is a platform that helps you to buy the best tech products at the best price. We have a team of experts who research and review the products and then recommend the best ones to you.",
  },
];

const newInfo = `Factory sealed in retail package with all included accessories,
Brand new & never used,
Still has plastic around the outside of box
Box has not been open,
iCloud has never been activated,
IMEI is ready for activation`;

const mintInfo = `Like New with no signs of use,
Fully functional,
No cracks, scratches, or other marks,
Clear for activation,
Battery health in good standing above 95%.
`;

const usedInfo = `Works 100% fully functional with no operational issues,
Has never been wet,
Previous iCloud account has been removed,
IMEI is clear for activation,
NO chips, cracks, or damage to bezel or screen,
Moderate signs of wear,
No chips or cracks in front or back glass,
Battery health in good standing above 85%`;

const damagedInfo = `Cracked front glass with no LCD damage,
Non-working buttons or headphone ,
Battery is defective,
Non-working speaker or microphone,
Has another functional defect,
`;

const brokenInfo = `Does not recognize a SIM card,
Reads No Service,
Does not connect to Wi-Fi,
Unable to make phone calls,
Non-working fingerprint sensor,
Non-working touchscreen,
Bad LCD (damage, burns, or no display),
Bent frame,
Water/Liquid damage,
Unable to power on,
Not clear for activation,
Software issues,
Bad IMEI`;

export { newInfo, mintInfo, usedInfo, damagedInfo, brokenInfo };
