import React from "react";
import MobileSection from "./MobileSection";
import TextSection from "./TextSection/TextSection";

const Download = () => {
  return (
    <section className="w-full max-w-[1440px] h-[616px] relative">
      <div className="absolute left-0 top-10">
        <img
          src="/assets/svg/Download/LeftRound.svg"
          alt="Left Round"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute right-0 bottom-20">
        <img
          src="/assets/svg/Download/RightRound.svg"
          alt="Right Round"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-[1107px] h-auto flex flex-col lg:flex-row justify-between ml-[141px] relative top-10">
        <div className="flex justify-center lg:block">
          <MobileSection />
        </div>
        <div className="mt-10 lg:mt-24 flex justify-center lg:block">
          <TextSection />
        </div>
      </div>
    </section>
  );
};

export default Download;
