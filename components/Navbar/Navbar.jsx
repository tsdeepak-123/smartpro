import Link from "next/link";
import Search from "./Search";
import Button from "./Button";

const Navbar = () => {
  const menuItems = [
    { name: "Docs", path: "/", icon: "/assets/svg/Navbar/Docs.svg" },
    { name: "Tours", path: "/", icon: "/assets/svg/Navbar/Tours.svg" },
    { name: "Study", path: "/", icon: "/assets/svg/Navbar/Study.svg" },
    { name: "Jobs", path: "/", icon: "/assets/svg/Navbar/Jobs.svg" },
  ];

  const buttons = [
    {
      icon: "/assets/svg/Navbar/Lock.svg",
      backgroundColor: "#006AAE",
      name: "Login",
    },
    { icon: "/assets/svg/Navbar/Map.svg", backgroundColor: "#1DAEF2" },
    { icon: "/assets/svg/Navbar/Whatsapp.svg", backgroundColor: "#32CA5C" },
    { icon: "/assets/svg/Navbar/Call.svg", backgroundColor: "#F1315F" },
  ];

  return (
    <nav className="p-4 bg-transparent absolute w-full z-10 max-w-[1440px] mx-auto">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/assets/Images/Logo.png"
              alt="Logo"
              className="h-10 cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex items-center mt-4 lg:mt-0">
          <ul className="flex flex-wrap lg:flex-nowrap space-x-6 lg:space-x-8">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link href={item.path}>
                  <div className="flex items-center text-customBlue text-[14px] cursor-pointer font-inter">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="max-h-[18px] max-w-[17.55px] mr-2"
                    />
                    {item.name}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="relative lg:static mt-4 lg:mt-0 lg:ml-4">
            <Search />
          </div>
          <div className="mx-[20px]">
            <img
              src="/assets/svg/Navbar/Menu.svg"
              alt="SVG"
              className="max-w-[25.93px] max-h-[25px]"
            />
          </div>
          <div className="flex gap-[10px]">
            {buttons.map((button, index) => (
              <Button
                key={index}
                icon={button.icon}
                backgroundColor={button.backgroundColor}
                name={button.name}
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
