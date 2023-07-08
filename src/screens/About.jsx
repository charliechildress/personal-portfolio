import { SectionWrapper } from '../wrapper';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import { introduction, typeWords } from '../constants';
import AboutCard from '../components/AboutCard';
import TitleLine from '../components/TitleLine';

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
    }, 100);
    return () => clearInterval(interval);
  }, [letter, word, reverse]);

  let typedText = typeWords[word].substring(0, letter);

  return (
    <motion.div>
      <section className='flex flex-col relative h-full w-full'>
        <div className='flex-none w-full'>
          <h1 className='pt-60 font-neon text-neon-red text-shadow-neon hover:animate-flicker sm:text-5xl md:text-6xl text-9xl tracking-tight'>
            About
          </h1>

          <TitleLine></TitleLine>
        </div>
        <div className='flex-0 flex sm:flex-col relative w-full pt-5 sm:pr-10'>
          <div className='flex-0 w-1/2 sm:w-full'>
            <div className='flex-row'>
              <h2
                id='typewrite'
                className='flex-0 mt-[-75px] italic font-semibold text-dark-text text-6xl md:text-4xl sm:text-2xl'
              >
                {typedText}
              </h2>
              <p className='flex-1 mt-10 font-medium sm:mt-5 text-dark-text 2xl:text-3xl xl:text-2xl lg:text-xl md:text-sm sm:text-sm'>
                {introduction}
              </p>
            </div>
          </div>
          <div className='flex-2 flex justify-center items-center w-1/2 sm:w-full sm:pt-16'>
            <AboutCard></AboutCard>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default SectionWrapper(About, 'about');
