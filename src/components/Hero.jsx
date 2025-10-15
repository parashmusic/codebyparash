import React from "react";
import { motion } from "framer-motion";
import RotatingText from "./ui/RotatingText";
import Aurora from "./ui/Aurora"; // Ensure the correct import
import AuroraShader from './ui/AuroraShader';
const text = [
  "Transforming",
  "Visions",
  "into",
  "Flawless",
  "User",
  "Experiences",
];

const Hero = () => {
  return (
    <div className="relative pb-20 pt-36 bg-black overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute -top-[6rem] lg:-top-[10rem] inset-0 z-0">
        {/* <Aurora
          colorStops={["#80C3FF", "", "#CB9BFF"]}
          blend={0.5}
          amplitude={0.7}
          speed={0.6}
        /> */}
        <AuroraShader
          colorStops={['#5227FF', '#7cff67', '#5227FF']}
          amplitude={1.0}
          blend={0.5}
          speed={1.0}
        />
      </div>

      {/* Grid Background with Fade Effect */}
      <div className="absolute inset-0 grid-bg-fade"></div>

      {/* Main Content */}
      <div className="flex justify-center relative my-20 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[89vw] md:max-w-2xl lg:max-w-[45vw] flex flex-col items-center justify-center"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.2em" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80"
          >
            Hi! I&apos;m Parash
          </motion.p>

          {/* Animated Heading */}
          <motion.div
            className="text-white text-center uppercase leading-full tracking-wide my-4"
            style={{ fontFamily: "StonerDemo, sans-serif" }}
          >
            <h1 className="lg:text-5xl text-[2rem]">
              {text.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.2 }}
                  className={`inline-block mr-2 ${
                    word === "User" || word === "Experiences"
                      ? "text-purple-400"
                      : "text-white"
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          {/* Rotating Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            <p className="text-center text-white md:tracking-wider mb-4 md:text-lg lg:text-2xl">
              Specializing in
            </p>

            <RotatingText
              texts={[
                "React Js",
                "Next js",
                "Python",
                "Django",
                "AWS CloudFront",
                "C & C++",
                "PHP",
                "ORACLE PLSQL",
                "Postgre SQL",
              ]}
              mainClassName="px-3 font-bold sm:px-2 md:px-3 bg-gradient-to-r from-purple-900 via-purple-800 to-violet-800 text-white text-2xl overflow-hidden py-1 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
