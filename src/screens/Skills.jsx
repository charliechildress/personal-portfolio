import { SectionWrapper } from '../wrapper';
import TitleLine from '../components/TitleLine';

const Skills = () => {
  return (
    <section className='flex flex-col relative h-full w-full'>
      <div className='w-full flex-none'>
        <h1 className='mt-60 font-neon text-neon-red text-shadow-neon hover:animate-flicker sm:text-5xl md:text-6xl text-9xl'>
          Skills
        </h1>
        <TitleLine></TitleLine>
      </div>
      <div className='flex-0 flex flex-col h-full w-full'>
        <h2 className='flex-none mt-[-75px] italic font-semibold text-dark-text text-6xl md:text-4xl sm:text-2xl'>
          Coding Skills
        </h2>
        <h2 className='flex-1 italic font-semibold text-dark-text text-6xl md:text-4xl sm:text-2xl'>
          Tools
        </h2>
      </div>
    </section>
  );
};

export default SectionWrapper(Skills, 'skills');
