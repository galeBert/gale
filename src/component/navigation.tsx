import CircleText from "./circle-text"

export default function Navigation({ setIsNavOpen, isNavOpen }: { setIsNavOpen: (isOpen: boolean) => void, isNavOpen: boolean}) {

  return (
    <nav className='dark:text-primary-600 relative py-10 overflow-hidden h-[177px] top-0'>
      <div className="absolute -top-9 -left-9 animate-rotate md:hidden">
      <CircleText fontSize={12} width={150} className='font-montserrat'>
        DESIGN BY GALE * DESIGN BY GALE *
      </CircleText>
      </div>
      <div  className='absolute z-0 hidden md:block pointer-events-none mb-6 left-0  w-[2500px] overflow-hidden -top-16'>
        <div  className='animate-marquee  w-full'>
        {Array.from({length: 4}).map((_, key) => {
        return <span  key={key} className='font-clash text-clip whitespace-nowrap text-heading-2xl'>DESIGN BY GALE * &nbsp;</span>
        } )}
        </div>
        
      </div>
      <div className=' z-0 w-[2500px] hidden md:block h-full pointer-events-none absolute overflow-x-hidden left-0 top-14'>
<div className=' animate-backwardMarquee w-full '>
        {Array.from({length: 4}).map((_, key) => {
        return <span key={key} className='font-clash  text-clip whitespace-nowrap text-heading-2xl'>DESIGN BY GALE * &nbsp;</span>
        } )}

        </div>
      </div>
        <div className="w-full h-40 ">
          <div className={`fixed top-0 z-20 ${isNavOpen ? '' : ''} w-full left-0 mx-auto py-8 md:py-11 flex justify-center px-4`}>
        <div className='px-1 md:px-4 font-montserrat py-1 flex justify-between items-center   w-full max-w-[1280px]'>
          <div className={`text-label-md z-20 p-[10px] md:block hidden ${isNavOpen ? 'text-primary-600': ''}`}>Gale</div>
          <button onClick={() => setIsNavOpen(!isNavOpen)} className={`text-label-md z-20 block md:hidden ${isNavOpen ? 'text-primary-600': ''}`}>Gale</button>
          <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className={`text-paragraph-md z-20 md:block hidden  underline ${isNavOpen ? 'text-primary-600': ''}`}
          >
            Menu
          </button>
        </div>
        </div>
        </div>
        
    </nav>
  )
}
