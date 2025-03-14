import React, { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";

const words = [
  "Innovative",
  "Cutting-Edge",
  "Future-Ready",
  "Optimized",
  "Efficient",
  "Intuitive",
  "Seamless",
  "Robust",
  "Sustainable",
];

export default function Tape() {
  const baseX = useMotionValue(0); // Controls the horizontal scroll position
  const scrollVelocity = 50; // Adjust the scroll speed here

  // Animation frame to update the scroll position
  useAnimationFrame((t, delta) => {
    let moveBy = scrollVelocity * (delta / 1000); // Calculate movement based on time
    baseX.set(baseX.get() + moveBy); // Update the x position
  });

  // Wrap the x position to create an infinite scroll effect
  const x = useTransform(baseX, (v) => {
    const totalWidth = words.length * 200; // Approximate total width of all words
    return `${-v % totalWidth}px`; // Wrap the x position
  });

  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-0.5">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          {/* Use motion.div for the scrolling container */}
          <motion.div
            className="flex flex-none gap-4"
            style={{ x }} // Apply the x transform
          >
            {/* Render two sets of words for seamless looping */}
            {[...new Array(2)].fill(0).map((_, idx) => (
              <div key={idx} className="flex gap-4">
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-4 items-center py-3">
                    <span className="text-gray-900 uppercase font-extrabold text-sm">
                      {word}
                    </span>
                    <div className="star-icon size-6 text-gray-900 -rotate-12">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}