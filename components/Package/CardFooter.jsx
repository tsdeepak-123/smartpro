import React from "react";
import CardItem from "./CardItem";

const items = [
  {
    icon: "/assets/svg/Package/Flight.svg",
    label: "2 Flights",
  },
  {
    icon: "/assets/svg/Package/Hotel.svg",
    label: "2 Hotels",
  },
  {
    icon: "/assets/svg/Package/Activity.svg",
    label: "5 Activities",
  },
  {
    icon: "/assets/svg/Package/Transfer.svg",
    label: "5 Transfers",
  },
];

const CardFooter = () => {
  return (
    <section className="flex">
      {items.map((item, index) => (
        <CardItem key={index} icon={item.icon} label={item.label} />
      ))}
    </section>
  );
};

export default CardFooter;
