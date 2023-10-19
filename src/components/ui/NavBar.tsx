"use client";
import { useEffect } from "react";
import Image from "next/image";
import { scrollBehavior } from "@/utils/scrollBehavior";

export function NavBar() {
  useEffect(() => {
    scrollBehavior();
  }, []);

  return (
    <div className="h-[42px] bg-black text-white w-full fixed z-30">
      {/* Mobile */}
      <nav className="flex justify-between items-center pl-[12px] w-full h-full sm:hidden">
        <Image
          src={"/images/hamburger-md.svg"}
          alt="Menu"
          width={36}
          height={36}
        />
      </nav>
      {/* Desktop */}
      <nav className="sm:justify-between sm:items-center sm:px-9 sm:w-full hidden sm:flex sm:h-full">
        <p className="font-bold text-2xl">Bistro Senca</p>
        <ul className="flex uppercase font-semibold gap-4 [&>*]:cursor-pointer">
          <li id="homeLink">Home</li>
          <li id="aboutLink">About</li>
          <li id="specialsLink">Specials</li>
          <li id="reviewsLink">Reviews</li>
          <li id="contactLink">Contact</li>
        </ul>
      </nav>
    </div>
  );
}
