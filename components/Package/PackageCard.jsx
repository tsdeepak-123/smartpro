import CardFooter from "./CardFooter";

const PackageCard = ({ Place, Days, Images }) => {
  return (
    <section className="w-[345px] h-[265px] rounded-[10px] border border-gray-300 relative">
      <div className="relative">
        <img src={Images} alt="" className=" object-cover rounded-t-[10px]" />
        <p className="absolute bottom-0 left-0 font-inter text-[16px] font-semibold text-white p-2">
          {Place}
        </p>
        <div className="absolute rounded-[5px] top-3 right-3 w-[47px] h-[18px] bg-customGreen flex justify-center items-center">
          <p className="font-inter text-white text-[10px]">{Days}</p>
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <CardFooter />
      </div>
    </section>
  );
};

export default PackageCard;
