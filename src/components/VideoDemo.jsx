import { motion } from 'framer-motion';

const VideoDemo = ({ source }) => {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <div className='w-[600px] h-[400px] lg:w-full lg:h-full md:w-full md:h-full sm:w-full sm:h-full xs:w-full xs:h-full'>
        <img src={source} alt='video/gif' />
      </div>
    </motion.div>
  );
};

export default VideoDemo;
