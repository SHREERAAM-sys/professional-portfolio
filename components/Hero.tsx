"use client";

import React, { use } from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import { LinkPreview } from './ui/LinkPreview'
import { TypewriterEffect, TypewriterEffectSmooth } from './ui/TypeWriterEffect'
import { motion } from 'framer-motion';

const Hero = () => {
  const words = [
    {
      text: "Full",
      className:"text-purple/90 dark:text-purple",
    },
    {
      text: "Stack",
      className:"text-purple/90 dark:text-purple",
    },
    {
      text: "Cloud",
      className:"text-purple/90 dark:text-purple",
    },
    {
      text: "Software",
      className:"text-purple/90 dark:text-purple",
    },
    {
      text: "Engineer",
      className:"text-purple/90 dark:text-purple",
    },
    {
      text: "based in",
    },
    {
      text: "United States",
      className:"text-purple/90 dark:text-purple"
    },
  ];

  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple"/>
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />

      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[150vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Built with Next.js
          </h2>
          <TextGenerateEffect
          className="text-center text-[40px] md:text-5xl lg:text-6xl"
          words= "Hi, I&apos;m Shreeraam Ramachandran">
          </TextGenerateEffect>

          <div className="text-center md:tracking-wider  text-sm md:text-lg lg:text-xl font-bold">
            <TypewriterEffectSmooth words={words} />
          </div>
          {/* <div className="text-center md:tracking-wider mb-4 text-xs md:text-sm lg:text-xl font-bold">
           Experienced in Software Architecting,Full Stack Engineering, Cloud based development and DevOps
          </div> */}
          

          <a href="#projects">
            <MagicButton 
              title="View my work"
              icon={<FaLocationArrow/>}
              position="right"
            />
          </a>
          

        </div>
      </div>

      <div className="flex mt-16 flex-col justify-between items-center gap-2">

        <div className="flex items-center md:gap-3 gap-6">
        {socialMedia.map((info, index) => {
   
            return (
                <a href={info.link} key={index} target="_blank" className="w-14 h-14 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg">
                    <img src={info.img} alt="icons" width={30} height={30} />
                </a>
            
            );
        })}
        </div>
      </div>
    </div>
  )
}

export default Hero