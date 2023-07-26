import { motion } from 'framer-motion';
import macbook from '../constants/macbook.gif';

const VideoDemo = () => {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <div>
        <div>
          <img src={macbook} alt='video/gif' />
        </div>
      </div>
    </motion.div>
  );
};

export default VideoDemo;
