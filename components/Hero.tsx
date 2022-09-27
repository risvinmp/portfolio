import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';


type Props = {}

export default function Hero({ }: Props) {

    const [text, count] = useTypewriter({
        words: [

            "Hi, My Name Is Risvin",
            "I'm a Web Designer",
            "I'm a Web Developer",
            "<LovesToCodeMore/>"
        ],

        loop: true,
        delaySpeed: 2000,
    });


    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <img
                className='relative rounded-full h-36 w-36 mx-auto object-cover'
                src="/r-1.jpg" alt="" />

            <div>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Developer</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#F7AB0A'></Cursor>
                </h1>
            </div>

        </div>
    )
} 