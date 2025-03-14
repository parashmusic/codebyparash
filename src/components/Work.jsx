import React from 'react';
import { AnimatedPinDemo } from './ui/AnimatedPinDemo';
import image1 from '../assets/rmc.png';
import image2 from '../assets/parashmusic.png';
import image3 from '../assets/rmchome.png';
import image4 from '../assets/lata.png';
import image5 from '../assets/image1.png';
import image6 from '../assets/craft.png';


const Work = () => {
  return (
    <div className="relative  w-full min-h-screen bg-night-sky overflow-hidden flex flex-col justify-center items-center">
      {/* Twinkling Stars */}
      <div className="stars"></div>
      {/* header */}
      <div>
        <div className="flex justify-center ">
          <p className='uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-indigo-400 bg-clip-text text-transparent'>From Brainstorm to Breakthrough</p>
        </div>
        <h2 className='text-3xl font-bold md:text-5xl text-zinc-100 text-center mt-6'>Featured Projects</h2>
        <p className='text-center text-white/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto'>Bringing digital dreams to life with innovation and precision</p>
      </div>

      {/* Content */}
      <div className='grid lg:grid-cols-2 mx-auto lg:w-[70vw] md:grid-cols-1 sm:grid-cols-1 relative z-10'>
        <AnimatedPinDemo title="rmcassam.com" link_prop="https://www.rmcassam.com" heading_prop="regional Music Centre" desc_prop="a full stack dynamic website with both client and user side rendering" image={image1} />
        <AnimatedPinDemo title="parashmusic.com" link_prop="https://parashmusic.vercel.app/" heading_prop="Records Portfolio" desc_prop="my artist portfolio webiste build with advanced technologies like Three Js" image={image2} />
        <AnimatedPinDemo title="craftconnect.com" link_prop="https://ccprototype.vercel.app/" heading_prop="Craft Connect" desc_prop="building a marketplace for home business owners" image={image6} />
        <AnimatedPinDemo title="latasarees.com" link_prop="https://latasarees.vercel.app/" heading_prop="Lata Sarees" desc_prop="textile oriented e-commerce web app designed for fabric cataloging" image={image4} />
      </div>
    </div>
  );
};

export default Work;