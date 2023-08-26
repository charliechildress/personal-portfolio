import * as React from 'react';

import { motion } from 'framer-motion';
import { slideInLeft, slideInRight } from '../animations';

import { projects } from '../constants';
import VideoDemo from './VideoDemo';

import GitHubIcon from '@mui/icons-material/GitHub';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';

const ProjectCards = () => {
  return (
    <>
      {projects.map((project, index) => {
        if (index % 2 === 0) {
          return (
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              variants={slideInLeft}
              className='flex pb-20'
            >
              <div className='flex flex-row lg:flex-col md:flex-col sm:flex-col xs:flex-col relative pl-10  bg-card-bg w-full min-h-[250px] shadow-[20px_0px_100px_rgba(49,49,255,0.7)] border-4 rounded-lg border-card-border'>
                <div className='flex-0 w-1/2 lg:w-full md:w-full sm:w-full xs:w-full pt-7'>
                  <p className='text-4xl font-bold text-card-text'>
                    {project.projectName}
                  </p>
                  <p className='pt-5 text-xl font-bold text-card-text'>
                    {project.organization}
                  </p>
                  <p className='pt-4 text-md font-semibold text-card-text'>
                    {project.information}
                  </p>
                  <p className='flex flex-row  3xl:space-x-10 2xl:space-x-7 space-x-5 md:space-x-3 sm:space-x-2 mb-2 flex-auto pt-8 sm:pt-4 text-card-text'>
                    {project.languages.map((language) => (
                      <p
                        className='text-card-button-text font-semibold bg-card-button rounded-md px-1 shadow-[2px_4px_2px_rgba(0,0,0,0.7)] transition  hover:-translate-y-1'
                        key={language}
                      >
                        {language}{' '}
                      </p>
                    ))}
                  </p>
                  <div className='flex flex-row mb-4 '>
                    {project.code === 'Contact to view code' && (
                      <a
                        href='mailto:charlie.t.childress.24@dartmouth.edu'
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='icon'
                        className='mt-8 p-2 flex flex-row w-1/3 min-w-fit shadow-[2px_4px_2px_rgba(0,0,0,0.7)] text-card-button-text font-semibold bg-card-button rounded-md hover:bg-card-button-hover hover:text-card-button-text-hover'
                      >
                        <GitHubIcon />
                        <p className='pl-2'>Contact to view code</p>
                      </a>
                    )}
                    {project.code !== 'Contact to view code' && (
                      <a
                        href={project.code}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='icon'
                        className='mt-8 p-2 flex flex-row w-1/3 min-w-fit lg:w-1/2 md:w-1/2 sm:w-1/2 xs:w-1/2 shadow-[2px_4px_2px_rgba(0,0,0,0.7)] text-card-button-text font-semibold bg-card-button rounded-md hover:bg-card-button-hover hover:text-card-button-text-hover'
                      >
                        <GitHubIcon />
                        <p className='pl-2'>Look at code</p>
                      </a>
                    )}
                    {project.hasOwnProperty('link') && (
                      <a
                        href={project.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='icon'
                        className='mt-8 p-2 ml-8 lg-mr-8 md:mr-8 sm:mr-8 xs:mr-8 flex flex-row w-1/3 min-w-fit lg:w-1/2 md:w-1/2 sm:w-1/2 xs:w-1/2 shadow-[2px_4px_2px_rgba(0,0,0,0.7)] text-card-button-text font-semibold bg-card-button rounded-md hover:bg-card-button-hover hover:text-card-button-text-hover'
                      >
                        <PersonalVideoIcon />
                        <p className=' px-2'>Visit site</p>
                      </a>
                    )}
                  </div>
                </div>
                <div className='flex-1 flex justify-center transition lg:pr-8 md:pr-8 sm:pr-8 xs:pr-8 hover:-translate-y-2'>
                  <div>
                    <VideoDemo source={project.demo} />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        } else {
          return (
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              variants={slideInRight}
              className='flex pb-20'
            >
              <div className='flex flex-row lg:flex-col md:flex-col sm:flex-col xs:flex-col relative pl-10  bg-card-bg w-full min-h-[250px] shadow-[20px_0px_100px_rgba(49,49,255,0.7)] border-4 rounded-lg border-card-border'>
                <div className='flex-0 w-1/2 lg:w-full md:w-full sm:w-full xs:w-full pt-7'>
                  <p className='text-4xl font-bold text-card-text'>
                    {project.projectName}
                  </p>
                  <p className='pt-5 text-xl font-bold text-card-text'>
                    {project.organization}
                  </p>
                  <p className='pt-4 text-md font-semibold text-card-text'>
                    {project.information}
                  </p>
                  <p className='flex flex-row  3xl:space-x-10 2xl:space-x-7 space-x-5 md:space-x-3 sm:space-x-2 mb-2 flex-auto pt-8 sm:pt-4 text-card-text'>
                    {project.languages.map((language) => (
                      <p
                        className='text-card-button-text font-semibold bg-card-button rounded-md px-1 shadow-[2px_4px_2px_rgba(0,0,0,0.7)] transition  hover:-translate-y-1'
                        key={language}
                      >
                        {language}{' '}
                      </p>
                    ))}
                  </p>
                  <div className='flex flex-row mb-4 '>
                    {project.code === 'Contact to view code' && (
                      <a
                        href='mailto:charlie.t.childress.24@dartmouth.edu'
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='icon'
                        className='mt-8 p-2 flex flex-row w-1/3 min-w-fit shadow-[2px_4px_2px_rgba(0,0,0,0.7)] text-card-button-text font-semibold bg-card-button rounded-md hover:bg-card-button-hover hover:text-card-button-text-hover'
                      >
                        <GitHubIcon />
                        <p className='pl-2'>Contact to view code</p>
                      </a>
                    )}
                    {project.code !== 'Contact to view code' && (
                      <a
                        href={project.code}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='icon'
                        className='mt-8 p-2 flex flex-row w-1/3 min-w-fit lg:w-1/2 md:w-1/2 sm:w-1/2 xs:w-1/2 shadow-[2px_4px_2px_rgba(0,0,0,0.7)] text-card-button-text font-semibold bg-card-button rounded-md hover:bg-card-button-hover hover:text-card-button-text-hover'
                      >
                        <GitHubIcon />
                        <p className='pl-2'>Look at code</p>
                      </a>
                    )}
                    {project.hasOwnProperty('link') && (
                      <a
                        href={project.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='icon'
                        className='mt-8 p-2 ml-8 lg-mr-8 md:mr-8 sm:mr-8 xs:mr-8 flex flex-row w-1/3 min-w-fit lg:w-1/2 md:w-1/2 sm:w-1/2 xs:w-1/2 shadow-[2px_4px_2px_rgba(0,0,0,0.7)] text-card-button-text font-semibold bg-card-button rounded-md hover:bg-card-button-hover hover:text-card-button-text-hover'
                      >
                        <PersonalVideoIcon />
                        <p className=' px-2'>Visit site</p>
                      </a>
                    )}
                  </div>
                </div>
                <div className='flex-1 flex justify-center transition lg:pr-8 md:pr-8 sm:pr-8 xs:pr-8 hover:-translate-y-2'>
                  <div>
                    <VideoDemo source={project.demo} />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        }
      })}
    </>
  );
};

export default ProjectCards;
