import Button from "./Button";
import NavBar from "./NavBar";
import { nunito, pt_sans, inter } from "@/app/fonts";
import { motion } from "framer-motion";
// import { FlipWords } from "../ui/flip-words";
import { FlipWords } from "./ui/flip-words";
import About from "./About";

const Home = () => {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <section
      id="home"
      className="text-000 min-h-[150vh] relative flex flex-col "
    >
      <div className="absolute inset-0 bg-[#0A0A0A] opacity-95 z-0 rounded-3xl m-3 h-[100%]" />

      {/* Gradient Overlay */}
      <div className="text-000  bg-[url('/bgImg3.png')] bg-cover bg-center bg-no-repeat h-[100vh] flex flex-col  ">
        <NavBar />
        <div className="flex flex-col  mx-auto mt-32  sm:px-10 items-center p-5 w-[80vw] md:w-[70vw]  relative z-10 gap-6 ">
          <h1
            className={`text-white text-2xl md:text-5xl text-center font-bold ${nunito.className}   `}
          >
            AI in Biotechnology,
            <FlipWords words={words} /> <br />
          </h1>
          <p
            className={` text-[#aaacb1] ${pt_sans.variable} text-center font-sans sm:text-[20px]`}
          >
            Zeta, Biotech, is a leveraging AI and ML solutions to develop
            autonomous robots that perform crucial agricultural tasks, such as
            harvesting crops at a significantly faster pace than humans.
          </p>
          <Button />
        </div>
      </div>
    </section>
  );
};
export default Home;
