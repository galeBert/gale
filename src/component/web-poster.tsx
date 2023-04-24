import React from 'react'

export default function WebPoster() {
  return (
   <>
   <div className="absolute hidden md:flex justify-between  w-full font-montserrat  text-heading-xl
          xl:p-0 px-1.5 
          bottom-16 xl:bottom-6
          lg:text-heading-2xl
          dark:text-primary-600">
          <h1 className="text-[50px] lg:text-[58px] xl:text-[96px] font-medium">CREATE </h1>
          <h1 className="text-[50px] lg:text-[58px] xl:text-[96px] font-medium">DESIGN </h1>
       </div>
       <div className="absolute hidden md:block w-full text-center font-montserrat text-heading-xl
          lg:-bottom-36 -bottom-20
          lg:text-heading-2xl dark:text-primary-600">
          <h1 className="text-[50px] lg:text-[58px] xl:text-[98px] font-medium">THAT<span className="xl:text-[100px] font-medium font-clash text-[50px] italic">Represent</span> YOU</h1>
      </div>
      </>
  )
}
