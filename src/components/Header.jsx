import React from 'react';
import { Train,Code, User, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import port from '../assets/port1.svg'
const Navbar = () => {


  return (
    <nav className="absolute top-0 left-0 right-0 z-50 text-white ">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            {/* <Code className="h-6 w-6 text-white" /> */}
              <img className='lg:h-12 h-8 w-8 lg:w-12 ' src={port} alt="" />
            <span className="text-xl font-bold gradient-text ">Parash</span>
          </motion.div>
          
          
          
         
          
         
        </div>
      </div>
      
   
    </nav>
  );
};

export default Navbar;