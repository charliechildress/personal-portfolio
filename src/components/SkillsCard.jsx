import { skills } from '../constants';
import { Tilt } from 'react-tilt';
import React from 'react';
import { motion } from 'framer-motion';
import { skillsStagger } from '../animations';

const SkillsCard = () => {
  const getCircle = (skill) => {
    let alt = 5 - skill.rating;
    return (
      <span className='flex'>
        {[...Array(skill.rating)].map(
          (num, i) =>
            i <= skill.rating && (
              <div className='bg-white rounded-full h-2 w-2 m-1'></div>
            )
        )}
        {[...Array(alt)].map(
          (num, i) =>
            i <= alt && (
              <div className='border-white border-2 rounded-full h-2 w-2 m-1'></div>
            )
        )}
      </span>
    );
  };
  return (
    <div className='flex flex-row flex-wrap mt-10'>
      {skills.map((skill, i) => {
        return (
          <motion.div
            key={skill.id}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            variants={skillsStagger(i * 0.2)}
            className='icon flex flex-col group w-1/6 bg-[#000080] border-2 rounded-lg border-white m-2 h-60 font-semibold text-white '
          >
            <Tilt
              options={{
                max: 15,
                speed: 20,
                scale: 1.05,
              }}
            >
              <p className='mt-4 mb-4 text-center'>{skill.name}</p>
              {typeof skill.icon === 'string' && (
                <div className='flex justify-center items-center'>
                  <i className={skill.icon} style={{ fontSize: '75px' }} />
                </div>
              )}
              {typeof skill.icon !== 'string' && (
                <div className='pb-3 flex justify-center items-center'>
                  <div className='icon-container fill-white group-hover:fill-neon-text'>
                    {skill.icon}
                  </div>
                </div>
              )}
              <div className='pt-10 text-center'>
                <div className='flex justify-center'>
                  <div className='invisible group-hover:visible'>
                    <p>{skill.years}</p>
                  </div>
                </div>
                <div className='flex flex-row -mt-5 justify-center group-hover:hidden'>
                  {getCircle(skill)}
                </div>
              </div>
            </Tilt>
          </motion.div>
        );
      })}
    </div>
  );
};

export default SkillsCard;
