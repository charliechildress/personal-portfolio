import { motion } from 'framer-motion';

const SectionWrapper = (Component, ComponentID) =>
  function Wrap() {
    return (
      <motion.section>
        <Component></Component>
      </motion.section>
    );
  };

export default SectionWrapper;
