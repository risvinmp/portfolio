import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";

type Props = {}

function Header({ }: Props) {

  {/* {header} */ }
  return (
    <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto p-5'>
      <motion.div

        initial={{
          x: -500,
          opacity: 0,
          scale: .5,
        }}

        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}

        transition={{
          duration: 1.5,
        }}

      >
        <div className='flex flex-row items-center'>
          
          <SocialIcon url='https://facebook.com/jaketrent'
            fgColor='grey'
            bgColor='transparent'
          />

          <SocialIcon url='https://instagram.com/jaketrent'
            fgColor='grey'
            bgColor='transparent'
          />

          <SocialIcon url='https://linkedin.com/jaketrent'
            fgColor='grey'
            bgColor='transparent'
          />
        </div>

      </motion.div>


      <motion.div

        initial={{
          x: 500,
          opacity: 0,
          scale: .5,
        }}

        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}

        transition={{
          duration: 1.5,
        }}
      >
        <div>
          <SocialIcon url='https://gmail.com/jaketrent'
            fgColor='grey'
            bgColor='transparent'
            network='email'
          />

          <p className='uppercase hidden md:inline-flex'>Get In Touch</p>
        </div>


      </motion.div>
    </header>
  )
}

export default Header