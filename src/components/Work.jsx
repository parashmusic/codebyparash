import React from 'react';
import { AnimatedPinDemo } from './ui/AnimatedPinDemo';
import image1 from '../assets/rmc.png';
import image2 from '../assets/Scene2.png';
import image3 from '../assets/rmchome.png';
import image4 from '../assets/lata.png';
import image5 from '../assets/image1.png';
import image6 from '../assets/craft.png';
import image7 from '../assets/cleoville.png';
import image8 from '../assets/nexz.png';
import image9 from '../assets/008.png';
const Work = () => {
  return (
    <div className="relative mt-28 w-full min-h-screen bg-night-sky overflow-hidden flex flex-col justify-center items-center">
      {/* Twinkling Stars */}
      <div className="stars"></div>
      {/* header */}
      <div>
        <div className="flex justify-center ">
          <p className='uppercase text-xs lg:text-[1rem] font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-indigo-400 bg-clip-text text-transparent'>From Brainstorm to Breakthrough</p>
        </div>
        <h2 className='text-3xl font-bold md:text-5xl text-zinc-100 text-center mt-6'>Featured Projects</h2>
        <p className='text-center text-white/60 mt-4 text-sm  md:text-lg lg:text-xl max-w-md lg:mx-auto mx-10'>Bringing digital dreams to life with innovation and precision</p>
      </div>

      {/* Content */}
      <div className='grid lg:grid-cols-2 mx-auto lg:w-[70vw] md:grid-cols-1 sm:grid-cols-1 relative z-10'>
        <AnimatedPinDemo title="rmcassam.com" link_prop="https://www.rmcassam.com" heading_prop="regional Music Centre" desc_prop="a full stack dynamic website with both client and user side rendering" image={image1} />
        <AnimatedPinDemo title="parashmusic.com" link_prop="https://github.com/parashmusic/Juno-CLI" heading_prop="JUNO  AI Code Assistant" desc_prop="A powerful command-line AI assistant,that can both edit code files and act as a general-purpose AI chatbot" image={image2} />
        <AnimatedPinDemo title="Tracerxco.com" link_prop="https://tracerxco.vercel.app/" heading_prop="TracerX" desc_prop="TracerX - Finance and Project Scheduding and management app for solo freelancers and team" image={image9} />
        <AnimatedPinDemo title="cleoville.com" link_prop="https://www.cleoville.store" heading_prop="Cleoville" desc_prop="gifting oriented e-commerce web app having interactive mockups" image={image7} />
        <AnimatedPinDemo title="latasarees.com" link_prop="https://www.latasarees.com" heading_prop="Lata Sarees" desc_prop="textile oriented e-commerce web app designed for fabric cataloging" image={image4} />
        <AnimatedPinDemo title="nexzfintech.com" link_prop="https://www.nexzfintech.com/" heading_prop="Nexz" desc_prop="fintech AI powered trading App" image={image8} />

      </div>
    </div>
  );
};

export default Work;