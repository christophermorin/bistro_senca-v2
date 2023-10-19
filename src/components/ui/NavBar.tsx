"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { scrollBehavior } from "@/utils/scrollBehavior";
import { isMobile } from "@/utils/isMobile";

export function NavBar() {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    scrollBehavior(isMobile());
  }, []);

  return (
    <div className="h-[42px] bg-black text-white w-full fixed z-30">
      {/* Mobile */}
      <nav className="flex justify-between items-center w-full h-full relative pr-4 sm:hidden">
        <div>
          <Image
            className="ml-[12px]"
            onClick={handleOpen}
            src={"/images/hamburger-md.svg"}
            alt="Menu"
            width={36}
            height={36}
          />
          <input
            id="menu-button"
            type="checkbox"
            checked={open}
            onChange={handleOpen}
          />
          <div className="menu text-white absolute">
            <ul className="flex flex-col uppercase font-semibold gap-4 mt-4 px-4 pb-4 [&>*]:cursor-pointer">
              <li id="mobileHomeLink">Home</li>
              <li id="mobileAboutLink">About</li>
              <li id="mobileSpecialsLink">Specials</li>
              <li id="mobileReviewsLink">Reviews</li>
              <li id="mobileContactLink">Contact</li>
            </ul>
          </div>
        </div>
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
