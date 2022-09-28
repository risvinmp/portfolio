import React from 'react'
import { motion } from "framer-motion";

type Props = {}

function ExperienceCard({ }: Props) {
    return (
        <article>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='w-32 h-32 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center'
                src="/r-2.jpg" alt="" />

                <div className='px-0 md:px-10'>
                    <h4 className='text-4xl font-light'>Web Designer</h4>
                    <p className='font-bold text-2xl mt-1'>PIKIT</p>
                    <div className='flex space-x-2 my-2'>
                        {/* tech used */}
                        {/* tech used */}
                        {/* tech used */}
                    </div>
                    <p>sep 2022-present</p>

                    <ul className='list-disc space-y-4 ml-5 text-lg'>
                        <li>React.js</li>
                        <li>Next.js</li>
                        <li>Tailwind Css</li>
                    </ul>
                </div>    


        </article>
    )
}

export default ExperienceCard