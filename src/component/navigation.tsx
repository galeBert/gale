import React from 'react'

export default function Navigation() {
  
  return (
    <nav className='dark:text-primary-600 py-10 mb-6'>
      <div className='absolute animate-marquee w-screen -top-16'>
        {Array.from({length: 4}).map(() => {
        return <span className='font-clash  whitespace-nowrap text-heading-2xl'>DESIGN BY GALE * &nbsp;</span>
        } )}
      </div>
        <div className=' animate-backwardMarquee h-10 w-screen absolute left-0 top-16'>

        {Array.from({length: 4}).map(() => {
        return <span className='font-clash  whitespace-nowrap text-heading-2xl'>DESIGN BY GALE * &nbsp;</span>
        } )}

        </div>
        <div className='px-1 md:px-4 font-montserrat py-1 flex justify-between items-center  w-full'>
          <div className='text-label-md p-[10px]'>Gale</div>
          <div
          className=' text-paragraph-md  underline '
          >
            Menu
          </div>
        </div>
      {/* <ParallaxText baseVelocity={-5}>DESIGN BY GALE * </ParallaxText> */}

    </nav>
  )
}
