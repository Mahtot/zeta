"use client";

import Link from "next/link";

const Button = () => {
  return (
    <div className="custom">
      <button
        className={`relative  py-2 font-sans border px-7 sm:w-[43vw] md:w-[20vw] rounded-3xl p-1 text-[#a7f1c6] `}
      >
        <Link href="#contact" className="block">
          Contact Us
        </Link>
      </button>
    </div>
  );
};
export default Button;
