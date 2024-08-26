import Image from "next/image";
import { motion } from "framer-motion";
import { FC } from "react";

interface CardProps {
  img: string; // Type for the image source
  description: string; // Type for the description
}

const Card: FC<CardProps> = ({ img, description }) => {
  return (
    <div className="flex flex-col md:flex-row gap-5 items-center justify-center">
      <div className="w-[100%]">
        <Image
          src={img}
          width={100}
          //   height={500}
          className="rounded-md mt-10 max-w-[100%]"
          alt="About Zeta Biotech"
        />
      </div>

      <motion.p
        className="mt-4 text-white font-sans w-full md:w-[80%] text-left"
        initial={{ opacity: 0, translateY: 20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {description}
      </motion.p>
    </div>
  );
};

export default Card;
