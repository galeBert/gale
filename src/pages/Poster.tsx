import { useMotionValueEvent, useScroll,motion } from "framer-motion";
import  { useRef, useState } from "react";
import MobilePoster from "../component/mobile-poster";
import WebPoster from "../component/web-poster";

export default function Poster() {
    const ref = useRef(null);
  const { scrollYProgress: scrollY } = useScroll({
    target: ref,
    offset: ['start end',"end",]
  });
    const [scale, setScale] = useState(0)
    const [prog, setprog] = useState(0)
  
    
  useMotionValueEvent(scrollY, "change", (val) => {
    const progress = val * 10
    setprog(val * 100)
    if(progress <= 6) {
      setScale(progress)
    } else {
      setScale(10 - progress)
    }
  })
  const scale2 = () => {
    if(scale <= 1) {
      return 1
    }
    if(scale <= 1 && prog === 100 ) {
    return 0.5
    }
    if (scale >= 3 && scale <= 9) {
      return 3
    }
    return scale
  }

  const prog2 = () => {
    if(prog <= 12 ) {
      return 12
    }
    if(prog >= 30 ) {
      return 30
          }
    return prog
  }
  
  return (
      <div ref={ref} className='w-full h-full max-h-[1200px] overflow-x-clip  flex justify-center pt-10 relative'>
        <motion.div style={{ scale: scale2(), originY: `50%`, top: `${prog2()}%`}} transition={{duration:3}} className={` sticky flex items-center justify-center lg:w-[490px] w-[300px] h-64 `}>
        <video autoPlay muted loop className="w-full overflow-clip md:max-w-[100%]  max-w-[200px]"
        src='https://firebasestorage.googleapis.com/v0/b/gale-web.appspot.com/o/vid.mp4?alt=media&token=0350e5a9-1b18-4eb8-ba3b-b8be48fa1e48' />
        </motion.div>
        <WebPoster />
        <MobilePoster />

      </div>
  )
}
