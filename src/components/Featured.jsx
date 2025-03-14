"use client";
import React from "react";
import { HeroParallax } from "./ui/HeroParallax";
import image1 from '../assets/rmc.png'
import image2 from '../assets/parashmusic.png'
import image3 from '../assets/rmchome.png'
import image4 from '../assets/lata2.png'
import image5 from '../assets/image1.png'
import image6 from '../assets/craft.png'
export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Artist",
    link: "https://www.rmcassam.com",
    thumbnail:
      image1,
  },
  {
    title: "Craft Marketplace",
    link: "https://ccprototype.vercel.app/",
    thumbnail:
      image6,
  },
  {
    title: "Parash Music",
    link: "https://parashmusic.vercel.app/",
    thumbnail:
      image2,
  },

  {
    title: "Regional Music Centre",
    link: "https://www.rmcassam.com",
    thumbnail:
     image3,
  },
  {
    title: "Lata Sarees",
    link: "https://latasarees.vercel.app/",
    thumbnail:
      image4,
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Postman",
    link: "https://algochurn.com",
    thumbnail:image5,
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  // {
  //   title: "Renderwork Studio",
  //   link: "https://renderwork.studio",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  // },

  // {
  //   title: "Creme Digital",
  //   link: "https://cremedigital.com",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  // },
  // {
  //   title: "Golden Bells Academy",
  //   link: "https://goldenbellsacademy.com",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  // },
  // {
  //   title: "Invoker Labs",
  //   link: "https://invoker.lol",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  // },
  // {
  //   title: "E Free Invoice",
  //   link: "https://efreeinvoice.com",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  // },
];
