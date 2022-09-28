import React from 'react'
import { motion } from "framer-motion";

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
       initial={{opacity: 0 }}
       whileInView={{opacity: 1 }}
       transition={{duration: 1.5 }} 
       className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
       <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

       <motion.img 

       initial={{
        x: -200,
        operator: 0,
       }}

       transition={{
        duration: 1.2,
       }}
       whileInView={{ opacity: 1, x: 0 }}
       viewport={{ once: true }}

       src='/risvin_1.png'
       className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover 
       md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[300px]'
       />

       <div className='space-y-10 px-0 mt-20 md:px-10'>
        <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB07]/50'> little </span> background</h4>
        <p className='text-base'>I'm risvin.Passsionate About The Development Goals Is To Achieve A Good Position By Doing Satisfying Work In The IT Field,Strongly Focused
          To Complete The Task Fast-Faced Envoirnment. Who Seeking A Great Opertunity In The Designing And Development Industry, I Wish To Be Part
          Of An Organization To Achieve A Challenging And Respactable Position In Your Organization Wher I Will Be Able To Contribute According To My Skill.
        </p>
       </div>
        </motion.div>
  );
}