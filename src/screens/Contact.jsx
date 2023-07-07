import { SectionWrapper } from '../wrapper';
import TitleLine from '../components/TitleLine';

const Contact = () => {
  return (
    <section className='flex sm:flex-col relative'>
      <div className='w-full'>
        <h1 className='mt-60 font-neon text-neon-red text-shadow-neon sm:text-5xl md:text-6xl text-9xl'>
          Contact
        </h1>
        <TitleLine></TitleLine>
      </div>
    </section>
  );
};

export default SectionWrapper(Contact, 'contact');
