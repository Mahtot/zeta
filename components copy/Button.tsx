"use client";

import Link from "next/link";

const Button = () => {
  return (
    <div>
      {/* <button
        className={`relative  py-2 font-sans border px-7 sm:w-[43vw] md:w-[20vw] rounded-3xl p-1 text-[#a7f1c6] `}
      > */}
      <Link
        href="#contact"
        className="contact block mt-10 bg-[#8EC441] text-[14px] font-sans font-semibold text-[#0e0e0e] px-10 sm:px-20 rounded-3xl py-2 "
      >
        Contact Us
      </Link>
      {/* </button> */}
    </div>
  );
};
export default Button;
