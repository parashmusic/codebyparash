import React, { useState } from "react";
import { FileText, Rocket, Music, Code, Play, Pause } from "lucide-react";
import FallingText from "./ui/FallingText";
import Particles from './ui/Particles';
import { motion, AnimatePresence } from "framer-motion";
import TechBadge from "./TechBadge";
export function BentoGridDemo() {

  const [isPlaying, setIsPlaying] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);  };

  return (
    <div className="max-w-7xl mx-auto p-4 relative">
 

    <div className="relative z-10">
      <motion.div
         
         initial={{ opacity: 0, x: -50 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.5 }}
         viewport={{ once: true }}
         whileHover={{ y: -5 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Developer & Artist Box */}
        <div
          className="md:col-span-2 rounded-xl shadow-lg p-6 flex flex-col justify-between border border-white/10 transition-all duration-500  overflow-hidden group relative"
          style={{
            background: "linear-gradient(135deg, rgba(16, 24, 39, 0.8) 0%, rgba(59, 130, 246, 0.2) 100%)",
            backdropFilter: "blur(12px)",
          }}
          onMouseEnter={() => setActiveCard(1)}
          onMouseLeave={() => setActiveCard(null)}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-blue-500/20 rounded-full">
                <Code className="h-6 w-6 text-blue-400" />
              </div>
              <div className="p-2 bg-purple-500/20 rounded-full">
                <Music className="h-6 w-6 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Developer & Artist</h2>
            </div>

            <p className="text-gray-300 mt-2 max-w-xl">
              Blending the precision of code with the creativity of music. I build digital experiences and compose
              sonic landscapes that resonate with emotion and purpose.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-blue-300">Developer</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-purple-300">Composer</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-pink-300">Producer</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-indigo-300">Songwriter</span>
            </div>
          </div>

          <div className="mt-6 relative">
            <div className="flex items-center space-x-4">
              <button
                onClick={togglePlay}
                className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 group flex items-center justify-center"
              >
                {isPlaying ? (
                  <Pause className="h-5 w-5 text-white" />
                ) : (
                  <Play className="h-5 w-5 text-white ml-0.5" />
                )}
              </button>
              <div className="flex-1">
                <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    style={{
                      width: isPlaying ? "75%" : "0%",
                      transition: "width 30s linear",
                    }}
                  ></div>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-gray-400">
                    {isPlaying ? "Now Playing: Digital Harmony" : "Preview Track"}
                  </span>
                  <span className="text-xs text-gray-400">{isPlaying ? "2:45" : "0:00"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Digital Skills Box */}
        <motion.div
            className="bg-[#151f30] p-6 rounded-xl relative group overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          
          >
            <div className="absolute inset-0 bg-gradient-to-l from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="flex items-center gap-2 mb-4">
              <motion.span
                className="text-teal-400 text-2xl"
                animate={{ rotate: [0, 15, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut", delay: 0.5 }}
              >
                ✦
              </motion.span>
              <h3 className="text-2xl text-white font-bold">My Toolbox</h3>
            </div>
            {/* <p className="text-gray-400 mb-6">
              Explore the technologies and tools I use to turn my ideas into reality.
            </p> */}

            <div className="grid grid-cols-3 sm:grid-cols-3 gap-3">
              {[
                { name: "React", icon: "react", delay: 0 },
                { name: "Next.js", icon: "nextjs", delay: 0.1 },
                { name: "TS", icon: "typescript", delay: 0.2 },
                { name: "Node.js", icon: "nodejs", delay: 0.3 },
                { name: "Mongo", icon: "mongodb", delay: 0.4 },
                { name: "Express", icon: "express", delay: 0.5 },
                { name: "Python", icon: "python", delay: 0.5 },
                { name: "C++", icon: "cpp", delay: 0.5 },
                { name: "Django", icon: "django", delay: 0.5 },
                { name: "HTML5", icon: "html", delay: 0.5 },
                { name: "Tailwind", icon: "css", delay: 0.5 },
                { name: "VHDL", icon: "vhdl", delay: 0.5 },
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: tech.delay }}
                  viewport={{ once: true }}
                  className="z-10"
                >
                  {/* <TechBadge/> */}
                  <TechBadge name={tech.name} icon={tech.icon} />
                </motion.div>
              ))}
            </div>

          </motion.div>

        {/* Connect Box */}
        <div
          className="bg-gradient-to-br from-gray-900/80 to-purple-900/30 backdrop-blur-lg rounded-xl shadow-lg p-6 flex flex-col justify-between border border-white/10 transition-all duration-500  group"
          onMouseEnter={() => setActiveCard(3)}
          onMouseLeave={() => setActiveCard(null)}
        >
          <h2 className="text-xl font-bold text-white">Connect</h2>
          <p className="text-gray-300 mt-2">Let's collaborate on your next digital or musical project.</p>
          <button className="mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-600 transition duration-300 flex items-center justify-center space-x-2 group-hover:shadow-lg group-hover:shadow-purple-500/20">
            <Rocket className="h-5 w-5" />
            <span>Get In Touch</span>
          </button>
        </div>

        {/* Interactive Text Box */}
        <div
          className="md:col-span-2 font-bold text-white min-h-[18rem] rounded-xl shadow-lg p-6 border border-white/10 transition-all duration-500  overflow-hidden relative"
          style={{
            background: "linear-gradient(135deg, rgba(16, 24, 39, 0.8) 0%, rgba(88, 28, 135, 0.2) 100%)",
            backdropFilter: "blur(12px)",
          }}
          onMouseEnter={() => setActiveCard(4)}
          onMouseLeave={() => setActiveCard(null)}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             {/* Particles Background */}
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
      }}
    >
      <Particles
        particleColors={["#ffffff", "#60a5fa"]}
        particleCount={200}
        particleSpread={20}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={true}
        disableRotation={false}
      />
    </div>
          <FallingText
            text={`Photography Blender Cinematography Ableton Design AE Visuals  Valorant Gaming Figma Music Concerts Streams OBS`}
            highlightWords={["Blender", "Ableton", "AE", "Valorant", "Figma", "emotion","Concerts","OBS"]}
            highlightClass="highlighted"
            trigger="hover"
            backgroundColor="transparent"
            wireframes={false}
            gravity={0.56}
            fontSize="1.75rem"
            mouseConstraintStiffness={0.9}
            textColor="#ffffff"
            highlightColor="#60a5fa"
          />
        </div>
      </motion.div>
    </div>
  </div>
  );
}