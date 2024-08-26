"use client";

import { nunito, pt_sans } from "@/app/fonts";
import { FaRegGem } from "react-icons/fa"; // Star icon
import aboutImg from "@/public/about.png";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="flex flex-col md:flex-row mt-[100px] w-[90vw] lg:w-[70vw] justify-center mx-auto gap-10 items-center"
      initial={{ opacity: 0, translateY: 50 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }} // Animation triggers only once
    >
      <div className="flex flex-col justify-start  w-full lg:w-[80%]">
        <h2
          className={`text-[#8EC441] text-[18px] text-xl font-bold ${nunito.className} flex items-center gap-2`}
        >
          <FaRegGem />
          ZETA BIOTECH
        </h2>
        <h1
          className={`text-white text-left text-[20px] text-4xl font-bold ${nunito.className}`}
        >
          Who We Are
        </h1>
        <motion.p
          className={`mt-4 text-white  font-sans  w-full lg:w-[80%] text-left`}
          initial={{ opacity: 0, translateY: 20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Biotechnology firms are leveraging AI and ML solutions to develop
          autonomous robots that perform crucial agricultural tasks, such as
          harvesting crops at a significantly faster pace than humans.
          Cutting-edge computer vision and deep learning algorithms are utilized
          to process and analyze data captured by drones.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Image
          src={aboutImg}
          width={500}
          height={500}
          className="rounded-md mt-10"
          alt="About Zeta Biotech"
        />
      </motion.div>
    </motion.div>
  );
};

export default About;
