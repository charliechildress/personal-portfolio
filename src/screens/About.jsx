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
		<section className="flex flex-col relative min-h-screen">
			<motion.div variants={textVariant} className="flex-none w-full">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={textVariant}
					className="pt-[180px] font-neon text-neon-text text-shadow-neon hover:animate-flicker xs:text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-9xl tracking-tight"
				>
					<h1>About</h1>
					<TitleLine />
				</motion.div>
			</motion.div>
			<div className="flex-0 flex sm:flex-col xs:flex-col relative w-full xl:pt-5 2xl:pt-5 sm:pr-10">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={slideInLeft}
					className="flex-0 w-1/2 sm:w-full xs:w-full"
				>
					<div className="flex-row">
						<h2 className="flex-0 mt-[-55px] 2xl:mt-[-80px] xl:mt-[-70px] md:mt-[-70px] sm:mt-[-80px] xs:mt-[-80px]  3xl:min-h-[60px] 2xl:min-h-[60px] xl:min-h-[60px] lg:min-h-[40px] md:min-h-[40px] sm:min-h-[36px] xs:min-h-[28px] italic font-semibold text-dark-text text-2xl 3xl:text-6xl 2xl:text-6xl xl:text-6xl lg:text-4xl md:text-4xl sm:text-3xl xs:text-lg">
							{typedText}
						</h2>
						<p className="flex-1 mt-12 lg:mt-5 md:mt-5 sm:mt-5 xs:mt-5 font-medium text-dark-text text-sm 3xl:text-3xl 2xl:text-2xl xl:text-2xl lg:text-lg md:text-lg sm:text-sm xs:text-xs">
							{introduction}
						</p>
					</div>
				</motion.div>
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={slideInRight}
					className="flex-2 flex justify-center items-center w-1/2 sm:w-full xs:w-full pt-10 sm:pt-20 xs:pt-[90px]"
				>
					<AboutCard></AboutCard>
				</motion.div>
			</div>
		</section>
	);
};

export default SectionWrapper(About, 'about');
