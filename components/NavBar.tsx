"use client";

import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useState, useEffect } from "react";
import styles from "./NavBar.module.css";
import { nunito } from "@/app/fonts";
import logoImg from "@/public/logo.jpg";

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

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    { name: "About Us", to: "#about" },
    { name: "Services", to: "#services" },
    { name: "Contact Us", to: "#contact" },
  ];

  return (
    <>
      <div
        className={`self-start opacity-100 nav  h-16 relative ${nunito.className}  w-[90vw] mx-auto mt-10 `}
      >
        <nav className="bg-[#0e0e0e] z-40 opacity-80 flex justify-center  mx-auto fixed  h-46 p-4 w-[90vw] rounded-2xl">
          {/* Section for logo */}
          <div className="mr-auto flex  self-start mt-[-10px] z-50">
            <Link
              href="#home"
              className="logo-link text-[#a7f1c6] w-[50%] h-10 p-1  "
            >
              <Image
                src={logoImg}
                alt="logo of zeta"
                width={100}
                height={40}
                className="object-contain" // Maintain aspect ratio
              />
            </Link>
          </div>
          <div className="rotate-360 flex md:hidden text-[#a7f1c6] cursor-pointer opacity-70 hover:opacity-100 transition-opacity z-50">
            {isMenuOpen ? (
              <MdClose
                size="2rem"
                title="Close"
                onClick={() => setIsMenuOpen(false)}
              />
            ) : (
              <GiHamburgerMenu
                size="2rem"
                className="rotate-360"
                onClick={() => setIsMenuOpen(true)}
                title="Open menu"
              />
            )}
          </div>

          <div
            className={`menu opacity-100 bg-[#0e0e0e] h-screen overflow-y-auto md:overflow-hidden fixed top-0 right-0 md:top-auto md:right-auto w-[100%] sm:w-[60%] md:w-auto pt-32 md:pt-0 md:relative md:h-auto md:bg-inherit flex flex-col md:flex-row gap-2 md:gap-10 transition-all p-10 md:p-0 
            md:translate-x-0
            ${
              isMenuOpen ? "translate-x-[0px] opacity-100" : "translate-x-full"
            }`}
          >
            {menuItems.map((item, index) => (
              <Link
                href={item.to}
                key={index}
                onClick={() => handleLinkClick(item.name)}
                className={`${
                  activeLink === item.name
                    ? "text-[#a7f1c6] active-link"
                    : "text-white"
                } p- flex justify-center items-center hover:text-[#a7f1c6] transition-colors mt-10 ml-10 md:mt-0 text-[14px]`}
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
