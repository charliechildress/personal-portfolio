import { motion } from 'framer-motion';

import { drawLine } from '../animations/index.js';

const TitleLine = () => {
  return (
    <motion.svg
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className='w-full pt-[5px] pr-40 sm:pr-10 hover:animate-lineFlicker'
    >
      <motion.line
        x1='0'
        y1='10'
        x2='100%'
        y2='10'
        stroke='#DC143C'
        variants={drawLine}
        custom={2}
        className='stroke-[3.5px] hover:animate-lineFlicker'
      />
    </motion.svg>
  );
};
export default TitleLine;
