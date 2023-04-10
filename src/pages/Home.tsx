import { useEffect, useState } from 'react';
import Hercules from '../assets/home-cover-clean.png'
import { motion } from 'framer-motion';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  const ImageRef = {
    hover: {
      scale: 1.1
    },
      pressed: {
        scale: 1
      }
    }
  
  
  useEffect(() => {
    if(darkMode){
      document.documentElement.classList.add('dark');
    }
    else {
      document.documentElement.classList.remove('dark');

    }
  }, [darkMode])

  return (
    <div className='w-full h-full max-h-[698px] flex'>
      <div className='w-full flex justify-center items-center font-clash'>
        <div className='relative max-w-[417px] md:m-4'>
          <div className='absolute rounded-full bg-orange-600 dark:bg-green-700 left-3 w-[46px] h-[46px] ' />
          <div className='pb-10'>
        <span className='text-label-xl dark:text-primary-600 font-clashSemibold z-[1] relative'>Tailored </span><span className='text-label-l font-clashSemibold dark:text-primary-600'>frontend Solutions to Drive Digital Success for Cutting-edge brands</span>
        </div>
        <div className='relative'>       
        <p className='text-justify dark:text-primary-600'>
        Experienced Frontend Developer with 5+ Years of Expertise in React and TypeScript,
         Based in Bandung, Indonesia. Passionate about creating
          <span className='border-2 border-solid text-left border-orange-600 rounded-lg px-1 dark:border-green-600 whitespace-nowrap m-1'>engaging user</span> 
          experiences and delivering top-quality code
        </p>
        </div>
        </div>
      
      </div>
            <div  className='w-full overflow-hidden relative'>
              <motion.button onClick={() => setDarkMode(!darkMode)} whileHover={'hover'} whileTap="pressed" className='w-full max-w-[466px]  transform ease-in-out  h-full max-h-[698px] bg-orange-600 dark:bg-green-600'>
              <motion.img variants={ImageRef} alt='cover' className=' h-full' src={Hercules}/>
              </motion.button>
              
            </div>
    </div>
  )
}
