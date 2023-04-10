import { useMotionValueEvent, useScroll,motion } from "framer-motion";
import { useRef, useState } from "react";

export default function Proto() {
    const ref = useRef(null);
  const { scrollYProgress: scrollY } = useScroll({
    target: ref,
    offset: ['start end',"start start",]
  });
    const [first, setfirst] = useState(0)
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest)
    setfirst(latest * 10 )
  })
  console.log(first);
  
  return (
      <div ref={ref} className='w-full h-full max-h-[800px] bg-lime-400'>
        <div className="bg-black sticky top-0 left-1/2 w-10 h-10 " />
      </div>
  )
}
