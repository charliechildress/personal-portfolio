import { SectionWrapper } from '../wrapper';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import profile from '..//constants/profile.jpeg';

const About = () => {
  return (
    <section className='flex sm:flex-col relative w-full h-screen bg-dark-bg'>
      <div className='flex-0 w-1/2 sm:w-full'>
        <h1 className='mt-60 px-40 sm:pl-10 place-items-center font-neon text-neon-red text-shadow-[4.5px_6px_16px_#FF3131] sm:text-5xl md:text-6xl text-9xl'>
          About
        </h1>
        <div className='flex-row'>
          <h2 className='flex-0 mt-20 pl-40 sm:pl-10 text-dark-text text-6xl md:text-4xl sm:text-2xl'>
            Hello World!
          </h2>
          <p className='flex-1 mt-10 sm:mt-5 pl-40 sm:pl-10 text-dark-text 2xl:text-3xl xl:text-2xl lg:text-xl md:text-sm sm:text-sm'>
            As a senior at Dartmouth College, I am currently pursuing a major in
            Computer Science and a minor in Mathematics, actively working
            towards a career in software engineering. With ample experience in
            object-oriented programming as well as front-end development, I
            possess a solid foundation in developing efficient, well-designed,
            and user-friendly solutions across an array of mediums. My passion
            lies in solving real-world problems, and I thrive in collaborative
            environments where I can bring ideas to life. With a knack for quick
            learning and adaptability, I stay ahead of the curve in this
            ever-evolving field. With a solid foundation in computer science and
            mathematics, combined with my practical experience and passion for
            software development, I am prepared to contribute to the field as a
            competent and versatile software engineer.
          </p>
        </div>
      </div>
      <div className='flex-2 flex justify-center items-center w-1/2 sm:w-full sm:pt-16'>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='w-full flex justify-center'
        >
          <div className='rounded-full flex justify-evenly items-center flex-col'>
            <img
              src={profile}
              alt='profile photo'
              className='rounded-full object-contain md:h-60 sm:h-40'
            ></img>
          </div>
        </Tilt>
      </div>
    </section>
  );
};

export default SectionWrapper(About, 'about');
