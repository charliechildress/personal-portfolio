import { tools } from '../constants';
import { Tilt } from 'react-tilt';
import React from 'react';
import { motion } from 'framer-motion';
import { skillsStagger } from '../animations';

const ToolsCard = () => {
  const getCircle = (tool) => {
    let alt = 5 - tool.rating;
    return (
      <span className='flex'>
        {[...Array(tool.rating)].map(
          (num, i) =>
            i <= tool.rating && (
              <div className='bg-white rounded-full h-2 w-2 m-1 sm:m-[2px] xs:m-[1px]'></div>
            )
        )}
        {[...Array(alt)].map(
          (num, i) =>
            i <= alt && (
              <div className='border-white border-2 rounded-full h-2 w-2 m-1 sm:m-[2px] xs:m-[1px]'></div>
            )
        )}
      </span>
    );
  };
  return (
    <div className='flex flex-row flex-wrap mt-10 pr-[100px] sm:pr-[80px]'>
      {tools.map((tool, i) => {
        return (
          <motion.div
            key={tool.id}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            variants={skillsStagger(i * 0.2)}
            className='w-1/5 sm:w-1/4'
          >
            <Tilt
              options={{
                max: 15,
                speed: 20,
                scale: 1.05,
              }}
              className='icon flex flex-col group w-100 bg-[#000080] sm:text-xs xs:text-xs border-2 rounded-lg border-white m-2 h-60 font-semibold text-white '
            >
              <p className='mt-4 mb-4 text-center'>{tool.name}</p>
              {typeof tool.icon === 'string' && (
                <div className='flex justify-center items-center'>
                  {tool.name === 'Android Studio' && (
                    <i className={tool.icon} style={{ fontSize: '55px' }} />
                  )}
                  {tool.name !== 'Android Studio' && (
                    <i className={tool.icon} style={{ fontSize: '75px' }} />
                  )}
                </div>
              )}
              {typeof tool.icon !== 'string' && (
                <div className='pb-3 flex justify-center items-center'>
                  <div className='icon-container fill-white group-hover:fill-neon-text'>
                    {tool.icon}
                  </div>
                </div>
              )}
              <div className='pt-10 text-center'>
                <div className='flex justify-center'>
                  <div className='invisible group-hover:visible'>
                    <p>{tool.years}</p>
                  </div>
                </div>
                <div className='flex flex-row -mt-5 justify-center group-hover:hidden'>
                  {getCircle(tool)}
                </div>
              </div>
            </Tilt>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ToolsCard;
