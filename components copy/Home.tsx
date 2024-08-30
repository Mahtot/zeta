import Button from "./Button";
import NavBar from "./NavBar";
import { nunito, pt_sans, inter } from "@/app/fonts";
import { motion } from "framer-motion";
// import { FlipWords } from "../ui/flip-words";
import { FlipWords } from "./ui/flip-words";
import About from "./About";
import Grid from "./Grid";

const Home = () => {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <section
      id="home"
      className="text-000 min-h-[150vh] relative flex flex-col "
    >
      <div className="absolute inset-0 bg-[#0A0A0A] opacity-95 z-0 rounded-3xl mt-3 w-[95vw] mx-auto h-[100%]" />

      {/* Gradient Overlay */}
      <div className="text-000  bg-[url('/bgImg3.png')] bg-cover bg-center bg-no-repeat h-[100vh] flex flex-col  ">
        <div className="z-60">
          <NavBar />
        </div>
        <div className="flex flex-col  mx-auto mt-32  sm:px-10 items-center p-5  relative z-10  ">
          <h1 className="text-[30px] md:text-[64px] md:h_64">
            {" "}
            AI in Biotechnology,
            <FlipWords words={words} /> <br />
          </h1>
          <div className="spacer_24"></div>
          <div className="text_maxch-90">
            <div className="p_21 text_neutral-500 text-center">
              Zeta, Biotech, is a everaging AI and ML solutions to develop
              autonomous robots that perform crucial agricultural tasks
            </div>
          </div>

          <Button />
        </div>
      </div>
      <div className="z-0">
        <Grid />
      </div>
    </section>
  );
};
export default Home;
