import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
export default function Work() {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(1);
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    swipe: false,
    arrows: false,
    pauseOnHover: true,
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
  const workCarousel = [
    {
      name: "AIRBNB CLONE",
      subtitle: "typescript, prisma, mongoDB",
      src: "https://firebasestorage.googleapis.com/v0/b/gale-web.appspot.com/o/airbnb-mock.mp4?alt=media&token=5edd73ec-0a2d-4158-95fb-d51c5d8414da&_gl=1*165eyjb*_ga*NDAxNDkxMDQuMTY3MjIwMDk1OA..*_ga_CW55HF8NVT*MTY4NjMwMzQ3MS4xMS4xLjE2ODYzMDQyMjcuMC4wLjA.",
    },
    {
      name: "AIRBNB CLONE 1",
      subtitle: "typescript, prisma, mongoDB",
      src: "https://firebasestorage.googleapis.com/v0/b/gale-web.appspot.com/o/airbnb-mock.mp4?alt=media&token=5edd73ec-0a2d-4158-95fb-d51c5d8414da&_gl=1*165eyjb*_ga*NDAxNDkxMDQuMTY3MjIwMDk1OA..*_ga_CW55HF8NVT*MTY4NjMwMzQ3MS4xMS4xLjE2ODYzMDQyMjcuMC4wLjA.",
    },
    {
      name: "airbnb project2",
      subtitle: "typescript, prisma, mongoDB",
      src: "https://firebasestorage.googleapis.com/v0/b/gale-web.appspot.com/o/airbnb-mock.mp4?alt=media&token=5edd73ec-0a2d-4158-95fb-d51c5d8414da&_gl=1*165eyjb*_ga*NDAxNDkxMDQuMTY3MjIwMDk1OA..*_ga_CW55HF8NVT*MTY4NjMwMzQ3MS4xMS4xLjE2ODYzMDQyMjcuMC4wLjA.",
    },
    {
      name: "airbnb project3",
      subtitle: "typescript, prisma, mongoDB",
      src: "https://firebasestorage.googleapis.com/v0/b/gale-web.appspot.com/o/airbnb-mock.mp4?alt=media&token=5edd73ec-0a2d-4158-95fb-d51c5d8414da&_gl=1*165eyjb*_ga*NDAxNDkxMDQuMTY3MjIwMDk1OA..*_ga_CW55HF8NVT*MTY4NjMwMzQ3MS4xMS4xLjE2ODYzMDQyMjcuMC4wLjA.",
    },
  ];

  return (
    <section
      ref={ref}
      onTouchStart={handlePlay}
      className=" flex flex-col lg:space-y-24 h-screen relative md:mt-96 mt-52 p-3"
    >
      <div className="w-full md:w-1/2">
        <h1 className="font-clash  text-clip whitespace-nowrap md:text-heading-xl font-extrabold text-6xl lg:text-heading-2xl">
          MY WORK
        </h1>

        <p className="font-montserrat text-sm md:text-base font-normal">
          Take a look at some of my recent work, which showcases my ability to
          create visually appealing and effective designs that drive business
          growth.
        </p>
      </div>
      <div>
        <div className="absolute right-0 w-full md:w-[90%] p-4">
          <Slider
            className="!overflow-visible group !relative"
            {...settings}
            beforeChange={(_, next) => {
              if (next === workCarousel.length - 1) return setActive(0);
              return setActive(next + 1);
            }}
          >
            {workCarousel.map((data, idx) => {
              return (
                <div
                  className="
              md:p-2
              md:h-[430px]
              lg:h-[500px]
              h-[300px]
              relative "
                >
                  <div className=" w-full h-full flex items-end">
                    {active === idx ? (
                      <div
                        className="font-clash text-black group-hover:text-primary-600 
                       text-xl absolute -right-[34%] z-20 top-6 text-right"
                      >
                        <motion.h2
                          className="font-bold"
                          initial={active === idx && { opacity: 0 }}
                          animate={
                            active === idx && {
                              opacity: 1,
                              transition: { duration: 0.3, delay: 0.5 },
                            }
                          }
                        >
                          {workCarousel[active].name}
                        </motion.h2>
                        <motion.span
                          initial={active === idx && { opacity: 0 }}
                          animate={
                            active === idx && {
                              opacity: 1,
                              transition: { duration: 0.3, delay: 0.7 },
                            }
                          }
                          className="font-clash font-light text-base"
                        >
                          {workCarousel[active].subtitle}
                        </motion.span>
                      </div>
                    ) : null}

                    <motion.video
                      animate={{
                        scale: active === idx ? 2.3 : 0.5,
                        originY: 1,
                      }}
                      initial={{ originY: 0.5 }}
                      transition={{ duration: 0.3 }}
                      ref={videoRef}
                      onTouchStart={handlePlay}
                      autoPlay
                      muted={true}
                      loop
                      playsInline
                      preload="none"
                      className={`h-[210px] peer p-2 hover:backdrop-blur-sm hover:bg-black/30  pt-9 rounded-lg ${
                        active === idx
                          ? "duration-500 z-10 !opacity-100 relative"
                          : "!opacity-30"
                      }   `}
                      src={data.src}
                    />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
}
