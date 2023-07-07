import { SectionWrapper } from '../wrapper';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section className='relative w-full h-screen bg-black'>
      <h1 className='absolute bottom-0 left-0 right-0 top-0 grid place-items-center font-neon text-neon-red text-shadow-[4.5px_6px_16px_#FF3131] sm:text-5xl md:text-6xl text-8xl'>
        Charlie Childress
      </h1>
      <a href='#about' className='group'>
        <button className='flex justify-center group-hover:border-4 absolute bottom-10 left-1/2 h-[70px] w-[40px] border-2  border-neon rounded-3xl scroll-smooth'>
          <motion.div
            animate={{ y: '130%' }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className='flex justify-center absolute top-1'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='#FFFFFF'
              className='w-6 h-6 group-hover:stroke-[3px]'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 8.25l-7.5 7.5-7.5-7.5'
              />
            </svg>
          </motion.div>
        </button>
      </a>
    </section>
  );
};

export default Home;
