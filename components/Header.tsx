import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  return (
    <div className="w-full h-16 flex justify-center items-center">
      <div className="lg:w-2/3 xl:w-1/2 sm:w-4/5 w-11/12 flex justify-between">
        <div className="flex gap-4 items-center">
          <Link href={"/"} className="text-xl font-bold">
            <p className="dark:text-gray-300 ">Sarfraz Ashrafi</p>
          </Link>
          <div>
            <ThemeSwitch />
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <Link href={"https://myblog-pi-nine.vercel.app/"} className="text-sm leading-tight">
            Read Article
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
