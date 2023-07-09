import { motion } from 'framer-motion';

const SectionWrapper = (Component, ComponentID) =>
  function Wrap() {
    return (
      <motion.section className='bg-dark-bg pl-40 sm:pl-10 w-full'>
        <span className='hash-span' id={ComponentID}></span>
        <Component></Component>
      </motion.section>
    );
  };

export default SectionWrapper;
