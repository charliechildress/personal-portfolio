import { tools } from '../constants';
import { Tilt } from 'react-tilt';
import React from 'react';
const ToolsCard = () => {
  return (
    <div className='flex flex-row flex-wrap mt-10'>
      {tools.map((tool) => {
        return (
          <Tilt
            options={{
              max: 15,
              speed: 20,
              scale: 1.05,
            }}
            className='icon flex flex-col group w-1/6 bg-[#000080] border-2 rounded-lg border-white m-2 h-60 font-semibold text-white'
          >
            <p className='m-4 text-center'>{tool.name}</p>
            {typeof tool.icon === 'string' && (
              <i
                className={tool.icon}
                style={{ fontSize: '75px', alignSelf: 'center' }}
              />
            )}{' '}
            {typeof tool.icon !== 'string' && (
              <div className='self-center'>
                <div className='icon-container fill-white group-hover:fill-neon-red'>
                  {tool.icon}
                </div>
              </div>
            )}
            <div className='flex flex-row m-2 pt-10 text-center'>
              <div className='invisible group-hover:visible'>
                <p>{tool.years}</p>
              </div>

              <div className='bg-white rounded-full h-2 w-2 m-1 group-hover:invisible'></div>
              <div className='bg-white rounded-full h-2 w-2 m-1 group-hover:invisible'></div>
              <div className='bg-white rounded-full h-2 w-2 m-1 group-hover:invisible'></div>
              <div className='bg-white rounded-full h-2 w-2 m-1 group-hover:invisible'></div>
              <div className='border-white border-2 rounded-full h-2 w-2 m-1 group-hover:invisible'></div>
            </div>
          </Tilt>
        );
      })}
    </div>
  );
};

export default ToolsCard;
