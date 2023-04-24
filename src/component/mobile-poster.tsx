import React from 'react'

export default function MobilePoster() {
  return (
   <>
   <div className='flex justify-between text-dark-100 dark:text-primary-600 items-center font-clash absolute bottom-80 text-[12px] w-full px-4'>
    <h1>2023</h1>
    <h1>GALE</h1>
    <h1>B.E</h1>
   </div>
   <div className="absolute md:hidden  w-full font-clash text-center  !leading-none  text-heading-xl px-1.5 bottom-40 
          dark:text-primary-600">
            <p className='absolute -0 right-4 text-[12px] font-normal top-4'>BDG</p>
          <h1 className="text-[34px] font-bold">UNLEASH </h1>
          <h1 className="text-[34px]  font-bold">INNER FLAIR </h1>
          <p className='absolute -0 right-10 text-[12px] font-normal text-orange-600 dark:text-green-600 bottom-6'>107° 36' 47.3184'' E</p>
          <h1 className="text-[34px]  font-bold">FLEX YOURSELF </h1>
       </div>
       <div className="absolute w-full md:hidden font-clash text-center  !leading-none text-heading-xl
           -bottom-1
          dark:text-primary-600">
          <h1 className="text-[34px] font-bold">AMPLIFIED YOUR </h1>
          <h1 className="text-[34px]  font-normal italic">UNIQUENESS </h1>
          <h1 className="text-[34px]  font-black  "><span className='font-normal'>be</span> BOLD</h1>
      </div>
      <div className="absolute w-full flex justify-between p-4 md:hidden font-clash  !leading-none text-heading-xl
           -bottom-24
          dark:text-primary-600">
          <h1 className="text-[9px] font-normal max-w-[152px] text-left">Personalized web is like a 
          international id card that 
          can be read and identified 
          yourself to everyone</h1>
          <h1 className="text-[9px] font-normal max-w-[152px] text-right">Personalized web is like a 
          international id card that 
          can be read and identified 
          yourself to everyone</h1>
      </div>
      </>
  )
}
