import { SectionWrapper } from '../wrapper';
import { motion } from 'framer-motion';

import { introduction } from '../constants';
import AboutTilt from '../components/AboutTilt';
import TitleLine from '../components/TitleLine';

const About = () => {
  return (
    <motion.div>
      <section className='flex flex-col relative h-full w-full'>
        <div className='flex-none w-full'>
          <h1 className='mt-60 font-neon text-neon-red text-shadow-neon sm:text-5xl md:text-6xl text-9xl'>
            About
          </h1>

          <TitleLine></TitleLine>
        </div>
        <div className='flex-0 flex sm:flex-col relative w-full'>
          <div className='flex-0 w-1/2 sm:w-full'>
            <div className='flex-row'>
              <h2 className='flex-0 mt-[-75px] text-dark-text text-6xl md:text-4xl sm:text-2xl'>
                Hello World!
              </h2>
              <p className='flex-1 mt-10 sm:mt-5 text-dark-text 2xl:text-3xl xl:text-2xl lg:text-xl md:text-sm sm:text-sm'>
                {introduction}
              </p>
            </div>
          </div>
          <div className='flex-2 flex justify-center items-center w-1/2 sm:w-full sm:pt-16'>
            <AboutTilt></AboutTilt>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default SectionWrapper(About, 'about');
