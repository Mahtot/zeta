"use client";
import Image from "next/image";
import { nunito } from "@/app/fonts";
import { motion } from "framer-motion";
import img1 from "@/public/ai.png";
import img2 from "@/public/bgImg2.png";
import img3 from "@/public/bgImg.png";
import Card from "./Card";

const Services = () => {
  const listDo = [
    {
      img: img1,
      description:
        "Biotechnology firms are leveraging AI and ML solutions to develop autonomous robots that perform crucial agricultural tasks, such as harvesting crops at a significantly faster pace than humans.",
    },
    {
      img: img2,
      description:
        "Biotechnology firms are leveraging AI and ML solutions to develop autonomous robots that perform crucial agricultural tasks, such as harvesting crops at a significantly faster pace than humans.",
    },
    {
      img: img3,
      description:
        "Biotechnology firms are leveraging AI and ML solutions to develop autonomous robots that perform crucial agricultural tasks, such as harvesting crops at a significantly faster pace than humans.",
    },
  ];

  return (
    <div className="mt-[200px] flex flex-col bg-white items-center p-4">
      <h2
        className={`text-[#8EC441] text-[18px] text-xl font-bold ${nunito.className} flex items-center gap-2`}
      >
        USING AI CHANGE THE ...
      </h2>
      <h1
        className={`text-black text-left text-[20px] text-4xl font-bold ${nunito.className}`}
      >
        What We Do
      </h1>
      <div className="w-full my-5 rounded-sm p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-[#1C326F] bg-gradient-to-r from-[#1C326F] to-[#AFCD84] via-[#1E4B77] gap-20">
        {listDo.map((item, index) => (
          <Card img={item.img} key={index} description={item.description} />
        ))}
      </div>
    </div>
  );
};

export default Services;
