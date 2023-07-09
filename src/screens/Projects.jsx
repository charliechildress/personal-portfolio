import TitleLine from '../components/TitleLine';
import { SectionWrapper } from '../wrapper';

const Projects = () => {
  return (
    <section className='flex sm:flex-col relative h-full'>
      <div className='w-full'>
        <h1 className='mt-60 font-neon text-neon-red text-shadow-neon hover:animate-flicker sm:text-5xl md:text-6xl text-9xl'>
          Projects
        </h1>
        <TitleLine></TitleLine>
      </div>
    </section>
  );
};

export default SectionWrapper(Projects, 'projects');
