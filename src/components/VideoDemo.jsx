import { motion } from 'framer-motion';

import macbook from '../constants/macbook.svg';

const VideoDemo = () => {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <div className='rounded-full flex justify-evenly items-center flex-col mt-[-60px] sm:pt-5'>
        <img
          src={macbook}
          alt='macbook'
          className='rounded-full object-contain lg:h-[350px] md:h-[300px] sm:h-60'
        ></img>
      </div>
    </motion.div>
  );
};

export default VideoDemo;
