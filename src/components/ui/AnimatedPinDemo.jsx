"use client";
import React from "react";
import { PinContainer } from "./Pin";
import { ArrowBigLeft } from "lucide-react";

import icon1 from "../../assets/bohni1.jpg";
import icon2 from "../../assets/bohni1.jpg";
import icon3 from "../../assets/bohni1.jpg";
import icon4 from "../../assets/bohni1.jpg";
import icon5 from "../../assets/bohni1.jpg";

// Replace one of the icons with the MongoDB icon
const iconLists = [
  <i className="ci ci-react" key="react"></i>,
  <i className="ci ci-nextjs" key="nextjs"></i>,
  <i className="ci ci-postman" key="postman"></i>,
  <i className="ci ci-nodejs" key="nodejs"></i>,
  <i className="ci ci-mongodb" key="mongodb"></i>,
];

export function AnimatedPinDemo({ title, link_prop, heading_prop, desc_prop, image }) {
  return (
    <div className="lg:h-[40rem] h-[30rem] w-full flex items-center justify-center  ">
      <PinContainer title={title} href={link_prop}>
        <div className="flex flex-col items-start justify-center tracking-tight text-slate-100/50 w-[20rem] h-[25rem] md:w-[30rem] md:h-[28rem] lg:w-[35rem] lg:h-[30rem] ">
          
          <div className="rounded-lg mb-4 w-full h-[25rem] md:h-[20rem] lg:h-[24rem] overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src={image}
              alt="UI Preview"
            />
          </div>

       
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            {heading_prop}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500">{desc_prop}</span>
          </div>

        
          <div className="flex items-center justify-between mt-4 mb-3">
            <div className="flex items-center">
              {iconLists.map((icon, index) => (
                <div
                  key={index}
                  className="border border-white/[.2] rounded-full  bg-gradient-to-r from-gray-900 via-gray-950 to-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{
                    transform: `translateX(-${5 * index + 2}px)`,
                  }}
                >
                  {typeof icon === "string" ? (
                    <img src={icon} alt={`icon${index}`} className="p-2" />
                  ) : (
                    icon
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </PinContainer>
    </div>
  );
}