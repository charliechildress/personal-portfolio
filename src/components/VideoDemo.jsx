import { motion } from 'framer-motion';

const VideoDemo = ({ name, source }) => {
  console.log({ name });
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      {{ name }.name === 'GreenBox Delivery App' && (
        <div className='w-[250px] h-[400px]'>
          <img src={source} alt='video/gif' />
        </div>
      )}
      {{ name }.name !== 'GreenBox Delivery App' && (
        <div className='w-[600px] h-[400px] lg:w-full lg:h-full md:w-full md:h-full sm:w-full sm:h-full xs:w-full xs:h-full'>
          <img src={source} alt='video/gif' />
        </div>
      )}
    </motion.div>
  );
};

export default VideoDemo;
