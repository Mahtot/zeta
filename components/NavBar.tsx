"use client";

import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useState, useEffect } from "react";
import styles from "./NavBar.module.css";
import { nunito, pt_sans, inter } from "@/app/fonts";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleClickOutside = (event: MouseEvent) => {
        if (isMenuOpen && !(event.target as HTMLElement).closest(".menu")) {
          setIsMenuOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isMenuOpen]);

  // Check the width of the window
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // When menu is open make the body fixed
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.style.overflow =
        isMenuOpen && isSmallScreen ? "hidden" : "auto";
    }
  }, [isMenuOpen, isSmallScreen]);

  const handleLinkClick = (name: string) => {
    setActiveLink(name);
    setIsMenuOpen(false);
  };

  type MenuItem = {
    name: string;
    to: string;
  };

  const menuItems: MenuItem[] = [
    {
      name: "About Us",
      to: "#about",
    },
    {
      name: "Services",
      to: "#services",
    },
    {
      name: "Contact Us",
      to: "#contact",
    },
  ];

  return (
    <>
      <div
        className={`self-start opacity-100 nav w-full h-16 relative ${nunito.className}`}
      >
        <nav
          id="nav"
          className="bg-[#0D2045] z-40 opacity-80 flex justify-between w-full fixed h-16 p-4"
        >
          {/* Section for logo */}
          <div className="mr-auto flex">
            <Link href="#home" className="text-[#a7f1c6]">
              Logo
            </Link>
          </div>
          <div className="rotate-360 flex md:hidden text-[#a7f1c6] cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
            <GiHamburgerMenu
              size="2rem"
              className="rotate-360"
              onClick={() => setIsMenuOpen(true)}
              title="Open menu"
            />
          </div>

          <div
            className={`menu opacity-100 bg-[#0D2045] h-screen overflow-y-auto md:overflow-hidden fixed top-0 right-0 md:top-auto md:right-auto w-[90%] sm:w-[60%] md:w-auto md:relative md:h-auto md:bg-inherit flex flex-col md:flex-row  gap-2 md:gap-10 transition-all p-10 md:p-0 
            md:translate-x-0
            ${
              isMenuOpen ? "translate-x-[0px] opacity-100" : "translate-x-full"
            }`}
          >
            <div className=" text-[#a7f1c6] md:hidden fixed top-5 right-10 cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
              <MdClose
                size="2rem"
                className=""
                title="Close"
                onClick={() => setIsMenuOpen(false)}
              />
            </div>
            {menuItems.map((item, index) => (
              <Link
                href={item.to}
                key={index}
                onClick={() => handleLinkClick(item.name)}
                className={` ${
                  activeLink === item.name
                    ? "text-[#a7f1c6] active-link"
                    : "text-white"
                } p- flex justify-center items-center hover:text-[#a7f1c6] transition-colors mt-10 ml-10 md:mt-0`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
      {isSmallScreen && isMenuOpen && (
        <div
          className={`${styles.overlay} overlay`}
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default NavBar;
