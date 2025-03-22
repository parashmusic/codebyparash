import React from "react";
import Hero from "./components/Hero";
import ShapeBlur from "./components/ui/ShapeBlur";
import Projects from "./components/Projects";
import { HeroParallaxDemo } from "./components/Featured";
import Tape from "./components/tape";
import ScrollVelocity from "./components/ui/ScrollVelocity";
import Navbar from "./components/Header";
import { FloatingNav } from "./components/ui/FloatingNav";
import { Home, MessageCircle, User } from "lucide-react";
import { AnimatedPinDemo } from "./components/ui/AnimatedPinDemo";
import Work from "./components/Work";
import { BentoGridDemo} from "./components/Bento";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#testimonal",
      icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "#project",
      icon: (
        <MessageCircle className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
    <div className="bg-black">
      <section id="home"></section>
      <Navbar/>
      <FloatingNav navItems={navItems}/>
      <Hero />

      {/* <ShapeBlur className='absolute'/> */}

      <HeroParallaxDemo />

      <section id="project">
      <Work/>
      </section>

      <div className="mt-16 overflow-hidden pt-8 pb-8">
      {/* <ScrollVelocity
        texts={["Innovate", "Evolve"]}
        velocity={20}
        className="custom-scroll-text  uppercase text-white"
      /> */}
      <Tape/>
     </div>
      <section id="testimonal">
      <Projects />
      </section>
      <About/>
      <Footer/>
      
    </div>
  );
};

export default App;
