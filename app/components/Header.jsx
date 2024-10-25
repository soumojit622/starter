import Link from "next/link";
import Image from "next/image"; // Importing Image component
import React from "react";

export default function Header() {
  const menuList = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about-us",
    },
    {
      name: "Contact",
      link: "/contact-us",
    },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white bg-opacity-65 backdrop-blur-2xl py-3 px-4 md:py-4 md:px-16 border-b flex items-center justify-between">
      <Link href={"/"}>
        {/* Using Image component instead of img */}
        <Image
          className="h-4 md:h-5"
          src="/logo.png"
          alt="Logo"
          width={100} // Set appropriate width and height for the logo
          height={20} // Adjust as per your design
          priority // Ensures it's loaded as a priority resource
        />
      </Link>
      <div className="hidden md:flex gap-2 items-center font-semibold">
        {menuList?.map((item, index) => {
          return (
            <Link key={index} href={item?.link}>
              <button className="text-sm px-4 py-2 rounded-lg hover:bg-gray-50">
                {item?.name}
              </button>
            </Link>
          );
        })}
      </div>
      <Link href={"/login"}>
        <button className="bg-blue-600 px-5 py-2 font-bold rounded-full text-white">
          Login
        </button>
      </Link>
    </nav>
  );
}
