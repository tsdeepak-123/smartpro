import React from "react";
import PackageCard from "./PackageCard";
import Button from "../Button/Button";
import CategorySection from "./CategorySection";

const TourPackage = () => {
  const packages = [
    { Place: "Kashmir", Days: "3D/2N", Images: "/assets/Images/Package/Kashmir.png" },
    { Place: "Kerala", Days: "4D/3N", Images: "/assets/Images/Package/Kerala.png" },
    { Place: "Thailand", Days: "28/27N", Images: "/assets/Images/Package/Thailand.png" },
    { Place: "Goa", Days: "2D/1N", Images: "/assets/Images/Package/Goa.png" },
    { Place: "Europe", Days: "28D/27N", Images: "/assets/Images/Package/Europe.png" },
    { Place: "Singapore", Days: "28D/27N", Images: "/assets/Images/Package/Singapore.png" }
  ];

  return (
    <section className="max-w-[1440px] h-auto lg:h-[688px] flex items-center justify-center">
      <div className="w-full max-w-[1299px] h-auto lg:h-[635px] relative ">
        <CategorySection/>
        <div className="lg:absolute top-0 right-0 w-full lg:w-[calc(100%-200px)]">
          <div className="flex flex-col lg:flex-row justify-between mb-4">
            <p className="font-inter font-bold text-[30px] text-TextColor">Top Tour Packages</p>
            <Button name={'View All'}/>
          </div>
          <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {packages.map((pkg, index) => (
              <PackageCard key={index} Place={pkg.Place} Days={pkg.Days} Images={pkg.Images} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourPackage;
