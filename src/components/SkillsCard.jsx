import { skills } from '../constants';
import { Tilt } from 'react-tilt';
const SkillsCard = () => {
  return (
    <div className='flex flex-row flex-wrap mt-10'>
      {skills.map((skill) => {
        return (
          <Tilt
            options={{
              max: 15,
              speed: 20,
              scale: 1.05,
            }}
            className='flex flex-col w-1/6 bg-[#000080] border-2 rounded-lg border-white m-2 h-60 font-semibold text-white'
          >
            <p className='flex-0 m-2'>{skill.name}</p>
            <div className='flex flex-row m-2'>
              <div className='bg-white rounded-full h-2 w-2 m-1'></div>
              <div className='bg-white rounded-full h-2 w-2 m-1'></div>
              <div className='bg-white rounded-full h-2 w-2 m-1'></div>
              <div className='bg-white rounded-full h-2 w-2 m-1'></div>
            </div>
            <p className='flex-2 m-3'>{skill.years}</p>
          </Tilt>
        );
      })}
    </div>
  );
};

export default SkillsCard;
