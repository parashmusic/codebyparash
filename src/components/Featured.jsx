"use client";
import { HeroParallax } from "./ui/HeroParallax";
import image1 from '../assets/rmc.png';
import image2 from '../assets/parashmusic.png';
import image3 from '../assets/rmchome.png';
import image4 from '../assets/lata2.png';
import image5 from '../assets/image1.png';
import image6 from '../assets/craft.png';
import image7 from '../assets/007.png';
export function HeroParallaxDemo() {
  const products = [
    {
      title: "Artist",
      link: "https://www.rmcassam.com",
      thumbnail: image1,
    },
    {
      title: "Craft Marketplace",
      link: "https://ccprototype.vercel.app/",
      thumbnail: image6,
    },
    {
      title: "Parash Music",
      link: "https://parashmusic.vercel.app/",
      thumbnail: image2,
    },
    {
      title: "Regional Music Centre",
      link: "https://www.rmcassam.com",
      thumbnail: image3,
    },
    {
      title: "Lata Sarees",
      link: "https://latasarees.vercel.app/",
      thumbnail: image4,
    },
    {
      title: "Pixel Perfect",
      link: "https://app.pixelperfect.quest",
      thumbnail: "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
    },
    {
      title: "Postman",
      link: "https://algochurn.com",
      thumbnail: image5,
    },
    {
      title: "Aceternity UI",
      link: "https://ui.aceternity.com",
      thumbnail: "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail: "https://aceternity.com/images/products/thumbnails/new/cursor.png",
    },
    {
      title: "SmartBridge",
      link: "https://smartbridgetech.com",
      thumbnail: "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
    },
  ];

  return <HeroParallax products={products} />;
}