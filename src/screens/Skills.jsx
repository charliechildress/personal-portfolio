import { motion } from 'framer-motion';

import TitleLine from '../components/TitleLine';
import { textVariant } from '../animations';
import { SectionWrapper } from '../wrapper';

import SkillsCard from '../components/SkillsCard';
import ToolsCard from '../components/ToolsCard';

const Skills = () => {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <section className='flex flex-col relative min-h-screen h-full w-full'>
        <motion.div variants={textVariant} className='flex-none w-full'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={textVariant}
            className='pt-[180px] font-neon text-neon-red text-shadow-neon hover:animate-flicker xs:text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-9xl tracking-tight'
          >
            <h1>Skills</h1>
            <TitleLine />
          </motion.div>
        </motion.div>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='flex-0 flex flex-col h-full w-full'
        >
          <h2 className='flex-none mt-[-75px] italic font-semibold text-dark-text text-6xl md:text-4xl sm:text-2xl'>
            Coding Skills
          </h2>
          <SkillsCard />
          <h2 className='flex-1 italic font-semibold text-dark-text mt-10 text-6xl md:text-4xl sm:text-2xl'>
            Tools
          </h2>
          <ToolsCard />
        </motion.div>
      </section>
    </motion.div>
  );
};

export default SectionWrapper(Skills, 'skills');
