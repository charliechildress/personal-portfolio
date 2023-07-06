import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section className='relative w-full h-screen bg-black'>
      <h1 className='absolute bottom-0 left-0 right-0 top-0 grid place-items-center font-neon text-red-600 text-shadow-[4.5px_6px_16px_#FF3131] sm:text-5xl md:text-6xl text-8xl'>
        Charlie Childress
      </h1>
      <button className='flex justify-center hover:border-4 absolute bottom-10 left-1/2 h-[70px] w-[40px] border-2  border-red-600 rounded-3xl'>
        <motion.div
          animate={{ y: '185%' }}
          transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
          className='flex justify-center absolute top-1'
        >
          <div className='rounded-full w-5 h-5  bg-red-600'></div>
        </motion.div>
      </button>
    </section>
  );
};

export default Home;
