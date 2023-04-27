import { useEffect, useRef, useState } from 'react';
import Hercules from '../assets/home-cover-clean.png'
import HerculesBack from '../assets/full-back-hompage.png'
import { motion, useScroll, useTransform } from 'framer-motion';
import { Banner } from '../component/Banner';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  const [playMarquee, setPlayMarquee] = useState(false);
useEffect(() => {
  setTimeout(() => {
    setPlayMarquee(true)
  }, 2500);
}, [])

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end', 'center start']
  });
  const y = useTransform(scrollYProgress, [0,1], ["0%", "20%"])
  
  const ImageRef = {
    hover: {
      scale: 1.3
    },
      pressed: {
        scale: 1.2
      }
    }
  
  
  useEffect(() => {
    if(darkMode){
      console.log('aaa');
      
      document.documentElement.classList.add('dark');
    }
    else {
      console.log('bbb');
      document.documentElement.classList.remove('dark');

    }
  }, [darkMode])
  return (
    <div ref={ref} className='w-full h-screen flex max-h-[698px]  -mt-48 md:-mt-9 flex-col-reverse md:flex-row'>
      <div className=' flex md:h-full h-1/3 w-full  justify-center items-center font-clash'>
        <div className='relative max-w-[417px] md:m-4 md:px-0 mx-8'>
          <div className='absolute rounded-full bg-orange-600 dark:bg-green-700 left-2 md:left-3 w-[26px] h-[26px] md:w-[46px] md:h-[46px] top-7  md:top-0 ' />
          <div className='pb-10 pt-6'>
        <span className='md:text-label-xl text-[24px] dark:text-primary-600 font-clashSemibold z-[1] relative'>Tailored </span><span className=' text-[18px] md:text-label-l font-clashSemibold dark:text-primary-600'>frontend Solutions to Drive Digital Success for Cutting-edge brands</span>
        </div>
        <div className='relative hidden md:block'>       
        <p className='text-justify dark:text-primary-600'>
        Experienced Frontend Developer with 5+ Years of Expertise in React and TypeScript,
         Based in Bandung, Indonesia. Passionate about creating
          <span className='border-2 border-solid text-left border-orange-600 rounded-lg px-1 dark:border-green-600 whitespace-nowrap m-1'>engaging user</span> 
          experiences and delivering top-quality code
        </p>
        </div>
        </div>
      
      </div>
            <div  className='w-full h-2/3 min-h-[400px] md:h-full overflow-hidden relative'>
      
              <motion.button onClick={() => setDarkMode(!darkMode)} whileHover={'hover'} whileTap="pressed" className='w-full max-w-[466px] flex md:block items-end justify-center  transform ease-in-out md:rounded-none rounded-br-2xl rounded-bl-2xl  h-full max-h-[698px] bg-orange-600 dark:bg-green-600'>
              <div className=' z-10 w-[2500px] md:hidden  h-full pointer-events-none absolute overflow-x-hidden left-0 top-20'>
<div className={` ${playMarquee ? 'animate-marquee': ''} flex w-full `}>
        {Array.from({length: 4}).map((_, key) => {
          return <Banner title="DESIGN&nbsp;BY&nbsp;GALE&nbsp;*&nbsp;&nbsp;" className='font-clash  text-clip whitespace-nowrap text-heading-2xl' />
        } )}
        </div>
      </div>
      <div className=' z-10 w-[2500px] md:hidden  h-full pointer-events-none absolute overflow-x-hidden left-0 top-44'>
<div className={` ${playMarquee ? 'animate-backwardMarquee': ''} flex w-full `}>
        {Array.from({length: 4}).map((_, key) => {
          return <Banner title="DESIGN&nbsp;BY&nbsp;GALE&nbsp;*&nbsp;&nbsp;" className='font-clash  text-clip whitespace-nowrap text-heading-2xl' />
        } )}
        </div>
      </div>
              <motion.img style={{ y }} variants={ImageRef} alt='cover' className=' h-full hidden md:block' animate={{scale:1.2}} src={Hercules}/>
              <motion.img style={{ y }} variants={ImageRef} alt='cover' className=' absolute max-w-[210px] max-h-[225px] md:hidden z-50' src={HerculesBack}/>
              </motion.button>
            </div>
    </div>
  )
}
