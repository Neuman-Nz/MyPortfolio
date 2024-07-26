import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const Leftbanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Neuman Walala</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className='text-base font-bodyFont leading-6 tracking-wide'>I'm a passionate software developer specializing in creating dynamic,
                     user-centric web applications using JavaScript (React) and Python (Flask).
                      With a knack for transforming complex problems into seamless, efficient solutions,
                       I blend the versatility of Python with the interactive prowess of React to deliver 
                       high-performance applications. Explore my work to see how I bring code to life, 
                       crafting intuitive experiences that bridge the gap between innovative design and robust functionality.
                       </p>
        </div>
         {/* Media */}
     <Media />
    </div>
  );
}

export default Leftbanner