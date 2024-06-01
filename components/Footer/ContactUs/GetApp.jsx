import Buttons from "./Buttons";

const GetApp = () => {
  return (
    <section className="flex flex-col justify-between gap-2">
      <p className="font-inter font-semibold text-[16px] text-TextColor">
        Get Our App
      </p>
      <Buttons />
      <p className="font-inter font-semibold text-[16px] text-TextColor">
        Stay Updated
      </p>
      <div className="w-[364px]">
        <p className="font-inter text-[14px] text-TextColor opacity-[80%]">
          We will send you updates on the latest happenings at SmotPro.
          Subscribe and stay connected with us.
        </p>
      </div>
      <div className="relative">
        <input
          type="email"
          placeholder="Enter your email id"
          className="p-2 mt-2  rounded-[10px] w-[339px] h-[50px] border bg-transparent border-gray-300 font-inter"
        />
        <img
          src="/assets/svg/Footer/Arrow.svg"
          className="absolute right-8 -bottom-4 transform -translate-y-1/2 w-10 h-10"
        />
      </div>
    </section>
  );
};

export default GetApp;
