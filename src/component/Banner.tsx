import { motion } from "framer-motion";

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

export function Banner({
  title,
  className,
  height,
}: {
  title: string;
  className?: string;
  height?: number;
}) {
  return (
    <motion.div
      className={`  ${height ? `h-[${height}px]` : ""}  w-full`}
      variants={banner}
    >
      <motion.div
        className="flex w-full h-full"
        variants={banner}
        initial="initial"
        animate="animate"
      >
        {[...title].map((letter, key) => {
          return (
            <motion.div className=" h-full" variants={letterAni} key={key}>
              <p className={className}>{letter}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
