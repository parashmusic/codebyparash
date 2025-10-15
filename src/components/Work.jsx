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
const projects = [
  {
    title: "rmcassam.com",
    link: "https://www.rmcassam.com",
    heading: "Regional Music Centre",
    description: "A full stack dynamic website with both client and user side rendering.",
    image: image1,
    icons: [<i className="ci ci-react" key="react"></i>,
      <i class="ci ci-typescript"></i>,
            <i class="ci ci-tailwindcss"></i>,
            <i class="ci ci-django"></i>,
            <i class="ci ci-aws"></i>,
       ],
  },
  {
    title: "parashmusic.com",
    link: "https://github.com/parashmusic/Juno-CLI",
    heading: "JUNO AI Code Assistant",
    description: "A powerful command-line AI assistant that can both edit code files and act as a general-purpose AI chatbot.",
    image: image2,
    icons: [<i className="ci ci-python" key="python"></i>, <i class="ci ci-tensorflow"></i>,<i class="ci ci-git"></i>],
  },
  {
    title: "Tracerxco.com",
    link: "https://tracerxco.vercel.app/",
    heading: "TracerX",
    description: "TracerX - Finance and Project Scheduling and management app for solo freelancers and team.",
    image: image9,
    icons: [<i className="ci ci-react" key="react"></i>,<i class="ci ci-nodejs"></i>,<i class="ci ci-sqlite"></i>,<i class="ci ci-mongodb"></i>,],
  },
  {
    title: "cleoville.com",
    link: "https://www.cleoville.store",
    heading: "Cleoville",
    description: "Gifting oriented e-commerce web app having interactive mockups.",
    image: image7,
    icons: [<i className="ci ci-react" key="react"></i>,
        <i className="ci ci-nodejs" key="nodejs"></i>,
        <i className="ci ci-mongodb" key="mongodb"></i>,
        <i class="ci ci-nextjs"></i>],  },
  {
    title: "latasarees.com",
    link: "https://www.latasarees.com",
    heading: "Lata Sarees",
    description: "Textile oriented e-commerce web app designed for fabric cataloging.",
    image: image4,
    icons: [<i className="ci ci-react" key="react"></i>, <i className="ci ci-nodejs" key="nodejs"></i>, <i className="ci ci-mongodb" key="mongodb"></i>],
  },
  {
    title: "nexzfintech.com",
    link: "https://www.nexzfintech.com/",
    heading: "Nexz",
    description: "Fintech AI powered trading App.",
    image: image8,
    icons: [<i className="ci ci-react" key="react"></i>, <i className="ci ci-python" key="python"></i>],
  },
];

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
        {projects.map((project, index) => (
          <AnimatedPinDemo 
            key={index}
            title={project.title} 
            link_prop={project.link} 
            heading_prop={project.heading} 
            desc_prop={project.description} 
            image={project.image}
            icons={project.icons}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;