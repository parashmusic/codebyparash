import React from "react";
import {
  ClipboardCopy,
  FileText,
  PenTool,
  Table,
  BarChart,
  Rocket,
} from "lucide-react";
import FallingText from "./ui/FallingText";
import Particles from './ui/Particles';

export function BentoGridDemo() {
  return (
    <div className="max-w-7xl mx-auto p-4 relative">
      {/* Particles Background */}
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0, // Ensure it stays behind other content
        }}
      >
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={20}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <div className="md:col-span-2 bg-white/5 backdrop-blur-lg rounded-xl shadow-lg p-6 flex flex-col justify-between border border-white/10">
            <div>
              <h2 className="text-2xl font-bold text-white">The Dawn of Innovation</h2>
              <p className="text-gray-300 mt-2">
                Explore the birth of groundbreaking ideas and inventions.
              </p>
            </div>
            <div className="mt-4">
              <img
                src="/path/to/image1.jpg"
                alt="Innovation"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>

          
          <div className="bg-white/5 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-white/10">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-blue-500/20 rounded-full">
                <FileText className="h-6 w-6 text-blue-400" />
              </div>
              <h2 className="text-xl font-bold text-white">The Digital Revolution</h2>
            </div>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-300">Artificial Intelligence</li>
              <li className="text-gray-300">Blockchain</li>
              <li className="text-gray-300">Cloud Computing</li>
            </ul>
          </div>

        
          <div className="bg-white/5 backdrop-blur-lg rounded-xl shadow-lg p-6 flex flex-col justify-between border border-white/10">
            <h2 className="text-xl font-bold text-white">Take Action</h2>
            <p className="text-gray-300 mt-2">
              Start your journey today.
            </p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 flex items-center justify-center space-x-2">
              <Rocket className="h-5 w-5" />
              <span>Get Started</span>
            </button>
          </div>

          {/* Box 4 - Medium Card with Chart */}
          <div className="md:col-span-2 text-white min-h-[18rem] bg-white/5 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-white/10">
            <FallingText
              text={`React Bits is a library of animated and interactive React components designed to streamline UI development and simplify your workflow.`}
              highlightWords={["React", "Bits", "animated", "components", "simplify"]}
              highlightClass="highlighted"
              trigger="click"
              backgroundColor="transparent"
              wireframes={false}
              gravity={0.56}
              fontSize="2rem"
              mouseConstraintStiffness={0.9}
              textColor="#ffffff" // White text for dark theme
              highlightColor="#60a5fa" // Bright blue for highlights
            />
          </div>
        </div>
      </div>
    </div>
  );
}