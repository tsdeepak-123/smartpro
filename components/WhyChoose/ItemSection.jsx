import React from "react";
import ItemCard from "./ItemCard";

const ItemSection = () => {
  const itemData = [
    { name: "Premium Quality", backgroundIcon: "/assets/svg/WhySmart/Premium.svg" },
    { name: "Simple and Reliable", backgroundIcon: "/assets/svg/WhySmart/Simple.svg"},
    { name: "Confidentiality", backgroundIcon: "/assets/svg/WhySmart/Confident.svg"},
    { name: "Affordable Prices", backgroundIcon: "/assets/svg/WhySmart/Price.svg"},
    { name: "Fair and Respectful", backgroundIcon: "/assets/svg/WhySmart/Fair.svg"},
    { name: "Trusted Relationship", backgroundIcon: "/assets/svg/WhySmart/Trust.svg"}
  ];

  return (
    <section className="flex flex-col">
      <div className="flex justify-end mb-4 gap-4" style={{ marginRight: "100px" }}>
        {itemData.slice(0, 3).map((item, index) => (
          <ItemCard
            key={index}
            name={item.name}
            backgroundIcon={item.backgroundIcon}
          />
        ))}
      </div>
      <div className="flex justify-end gap-4">
        {itemData.slice(3, 6).map((item, index) => (
          <ItemCard
            key={index}
            name={item.name}
            backgroundIcon={item.backgroundIcon}
          />
        ))}
      </div>
    </section>
  );
};

export default ItemSection;
