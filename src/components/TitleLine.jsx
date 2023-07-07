import { motion } from 'framer-motion';

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const TitleLine = () => {
  return (
    <motion.svg
      initial='hidden'
      animate='visible'
      className='w-full pt-[20px] pr-40 sm:pr-10'
    >
      <motion.line
        x1='0'
        y1='10'
        x2='100%'
        y2='10'
        stroke='#DC143C'
        variants={draw}
        custom={2}
        className='stroke-[3.5px] '
      />
    </motion.svg>
  );
};
export default TitleLine;
