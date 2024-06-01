import TextFooter from "./TextFooter";

const TextSection = () => {
  return (
    <section>
      <p className="text-[30px] font-bold text-TextColor font-inter">
        What people say about us?
      </p>
      <div className="ml-4 mt-8">
        <img src="/assets/svg/WhatPeople/Double.svg" alt="" />
        <div className="w-[531px] mt-6">
          <p className="text-[18px] opacity-[70%] ml-4 font-inter">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </div>
      <div className="mt-8 ml-8">
        <TextFooter />
      </div>
    </section>
  );
};

export default TextSection;
