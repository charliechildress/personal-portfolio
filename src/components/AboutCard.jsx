import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import profile from '..//constants/profile.jpeg';

const AboutCard = () => {
  return (
    <Tilt
      options={{
        max: 55,
        scale: 1.1,
        speed: 450,
      }}
      className='w-full flex justify-center'
    >
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <div className='rounded-full flex justify-evenly items-center flex-col mt-[-60px] sm:pt-5'>
          <img
            src={profile}
            alt='profile'
            className='rounded-full object-contain md:h-60 sm:h-60'
          ></img>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default AboutCard;
