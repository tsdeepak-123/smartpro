import Features from "./Features";
import DownloadButton from "@/components/Button/DownloadButton";
import Qrcode from "./Qrcode";

const TextSection = () => {
  return (
    <section className="flex flex-col gap-4 w-full sm:w-[462px] h-auto">
      <div>
        <p className="font-extrabold font-inter text-[24px] sm:text-[36px] text-TextColor">
          Download our App
        </p>
      </div>
      <div>
        <p className="font-medium font-inter text-[16px] sm:text-[18px] opacity-[75%]">
          It's time to discover what you've been missing. Download our app and
          see for yourself.
        </p>
      </div>
      <div>
        <Features />
      </div>
      <div className="flex w-full sm:w-[325px] h-[50px] justify-between">
        <DownloadButton
          name={"Google Play"}
          Icon={"/assets/svg/Download/Gplay.svg"}
        />
        <DownloadButton
          name={"App Store"}
          Icon={"/assets/svg/Download/Apple.svg"}
        />
      </div>
      <div className="flex justify-center sm:justify-start">
        <Qrcode />
      </div>
    </section>
  );
};

export default TextSection;
