import { motion, Variants } from 'framer-motion'
import { InfiniteScrollLoop } from 'reactjs-infinite-scroll-loop'

const itemVariants: Variants = {
    open: {
      y: 0,
      transition: { type: "just", ease: 'easeIn' },
    },
    closed: { y: '-100vh', transition: { type: 'just', ease: 'easeOut' } },
    initial: { y: '-100vh' }
  };

const navList = ['Home', 'About', 'Works', 'Collection']

export default function Nav({ isNavOpen }: { isNavOpen: boolean}) {
    
  return (
    <motion.div variants={itemVariants} animate={isNavOpen ? 'open': 'close'} initial='initial' className='h-screen overflow-scroll fixed left-0 z-10 w-screen bg-dark-600'>
        <div className='h-[30%] sticky pointer-events-none w-full  left-0 top-0  bg-gradient-to-b  from-dark-900 to-transparent' />
     
      <div className='mx-auto -m-[30%] max-w-[1280px] flex space-y-4 flex-col'>
      <InfiniteScrollLoop>
      {navList.map((list, key) => {
        return (
          <div key={key} className='text-gray-600 text-[3rem]  md:text-heading-xl hover:text-primary-600 font-montserrat md:hover:text-[100px]' >- {list}</div>
        )
      })}
</InfiniteScrollLoop>
        </div>
    </motion.div>
  )
}
