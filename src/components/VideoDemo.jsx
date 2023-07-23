import { motion } from 'framer-motion';
import macbook from '../constants/macbook.mp4';

const VideoDemo = () => {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <div className='w-1/2'>
        <div>
          <video autoPlay loop muted>
            <source src={macbook} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoDemo;
