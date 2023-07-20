import { motion } from 'framer-motion';
import macbook from '../constants/macbook.svg';
import video from '../constants/istockphoto-1433480308-mp4-480x480-is.mp4';

const VideoDemo = () => {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <div className='flex justify-evenly items-center flex-col mt-[-60px] sm:pt-5'>
        <div className='relative'>
          <img
            src={macbook}
            alt='macbook'
            className='scale-[4.0] w-full h-full sm:h-60'
          />
          <video
            autoPlay
            loop
            muted
            controls
            className='absolute right-[61px] top-[7px] h-[91.6%] w-[83.3%] sm:top-[10.2px] sm:right-[87px] object-cover'
          >
            <source src={video} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoDemo;
