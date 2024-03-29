import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { useRef, useState } from "react";
import MobilePoster from "../component/mobile-poster";
import WebPoster from "../component/web-poster";

export default function Poster() {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress: scrollY } = useScroll({
    target: ref,
    offset: ["start center", "end"],
  });
  const [scale, setScale] = useState(0);

  useMotionValueEvent(scrollY, "change", (val) => {
    const progress = val * 10;
    if (progress <= 6) {
      setScale(progress);
    } else {
      setScale(10 - progress);
    }
  });
  const scale2 = () => {
    if (scale <= 1) {
      return 1;
    }
    if (scale <= 1) {
      return 0.5;
    }
    if (scale >= 3) {
      return 3;
    }
    return scale;
  };

  const handlePlay = () => {
    const videoElement = videoRef.current;
    if (videoElement && !videoElement.paused) {
      // video is already playing, do nothing
    } else {
      // video is not playing, play video now
      videoElement?.play();
    }
  };

  return (
    <div
      ref={ref}
      onTouchStart={handlePlay}
      className="w-full h-full max-h-[1000px] md:max-h-[1200px] overflow-x-clip  flex justify-center -mt-36 md:pt-10 relative"
    >
      <motion.div
        animate={{ scale: scale2(), originY: `50%` }}
        transition={{ duration: 0.5 }}
        className="sticky flex items-center top-1/3 justify-center lg:w-[490px] w-[300px] h-64"
      >
        <video
          ref={videoRef}
          onTouchStart={handlePlay}
          autoPlay
          muted={true}
          loop
          playsInline
          preload="none"
          className="w-full overflow-clip md:max-w-[100%]  max-w-[200px]"
          src="https://firebasestorage.googleapis.com/v0/b/gale-web.appspot.com/o/display_vids.mp4?alt=media&token=41796f40-39c6-437a-88ca-f22f87b57af0"
        />
      </motion.div>
      <WebPoster />
      <MobilePoster />
    </div>
  );
}
