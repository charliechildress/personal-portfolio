import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import profile from '../constants/icons/profile.jpeg';

const AboutCard = () => {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <Tilt
        options={{
          max: 55,
          scale: 1.1,
          speed: 450,
        }}
        className='w-full flex justify-center'
      >
        <div className='rounded-full flex justify-evenly items-center flex-col mt-[-60px] sm:pt-5'>
          <img
            src={profile}
            alt='profile'
            className='rounded-full object-contain lg:h-[350px] md:h-[300px] sm:h-60 xs:h-40 '
          ></img>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default AboutCard;
