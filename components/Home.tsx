import Button from "./Button";
import NavBar from "./NavBar";
import { nunito, pt_sans, inter } from "@/app/fonts";
import { motion } from "framer-motion";
// import { FlipWords } from "../ui/flip-words";
import { FlipWords } from "./ui/flip-words";
const Home = () => {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <section
      id="home"
      className="text-000 min-h-screen bg-[url('/bgImg3.png')] bg-cover bg-center bg-no-repeat relative flex flex-col "
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D2045] to-[#176695] opacity-50" />

      {/* Overlay for readability */}
      <NavBar />
      <div className="flex flex-col  mt-32 px-3 sm:px-10   sm:w-[60vw] md:w-1/2 relative z-10 gap-6 ">
        <h1
          className={`text-white text-[20px] sm:text-2xl md:text-4xl font-bold ${nunito.className}`}
        >
          AI in Biotechnology,
          <FlipWords words={words} /> <br />
        </h1>
        <p className={`mt-4 text-[#bac0d9] ${pt_sans.variable} font-sans`}>
          Biotechnology firms are leveraging AI and ML solutions to develop
          autonomous robots that perform crucial agricultural tasks, such as
          harvesting crops at a significantly faster pace than humans.
          Cutting-edge computer vision and deep learning algorithms are utilized
          to process and analyze data captured by drones.
        </p>
        <Button />
      </div>
    </section>
  );
};
export default Home;
