import HomeButton from '../components/HomeButton';

const Home = () => {
  return (
    <section className='relative w-full h-screen bg-black'>
      <div className='absolute bottom-0 left-0 right-0 top-0 grid place-items-center'>
        <h1 className='font-neon text-neon-red text-shadow-neon hover:animate-flicker sm:text-5xl md:text-6xl text-8xl'>
          Charlie Childress
        </h1>
      </div>
      <HomeButton></HomeButton>
    </section>
  );
};

export default Home;
