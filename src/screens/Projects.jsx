import { motion } from 'framer-motion';

import TitleLine from '../components/TitleLine';
import { textVariant } from '../animations';
import { SectionWrapper } from '../wrapper';

import ProjectCards from '../components/ProjectCards';

const Projects = () => {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <section className='flex flex-col relative min-h-screen'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={textVariant}
          className='flex-none w-full'
        >
          <motion.div
            variants={textVariant}
            className='pt-[180px] font-neon text-neon-red text-shadow-neon hover:animate-flicker xs:text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-9xl tracking-tight'
          >
            <h1>Projects</h1>
            <TitleLine />
          </motion.div>
        </motion.div>
        <ProjectCards />
      </section>
    </motion.div>
  );
};

export default SectionWrapper(Projects, 'projects');
