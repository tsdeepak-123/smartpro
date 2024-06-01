import FeatureIcon from "./FeatureIcon";

const Features = () => {
  const FeatureList = [
    { Icon: "/assets/svg/Download/Heart.svg", feature: "Easy to Use" },
    { Icon: "/assets/svg/Download/Call.svg", feature: "24 Hours Support" },
    { Icon: "/assets/svg/Download/User.svg", feature: "User Friendly" },
  ];
  return (
    <section className="flex gap-4">
      {FeatureList.map((item, index) => (
        <FeatureIcon key={index} Icon={item.Icon} feature={item.feature} />
      ))}
    </section>
  );
};

export default Features;
