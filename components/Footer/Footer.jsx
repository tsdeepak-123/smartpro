import React from "react";
import Services from "./Services/Services";
import Contact from "./ContactUs/Contact";
import Policy from "./Policy";
import Foot from "./Foot";

const Footer = () => {
  return (
    <footer className="bg-blue-50 max-w-[1440px] border-t border-black">
      <div className="container max mx-auto py-10">
        <div>
          <Services />
        </div>
        <div className="py-10 px-4">
          <Contact />
        </div>
        <div className="">
          <Policy />
        </div>
        <div className="border-t border-gray-300"></div>
        <div className="mt-6">
          <Foot />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
