import { motion } from 'framer-motion';

const SectionWrapper = (Component, ComponentID) =>
  function Wrap() {
    return (
      <motion.section>
        <span className='hash-span' id={ComponentID}></span>
        <Component></Component>
      </motion.section>
    );
  };

export default SectionWrapper;
