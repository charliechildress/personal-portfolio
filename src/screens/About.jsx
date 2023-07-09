import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import { introduction, typeWords } from '../constants';
import AboutCard from '../components/AboutCard';
import TitleLine from '../components/TitleLine';
import { slideInLeft, slideInRight, textVariant } from '../animations';
import { SectionWrapper } from '../wrapper';

const About = () => {
  const [letter, setLetter] = useState(0);
  const [word, setWord] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!reverse) {
        setLetter(letter + 1);
        if (letter === typeWords[word].length) {
          setReverse(true);
        }
      } else {
        setLetter(letter - 1);
        if (letter === 0) {
          setWord((word + 1) % typeWords.length);
          setReverse(false);
        }
      }
    }, 150);
    return () => clearInterval(interval);
  }, [letter, word, reverse]);
  let typedText = typeWords[word].substring(0, letter);

  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <section className='flex flex-col relative'>
        <motion.div variants={textVariant} className='flex-none w-full'>
          <h1 className='pt-60 font-neon text-neon-red text-shadow-neon hover:animate-flicker sm:text-5xl md:text-6xl text-9xl tracking-tight'>
            About
          </h1>
        </motion.div>
        <TitleLine></TitleLine>

        <div className='flex-0 flex sm:flex-col relative w-full xl:pt-5 2xl:pt-5 sm:pr-10'>
          <motion.div variants={slideInLeft} className='flex-0 w-1/2 sm:w-full'>
            <div className='flex-row'>
              <h2 className='flex-0 mt-[-90px] 2xl:min-h-[60px] xl:min-h-[48px] lg:min-h-[40px] md:min-h-[32px] sm:min-h-[36px] italic font-semibold text-dark-text text-2xl 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-2xl sm:text-3xl'>
                {typedText}
              </h2>
              <p className='flex-1 mt-10 lg:mt-5 md:mt-5 sm:mt-5 font-medium text-dark-text text-sm 2xl:text-xl xl:text-xl lg:text-lg md:text-sm sm:text-sm'>
                {introduction}
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={slideInRight}
            className='flex-2 flex justify-center items-center w-1/2 sm:w-full sm:pt-20'
          >
            <AboutCard></AboutCard>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default SectionWrapper(About, 'about');
