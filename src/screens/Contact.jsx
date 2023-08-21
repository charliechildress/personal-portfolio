import { motion } from 'framer-motion';

import TitleLine from '../components/TitleLine';
import BallCanvas from '../components/BallCanvas';
import { textVariant, slideInLeft, slideInRight } from '../animations';
import { SectionWrapper } from '../wrapper';
import ContactCard from '../components/ContactCard';
import { contact } from '../constants';
import github from '../constants/icons/github.png';
import linkedin from '../constants/icons/linkedin.png';
import email from '../constants/icons/email.png';

const Contact = () => {
  return (
    <section className='flex sm:flex-col relative  min-h-screen h-full'>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={textVariant}
        className='flex-none w-full'
      >
        <motion.div
          variants={textVariant}
          className='pt-[180px] font-neon text-neon-text text-shadow-neon hover:animate-flicker xs:text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-9xl tracking-tight'
        >
          <h1>Contact</h1>
          <TitleLine />
        </motion.div>
        <div className='flex-0 flex sm:flex-col xs:flex-col relative w-full xl:pt-5 2xl:pt-5 sm:pr-10'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={slideInLeft}
            className='flex-0 w-1/2 sm:w-full xs:w-full'
          >
            <div className='flex-row'>
              <h2 className='flex-0 mt-[-55px] 2xl:mt-[-80px] xl:mt-[-70px] md:mt-[-70px] sm:mt-[-80px] xs:mt-[-80px]  3xl:min-h-[60px] 2xl:min-h-[60px] xl:min-h-[60px] lg:min-h-[40px] md:min-h-[40px] sm:min-h-[36px] xs:min-h-[28px] italic font-semibold text-dark-text text-2xl 3xl:text-6xl 2xl:text-6xl xl:text-6xl lg:text-4xl md:text-4xl sm:text-3xl xs:text-lg'>
                Contact Me
              </h2>
              <p className='flex-1 mt-12 lg:mt-5 md:mt-5 sm:mt-5 xs:mt-5 font-medium text-dark-text text-sm 3xl:text-3xl 2xl:text-2xl xl:text-2xl lg:text-lg md:text-lg sm:text-sm xs:text-xs'>
                {contact}
              </p>
              <div className='flex flex-row flex-wrap justify-center gap-10 pt-20'>
                <div className='w-28 h-28'>
                  <BallCanvas icon={email} link={'email'} />
                </div>
                <div className='w-28 h-28'>
                  <BallCanvas
                    icon={github}
                    link={'https://github.com/charliechildress'}
                  />
                </div>
                <div className='w-28 h-28'>
                  <BallCanvas
                    icon={linkedin}
                    link={
                      'https://www.linkedin.com/in/charlie-childress-6114a5227'
                    }
                  />
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={slideInRight}
            className='flex-2 flex justify-center items-center w-1/2 -mt-4 pr-40 sm:pr-10 m-10 sm:w-full xs:w-full pt-10 sm:pt-20 xs:pt-[90px]'
          >
            <ContactCard />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Contact, 'contact');
