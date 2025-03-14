import React from "react";
import InfiniteScroll from "./ui/InfiniteScroll";
import { motion } from "framer-motion";
// import { div } from "framer-motion/client";
import img1 from "../assets/bohni1.jpg";
import img2 from "../assets/T1.jpg";
import img3 from "../assets/T2.jpg";
import img4 from "../assets/T3.jpg";
const Projects = () => {
  const items = [
    {
      content: (
        <div className="flex flex-col items-center">
          <p className="text-white text-[14px] font-normal italic">
            Working with Parash was an incredible experience. His attention to detail and creativity brought our vision to life beyond expectations!
          </p>
          <div className="flex gap-3 mt-3 items-center">
            <img className="w-8 h-8 rounded-full object-cover" src={img1} alt="Testimonial" />
            <p className="text-white font-semibold text-[14px]">Aarav Sharma</p>
            <p className="text-white font-light text-[12px]">CEO of Creative Minds</p>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="flex flex-col items-center">
          <p className="text-white text-[14px] font-normal italic">
            Parash's expertise in development and problem-solving skills are outstanding. He delivers results efficiently and professionally.
          </p>
          <div className="flex gap-3 mt-3 items-center">
            <img className="w-8 h-8 rounded-full object-cover" src={img3} alt="Testimonial" />
            <p className="text-white font-semibold text-[14px]">Riya Verma</p>
            <p className="text-white font-light text-[12px]">Project Manager at TechWave</p>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="flex flex-col items-center">
          <p className="text-white text-[14px] font-normal italic">
            Highly recommend working with Parash! His innovative approach and dedication made our project a huge success.
          </p>
          <div className="flex gap-3 mt-3 items-center">
            <img className="w-8 h-8 rounded-full object-cover" src={img2} alt="Testimonial" />
            <p className="text-white font-semibold text-[14px]">Kabir Joshi</p>
            <p className="text-white font-light text-[12px]">Founder of Digital Next</p>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="flex flex-col items-center">
          <p className="text-white text-[14px] font-normal italic">
            An absolute pleasure to work with! Parash is a true professional who delivers high-quality work on time.
          </p>
          <div className="flex gap-3 mt-3 items-center">
            <img className="w-8 h-8 rounded-full object-cover" src={img4} alt="Testimonial" />
            <p className="text-white font-semibold text-[14px]">Meera Kapoor</p>
            <p className="text-white font-light text-[12px]">UX Designer at InnovateHub</p>
          </div>
        </div>
      ),
    },
   
  ];
  
  return (
    <div>
      <div
        className="text-white text-center uppercase leading-full tracking-wide mt-4 mb-30"
        style={{ fontFamily: "StonerDemo, sans-serif" }}
      >
        <h1 className="lg:text-5xl text-[2rem]">
          Kind words from <span className="bg-gradient-to-r from-indigo-600 via-sky-500 to-teal-300 bg-clip-text text-transparent">satisfied clients</span> 
        </h1>
      </div>
      <div style={{ height: "500px", position: "relative" }}>
        <InfiniteScroll
          items={items}
          isTilted={true}
          tiltDirection="left"
          autoplay={true}
          autoplaySpeed={0.4}
          autoplayDirection="down"
          pauseOnHover={false}
        />
      </div>
    </div>
  );
};

export default Projects;
