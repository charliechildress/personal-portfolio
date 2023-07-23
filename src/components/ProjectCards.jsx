import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { motion } from 'framer-motion';
import { slideInRight, slideInLeft } from '../animations';

import { projects } from '../constants';
import VideoDemo from './VideoDemo';

const ProjectCards = () => {
  return (
    <>
      {projects.map((project, index) => {
        if (index % 2 === 0) {
          return (
            <div className='flex-0 flex sm:flex-col xs:flex-col relative w-full xl:pt-5 2xl:pt-5 '>
              <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                variants={slideInLeft}
                className='flex-0 w-2/3 sm:w-full xs:w-full'
              >
                <Box className='flex-1'>
                  <Card
                    variant='outlined'
                    sx={{
                      backgroundColor: '#6A5ACD',
                      border: '2px solid #6699FF',
                    }}
                  >
                    <React.Fragment>
                      <CardContent>
                        <Typography
                          sx={{ fontSize: 28 }}
                          className='text-card-text'
                          gutterBottom
                        >
                          {project.projectName}
                        </Typography>
                        <Typography
                          sx={{ fontSize: 20 }}
                          className='text-card-text'
                        >
                          {project.organization}
                        </Typography>
                        <Typography
                          sx={{ fontSize: 14 }}
                          className='text-card-text'
                        >
                          {project.information}
                        </Typography>
                        <Typography className='text-card-text'>
                          {project.languages.map((language) => (
                            <Typography
                              sx={{ fontSize: 14 }}
                              className='text-card-text'
                              key={language}
                            >
                              {language}
                            </Typography>
                          ))}{' '}
                          {project.code}
                        </Typography>
                      </CardContent>
                    </React.Fragment>
                  </Card>
                </Box>
              </motion.div>
              <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                variants={slideInRight}
                className='flex-2 flex justify-center items-center w-1/3 sm:w-full xs:pt-[90px]'
              >
                <VideoDemo />
              </motion.div>
            </div>
          );
        } else {
          return (
            <div className='flex-0 flex sm:flex-col xs:flex-col relative w-full xl:pt-5 2xl:pt-5'>
              <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                variants={slideInLeft}
                className='flex-0 flex justify-center items-center w-1/3 sm:w-full xs:pt-[90px]'
              >
                <VideoDemo />
              </motion.div>
              <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                variants={slideInRight}
                className='flex flex-1 w-2/3 sm:w-full xs:w-full'
              >
                <Box className='w-full'>
                  <Card
                    variant='outlined'
                    sx={{
                      backgroundColor: '#6A5ACD',
                      border: '2px solid #6699FF',
                    }}
                  >
                    <React.Fragment>
                      <CardContent>
                        <Typography
                          sx={{ fontSize: 28 }}
                          className='text-card-text'
                          gutterBottom
                        >
                          {project.projectName}
                        </Typography>
                        <Typography
                          sx={{ fontSize: 20 }}
                          className='text-card-text'
                        >
                          {project.organization}
                        </Typography>
                        <Typography
                          sx={{ fontSize: 14 }}
                          className='text-card-text'
                        >
                          {project.information}
                        </Typography>
                        <Typography className='text-card-text'>
                          {project.languages.map((language) => (
                            <Typography
                              sx={{ fontSize: 14 }}
                              className='text-card-text'
                              key={language}
                            >
                              {language}
                            </Typography>
                          ))}{' '}
                          {project.code}
                        </Typography>
                      </CardContent>
                    </React.Fragment>
                  </Card>
                </Box>
              </motion.div>
            </div>
          );
        }
      })}
    </>
  );
};

export default ProjectCards;
