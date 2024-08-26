// "use client";

import Image from "next/image";
import NavBar from "@/components/NavBar";
import { Nunito, PT_Sans } from "next/font/google";
import Button from "@/components/Button";
import { BackgroundBeamsWithCollisionDemo } from "@/components/BackgroundBeamsWithCollisionDemo";
import Homel from "@/components/Home";
import { motion } from "framer-motion";
import About from "@/components/About";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="relative">
      <Homel />
      {/* <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        > */}
      <section id="about" className=" w-[100%] h-auto text-center">
        <About />
      </section>
      <section id="services" className=" min-h-screen ">
        <Services />
      </section>
      <section id="cta" className="text-white h-screen text-center">
        <h1>Call to action</h1>
      </section>
      <section id="partners" className="text-white h-screen text-center">
        <h1>Our Partners</h1>
      </section>
      <section id="contact" className="text-white h-screen text-center">
        <h1>Contact us</h1>
      </section>
      <section id="footer" className="text-white h-screen  text-center">
        <h1>Footer</h1>
      </section>
      {/* </motion.div>
      </AuroraBackground> */}
    </div>
  );
}
