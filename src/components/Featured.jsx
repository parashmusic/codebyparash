"use client";
import { HeroParallax } from "./ui/HeroParallax";
import image1 from '../assets/rmc.png';
import image2 from '../assets/parashmusic.png';
import image3 from '../assets/rmchome.png';
import image4 from '../assets/lata2.png';
import image5 from '../assets/image1.png';
import image6 from '../assets/craft.png';
import image7 from '../assets/Scene2.png';
import image78 from '../assets/tracerx.png';
import image8 from '../assets/nexz1.png';
import image9 from '../assets/cleoville.png';
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
      title: "JUNO CLI",
      link: "https://github.com/parashmusic/Juno-CLI",
      thumbnail: image7,
    },
    {
      title: "TracerX",
      link: "https://tracerxco.vercel.app/",
       thumbnail: image78,
    },
    {
      title: "Nexz",
      link: "https://www.nexzfintech.com/",
      thumbnail: image8,    },
    {
      title: "cleoville",
      link: "https://cleoville.store",
      thumbnail: image9,    },
  ];

  return <HeroParallax products={products} />;
}