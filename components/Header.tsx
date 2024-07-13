import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  return (
    <div className="w-full h-16 flex justify-center items-center">
      <div className="lg:w-2/3 xl:w-1/2 sm:w-4/5 w-11/12 flex justify-between">
        <Link href={"/"} className="text-xl font-bold flex gap-4 items-center">
          <p className="dark:text-gray-500">Sarfraz Ashrafi</p>
          <div>
            <ThemeSwitch />
          </div>
        </Link>

        <div className="flex gap-4 items-center">
          <Link href={"/project"} className="text-sm leading-5">
            Projects
          </Link>
          <Link href={"/project"} className="text-sm leading-5">
            Skills
          </Link>
          <Link href={"/project"} className="text-sm leading-5">
            Article
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
