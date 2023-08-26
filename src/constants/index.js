import greenboxWebsite from '../constants/demos/greenbox-demo-website.gif';
import nuggetsDemo from '../constants/demos/nuggets-demo.gif';
import tseDemo from '../constants/demos/tse-demo.gif';
import greenboxApp from '../constants/demos/greenbox-app-demo.gif';
import personalWebsite from '../constants/demos/personal-website-demo.gif';
import cse from '../constants/demos/cse-demo.gif';

const introduction = [
  'As a senior at Dartmouth College, I am currently pursuing a major in Computer Science and a minor in Mathematics, actively working towards a career in software engineering. With ample experience in object-oriented programming as well as front-end development, I possess a solid foundation in developing efficient, well-designed, and user-friendly solutions across an array of mediums. My passion lies in solving real-world problems, and I thrive in collaborative environments where I can bring ideas to life. With a knack for quick learning and adaptability, I stay ahead of the curve in this ever-evolving field. With a solid foundation in computer science and mathematics, combined with my practical experience and passion for software development, I am prepared to contribute to the field as a competent and versatile software engineer.',
];

const typeWords = ['Hello, World!', 'Welcome to my website!'];

const projects = [
  {
    projectName: 'GreenBox Delivery App',
    organization: 'GreenBox Storage',
    information:
      'User friendly app that allows for the management and logging of inventory for thousands of storage dropoffs and pickups across dozens of locations.',
    languages: ['HTML', 'CSS', 'JavaScript', 'React Native'],
    code: 'Contact to view code',
    demo: greenboxApp,
  },
  {
    projectName: 'Charliechildress.me',
    organization: 'Independent',
    information:
      'Personal website to apply my skills in web development and UI/UX design. Hope you enjoy it!',
    languages: ['HTML', 'CSS', 'JavaScript', 'React'],
    code: 'https://github.com/charliechildress/personal-portfolio.git',
    link: ' ',
    demo: personalWebsite,
  },
  {
    projectName: 'GreenBox Dashboard',
    organization: 'GreenBox Storage',
    information:
      'Dashboard that provides real-time insights and centralized control for order management, customer data, and key administrative tasks.',
    languages: ['HTML', 'CSS', 'TypeScript', 'React'],
    code: 'Contact to view code',
    demo: greenboxWebsite,
  },
  {
    projectName: 'Tiny Search Engine',
    organization: 'Dartmouth Computer Science Department, CS50',
    information:
      'Mini version of the Google search engine. Crawls through web pages, indexes word occurrences, and returns the best URLs based on word relevance to the query.',
    languages: ['C'],
    code: 'https://github.com/charliechildress/Mini-Search.git',
    demo: tseDemo,
  },
  {
    projectName: 'Nuggets',
    organization: 'Dartmouth Computer Science Department, CS50',
    information:
      'A multi-player exploration game, Nuggets, in which a game server maintains all game state, and one or more game clients display the game to a user. The object of the game is to collect more gold nuggets than any other player.',
    languages: ['C'],
    code: 'Contact to view code',
    demo: nuggetsDemo,
  },
  {
    projectName: 'Collaborative Sketch Editor',
    organization: 'Dartmouth Computer Science Department, CS10',
    information:
      'Collaborative graphical editor that allows multiple simultaneous editors on the same document. The server can handle multiple objects at a time, and clients can draw rectangles, line segments, elipses and freehand shapes.',
    languages: ['Java'],
    code: 'https://github.com/charliechildress/CS10/tree/main/PSET6',
    demo: cse,
  },
];

const skills = [
  {
    name: 'Java',
    rating: 5,
    years: '2 years',
    icon: 'fab fa-java javaIcon',
  },
  {
    name: 'HTML',
    rating: 5,
    years: '<1 year',
    icon: 'fab fa-html5 htmlIcon',
  },
  {
    name: 'CSS',
    rating: 5,
    years: '<1 year',
    icon: 'fab fa-css3-alt',
  },
  {
    name: 'JavaScript',
    rating: 4,
    years: '<1 year',
    icon: 'fab fa-js-square jsIcon',
  },
  {
    name: 'React',
    rating: 4,
    years: '<1 year',
    icon: 'fab fa-react reactIcon',
  },
  {
    name: 'React Native',
    rating: 4,
    years: '<1 year',
    icon: 'fab fa-react rnIcon',
  },
  {
    name: 'Python',
    rating: 4,
    years: '3 years',
    icon: 'fab fa-python pythonIcon',
  },
  {
    name: 'C',
    rating: 4,
    years: '1 year',
    icon: 'fas fa-copyright cIcon',
  },

  {
    name: 'JSON',
    rating: 4,
    years: '2 years',
    icon: 'fas fa-file-code',
  },

  {
    name: 'TypeScript',
    rating: 3,
    years: '<1 year',
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'>
        <path d='M0 32v32h64.002V-.002H0zm51.577-2.55c1.625.406 2.865 1.128 4.003 2.306.59.63 1.463 1.778 1.534 2.052.02.08-2.763 1.95-4.45 2.997-.06.04-.305-.223-.58-.63-.823-1.2-1.686-1.717-3.007-1.808-1.94-.132-3.2.884-3.18 2.58 0 .498.07.792.274 1.2.427.884 1.22 1.412 3.708 2.49 4.582 1.97 6.542 3.27 7.76 5.12 1.36 2.062 1.666 5.354.742 7.802-1.016 2.662-3.535 4.47-7.08 5.07-1.097.193-3.698.163-4.876-.05-2.57-.457-5.008-1.727-6.512-3.393-.59-.65-1.737-2.347-1.666-2.47.03-.04.295-.203.59-.376l2.377-1.37 1.84-1.067.386.57c.538.823 1.717 1.95 2.428 2.326 2.042 1.077 4.846.924 6.227-.315.59-.538.833-1.097.833-1.92 0-.742-.09-1.067-.477-1.625-.498-.71-1.514-1.31-4.4-2.56-3.302-1.422-4.724-2.306-6.024-3.708-.752-.813-1.463-2.113-1.758-3.2-.244-.904-.305-3.17-.112-4.084.68-3.2 3.088-5.415 6.563-6.075 1.128-.213 3.75-.132 4.856.142zM36.552 32.12l.02 2.62h-8.33v23.67H22.35v-23.67h-8.33v-2.57l.07-2.64c.03-.04 5.1-.06 11.246-.05l11.185.03z' />
      </svg>
    ),
  },
  {
    name: 'Bash',
    rating: 3,
    years: '1 year',
    icon: 'fas fa-terminal',
  },
];

const tools = [
  {
    name: 'Git/Git Flow',
    rating: 5,
    years: '2 years',
    icon: 'fab fa-github',
  },
  {
    name: 'Microsoft Office',
    rating: 5,
    years: '7 years',
    icon: 'fab fa-microsoft',
  },
  {
    name: 'VSCode',
    rating: 5,
    years: '2 years',
    icon: (
      <svg
        width='64'
        height='64'
        viewBox='-11.9 -2 1003.9 995.6'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='m12.1 353.9s-24-17.3 4.8-40.4l67.1-60s19.2-20.2 39.5-2.6l619.2 468.8v224.8s-.3 35.3-45.6 31.4z' />
        <path d='m171.7 498.8-159.6 145.1s-16.4 12.2 0 34l74.1 67.4s17.6 18.9 43.6-2.6l169.2-128.3z' />
        <path d='m451.9 500 292.7-223.5-1.9-223.6s-12.5-48.8-54.2-23.4l-389.5 354.5z' />
        <path d='m697.1 976.2c17 17.4 37.6 11.7 37.6 11.7l228.1-112.4c29.2-19.9 25.1-44.6 25.1-44.6v-671.2c0-29.5-30.2-39.7-30.2-39.7l-197.7-95.3c-43.2-26.7-71.5 4.8-71.5 4.8s36.4-26.2 54.2 23.4v887.5c0 6.1-1.3 12.1-3.9 17.5-5.2 10.5-16.5 20.3-43.6 16.2z' />
      </svg>
    ),
  },
  {
    name: 'IntelliJ Idea',
    rating: 5,
    years: '3 years',
    icon: (
      <svg
        width='64px'
        height='64px'
        viewBox='0 0 256 256'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g>
          <polygon points='64.8 199.6 2.8 150.8 33.6 93.6 122 128'></polygon>
          <polygon points='256 68.4 251.2 216.4 152.8 256 93.6 217.6 180 128 142.4 44.8 176.4 4'></polygon>
          <polygon points='256 68.4 178 160.4 142.4 44.8 176.4 4'></polygon>
          <polygon points='123.2 212.4 20.8 249.6 37.2 192 58.4 120.8 0 101.2 37.2 0 117.2 9.6 196.4 100'></polygon>
          <rect x='48' y='48' width='160' height='160'></rect>
          <path
            d='M63.2,178 L123.2,178 L123.2,188 L63.2,188 L63.2,178 Z M106,80.8 L106,68.8 L73.2,68.8 L73.2,80.8 L82.4,80.8 L82.4,122.8 L73.2,122.8 L73.2,135.2 L106,135.2 L106,122.8 L96.8,122.8 L96.8,80.8 L106,80.8 Z M138,136 C133.433351,136.205984 128.889763,135.242193 124.8,133.2 C121.453966,131.354025 118.472002,128.914237 116,126 L125.2,115.6 C126.861272,117.42513 128.742265,119.03741 130.8,120.4 C132.73613,121.535124 134.957474,122.09046 137.2,122 C139.666127,122.188479 142.064692,121.139107 143.6,119.2 C145.452667,116.813942 146.312461,113.804666 146,110.8 L146,68 L160.8,68 L160.8,111.2 C160.951789,114.737935 160.408195,118.271293 159.2,121.6 C158.144579,124.977032 156.212191,128.013641 153.6,130.4 C149.066749,133.765567 143.638763,135.714074 138,136 Z'
            fill='#000080'
          ></path>
        </g>
      </svg>
    ),
  },
  {
    name: 'Expo',
    rating: 4,
    years: '<1 year',
    icon: 'fas fa-chevron-up',
  },
  {
    name: 'LaTex',
    rating: 4,
    years: '1 year',
    icon: 'fas fa-file',
  },
  {
    name: 'Photoshop',
    rating: 4,
    years: '<1 year',
    icon: (
      <svg
        version='1.1'
        id='Layer_1'
        xmlns='http://www.w3.org/2000/svg'
        width='64px'
        height='64px'
        viewBox='0 0 240 234'
      >
        <g id='Layer_2_1_'>
          <g id='Surfaces'>
            <g id='Photo_Surface'>
              <g id='Outline_no_shadow'>
                <path
                  class='st0'
                  d='M42.5,0h155C221,0,240,19,240,42.5v149c0,23.5-19,42.5-42.5,42.5h-155C19,234,0,215,0,191.5v-149
                C0,19,19,0,42.5,0z'
                />
              </g>
            </g>
          </g>
          <g id='Outlined_Mnemonics_Logos'>
            <g id='Ps'>
              <path
                fill='#000080'
                class='st1'
                d='M54,164.1V61.2c0-0.7,0.3-1.1,1-1.1c1.7,0,3.3,0,5.6-0.1c2.4-0.1,4.9-0.1,7.6-0.2c2.7-0.1,5.6-0.1,8.7-0.2
              c3.1-0.1,6.1-0.1,9.1-0.1c8.2,0,15,1,20.6,3.1c5,1.7,9.6,4.5,13.4,8.2c3.2,3.2,5.7,7.1,7.3,11.4c1.5,4.2,2.3,8.5,2.3,13
              c0,8.6-2,15.7-6,21.3c-4,5.6-9.6,9.8-16.1,12.2c-6.8,2.5-14.3,3.4-22.5,3.4c-2.4,0-4,0-5-0.1c-1-0.1-2.4-0.1-4.3-0.1v32.1
              c0.1,0.7-0.4,1.3-1.1,1.4c-0.1,0-0.2,0-0.4,0H55.2C54.4,165.4,54,165,54,164.1z M75.8,79.4V113c1.4,0.1,2.7,0.2,3.9,0.2H85
              c3.9,0,7.8-0.6,11.5-1.8c3.2-0.9,6-2.8,8.2-5.3c2.1-2.5,3.1-5.9,3.1-10.3c0.1-3.1-0.7-6.2-2.3-8.9c-1.7-2.6-4.1-4.6-7-5.7
              c-3.7-1.5-7.7-2.1-11.8-2c-2.6,0-4.9,0-6.8,0.1C77.9,79.2,76.5,79.3,75.8,79.4L75.8,79.4z'
              />
              <path
                fill='#000080'
                class='st1'
                d='M192,106.9c-3-1.6-6.2-2.7-9.6-3.4c-3.7-0.8-7.4-1.3-11.2-1.3c-2-0.1-4.1,0.2-6,0.7c-1.3,0.3-2.4,1-3.1,2
              c-0.5,0.8-0.8,1.8-0.8,2.7c0,0.9,0.4,1.8,1,2.6c0.9,1.1,2.1,2,3.4,2.7c2.3,1.2,4.7,2.3,7.1,3.3c5.4,1.8,10.6,4.3,15.4,7.3
              c3.3,2.1,6,4.9,7.9,8.3c1.6,3.2,2.4,6.7,2.3,10.3c0.1,4.7-1.3,9.4-3.9,13.3c-2.8,4-6.7,7.1-11.2,8.9c-4.9,2.1-10.9,3.2-18.1,3.2
              c-4.6,0-9.1-0.4-13.6-1.3c-3.5-0.6-7-1.7-10.2-3.2c-0.7-0.4-1.2-1.1-1.1-1.9v-17.4c0-0.3,0.1-0.7,0.4-0.9
              c0.3-0.2,0.6-0.1,0.9,0.1c3.9,2.3,8,3.9,12.4,4.9c3.8,1,7.8,1.5,11.8,1.5c3.8,0,6.5-0.5,8.3-1.4c1.6-0.7,2.7-2.4,2.7-4.2
              c0-1.4-0.8-2.7-2.4-4c-1.6-1.3-4.9-2.8-9.8-4.7c-5.1-1.8-9.8-4.2-14.2-7.2c-3.1-2.2-5.7-5.1-7.6-8.5c-1.6-3.2-2.4-6.7-2.3-10.2
              c0-4.3,1.2-8.4,3.4-12.1c2.5-4,6.2-7.2,10.5-9.2c4.7-2.4,10.6-3.5,17.7-3.5c4.1,0,8.3,0.3,12.4,0.9c3,0.4,5.9,1.2,8.6,2.3
              c0.4,0.1,0.8,0.5,1,0.9c0.1,0.4,0.2,0.8,0.2,1.2v16.3c0,0.4-0.2,0.8-0.5,1C192.9,107.1,192.4,107.1,192,106.9z'
              />
            </g>
          </g>
        </g>
      </svg>
    ),
  },
  {
    name: 'Illustrator',
    rating: 4,
    years: '<1 year',
    icon: (
      <svg
        version='1.1'
        id='Layer_1'
        xmlns='http://www.w3.org/2000/svg'
        width='64px'
        height='64px'
        viewBox='0 0 240 234'
      >
        <g id='Layer_2_1_'>
          <g id='Surfaces'>
            <g id='Photo_Surface'>
              <g id='Outline_no_shadow'>
                <path
                  class='st0'
                  d='M42.5,0h155C221,0,240,19,240,42.5v149c0,23.5-19,42.5-42.5,42.5h-155C19,234,0,215,0,191.5v-149
              C0,19,19,0,42.5,0z'
                />
              </g>
            </g>
          </g>
          <g id='Outlined_Mnemonics_Logos'>
            <g id='Ai'>
              <path
                fill='#000080'
                xmlns='http://www.w3.org/2000/svg'
                d='M116 140H78.8l-7.6 23.5c-.2.9-1 1.5-1.9 1.4H50.5c-1.1 0-1.4-.6-1.1-1.8l32.2-92.7c.3-1 .6-2.1 1-3.3.4-2.1.6-4.3.6-6.5-.1-.5.3-1 .8-1.1h25.9c.8 0 1.2.3 1.3.8l36.5 103c.3 1.1 0 1.6-1 1.6h-20.9c-.7.1-1.4-.4-1.6-1.1L116 140zm-31.4-20.3H110c-.6-2.1-1.4-4.6-2.3-7.2-.9-2.7-1.8-5.6-2.7-8.6-1-3.1-1.9-6.1-2.9-9.2s-1.9-6-2.7-8.9c-.8-2.8-1.5-5.4-2.2-7.8H97c-.9 4.3-2 8.6-3.4 12.9-1.5 4.8-3 9.8-4.6 14.8-1.4 5.1-2.9 9.8-4.4 14zM170 77c-3.3.1-6.5-1.2-8.9-3.5-2.3-2.5-3.5-5.8-3.4-9.2-.1-3.4 1.2-6.6 3.6-8.9s5.6-3.5 8.9-3.5c3.9 0 6.9 1.2 9.1 3.5 2.2 2.4 3.4 5.6 3.3 8.9.1 3.4-1.1 6.7-3.5 9.2-2.3 2.4-5.7 3.7-9.1 3.5zm-11.2 86.8v-77c0-1 .4-1.4 1.3-1.4h19.8c.9 0 1.3.5 1.3 1.4v77c0 1.1-.4 1.6-1.3 1.6h-19.6c-1 0-1.5-.6-1.5-1.6z'
              />
            </g>
          </g>
        </g>
      </svg>
    ),
  },

  {
    name: 'After Effects',
    rating: 3,
    years: '<1 year',
    icon: (
      <svg
        version='1.1'
        id='Layer_1'
        xmlns='http://www.w3.org/2000/svg'
        width='64px'
        height='64px'
        viewBox='0 0 240 234'
      >
        <g id='Layer_2_1_'>
          <g id='Surfaces'>
            <g id='Photo_Surface'>
              <g id='Outline_no_shadow'>
                <path
                  class='st0'
                  d='M42.5,0h155C221,0,240,19,240,42.5v149c0,23.5-19,42.5-42.5,42.5h-155C19,234,0,215,0,191.5v-149
              C0,19,19,0,42.5,0z'
                />
              </g>
            </g>
          </g>
          <g id='Outlined_Mnemonics_Logos'>
            <g id='Ae'>
              <path
                fill='#000080'
                xmlns='http://www.w3.org/2000/svg'
                class='st1'
                d='m96.4 140h-37.2l-7.6 23.6c-0.2 0.9-1 1.5-1.9 1.4h-18.8c-1.1 0-1.4-0.6-1.1-1.8l32.2-92.3c0.3-1 0.6-1.9 1-3.1 0.4-2.1 0.6-4.3 0.6-6.5-0.1-0.5 0.3-1 0.8-1.1h0.3 25.6c0.7 0 1.2 0.3 1.3 0.8l36.5 102c0.3 1.1 0 1.6-1 1.6h-20.9c-0.7 0.1-1.4-0.4-1.6-1.1l-8.2-24zm-31.4-19.9h25.4c-0.6-2.1-1.4-4.6-2.3-7.2-0.9-2.7-1.8-5.6-2.7-8.6-1-3.1-1.9-6.1-2.9-9.2s-1.9-6-2.7-8.9c-0.8-2.8-1.5-5.4-2.2-7.8h-0.2c-0.9 4.3-2 8.6-3.4 12.9-1.5 4.8-3 9.8-4.6 14.8-1.3 5.1-2.9 9.8-4.4 14z'
              />
              <path
                fill='#000080'
                xmlns='http://www.w3.org/2000/svg'
                class='st1'
                d='m187 131h-31.7c0.4 3.1 1.4 6.2 3.1 8.9 1.8 2.7 4.3 4.8 7.3 6 4 1.7 8.4 2.6 12.8 2.5 3.5-0.1 7-0.4 10.4-1.1 3.1-0.4 6.1-1.2 8.9-2.3 0.5-0.4 0.8-0.2 0.8 0.8v15.3c0 0.4-0.1 0.8-0.2 1.2-0.2 0.3-0.4 0.5-0.7 0.7-3.2 1.4-6.5 2.4-10 3-4.7 0.9-9.4 1.3-14.2 1.2-7.6 0-14-1.2-19.2-3.5-4.9-2.1-9.2-5.4-12.6-9.5-3.2-3.9-5.5-8.3-6.9-13.1-1.4-4.7-2.1-9.6-2.1-14.6 0-5.4 0.8-10.7 2.5-15.9 1.6-5 4.1-9.6 7.5-13.7 3.3-4 7.4-7.2 12.1-9.5s10.3-3.1 16.7-3.1c5.3-0.1 10.6 0.9 15.5 3.1 4.1 1.8 7.7 4.5 10.5 8 2.6 3.4 4.7 7.2 6 11.4 1.3 4 1.9 8.1 1.9 12.2 0 2.4-0.1 4.5-0.2 6.4-0.2 1.9-0.3 3.3-0.4 4.2-0.1 0.7-0.7 1.3-1.4 1.3-0.6 0-1.7 0.1-3.3 0.2-1.6 0.2-3.5 0.3-5.8 0.3s-4.7-0.4-7.3-0.4zm-31.7-14.6h21.1c2.6 0 4.5 0 5.7-0.1 0.8-0.1 1.6-0.3 2.3-0.8v-1c0-1.3-0.2-2.5-0.6-3.7-1.8-5.6-7.1-9.4-13-9.2-5.5-0.3-10.7 2.6-13.3 7.6-1.2 2.3-1.9 4.7-2.2 7.2z'
              />
            </g>
          </g>
        </g>
      </svg>
    ),
  },
  {
    name: 'Premiere Pro',
    rating: 3,
    years: '<1 year',
    icon: (
      <svg
        version='1.1'
        id='Layer_1'
        xmlns='http://www.w3.org/2000/svg'
        width='64px'
        height='64px'
        viewBox='0 0 240 234'
      >
        <g id='Layer_2_1_'>
          <g id='Surfaces'>
            <g id='Photo_Surface'>
              <g id='Outline_no_shadow'>
                <path
                  class='st0'
                  d='M42.5,0h155C221,0,240,19,240,42.5v149c0,23.5-19,42.5-42.5,42.5h-155C19,234,0,215,0,191.5v-149
                C0,19,19,0,42.5,0z'
                />
              </g>
            </g>
          </g>
          <g id='Outlined_Mnemonics_Logos'>
            <g id='Pr'>
              <path
                fill='#000080'
                xmlns='http://www.w3.org/2000/svg'
                class='st1'
                d='m57 164v-103c0-0.7 0.3-1.1 1-1.1 1.7 0 3.3 0 5.6-0.1 2.4-0.1 4.9-0.1 7.6-0.2s5.6-0.1 8.7-0.2 6.1-0.1 9.1-0.1c8.2 0 15 1 20.6 3.1 5 1.7 9.6 4.5 13.4 8.2 3.2 3.2 5.7 7.1 7.3 11.4 1.5 4.2 2.3 8.5 2.3 13 0 8.6-2 15.7-6 21.3s-9.6 9.8-16.1 12.2c-6.8 2.5-14.3 3.4-22.5 3.4-2.4 0-4 0-5-0.1s-2.4-0.1-4.3-0.1v32.1c0.1 0.7-0.4 1.3-1.1 1.4h-0.4-19c-0.8 0-1.2-0.4-1.2-1.3zm21.8-84.7v33.6c1.4 0.1 2.7 0.2 3.9 0.2h5.3c3.9 0 7.8-0.6 11.5-1.8 3.2-0.9 6-2.8 8.2-5.3 2.1-2.5 3.1-5.9 3.1-10.3 0.1-3.1-0.7-6.2-2.3-8.9-1.7-2.6-4.1-4.6-7-5.7-3.7-1.5-7.7-2.1-11.8-2-2.6 0-4.9 0-6.8 0.1-2-0.1-3.4 0-4.1 0.1z'
              />
              <path
                fill='#000080'
                xmlns='http://www.w3.org/2000/svg'
                class='st1'
                d='m147 85.2h17.5c1 0 1.8 0.7 2.1 1.6 0.3 0.8 0.5 1.6 0.6 2.5 0.2 1 0.4 2.1 0.5 3.1 0.1 1.1 0.2 2.3 0.2 3.6 3-3.5 6.6-6.4 10.7-8.6 4.6-2.6 9.9-3.9 15.2-3.9 0.7-0.1 1.3 0.4 1.4 1.1v0.4 19.5c0 0.8-0.5 1.1-1.6 1.1-3.6-0.1-7.3 0.2-10.8 1-2.9 0.6-5.7 1.5-8.4 2.7-1.9 0.9-3.7 2.1-5.1 3.7v51c0 1-0.4 1.4-1.3 1.4h-19.7c-0.8 0.1-1.5-0.4-1.6-1.2v-0.4-55.4c0-2.4 0-4.9-0.1-7.5s-0.1-5.2-0.2-7.8c0-2.3-0.2-4.5-0.4-6.8-0.1-0.5 0.2-1 0.7-1.1 0-0.1 0.2-0.1 0.3 0z'
              />
            </g>
          </g>
        </g>
      </svg>
    ),
  },
  {
    name: 'Android Studio',
    rating: 2,
    years: '<1 year',
    icon: 'fab fa-android',
  },
  {
    name: 'XCode',
    rating: 2,
    years: '<1 year',
    icon: 'fab fa-app-store-ios',
  },
];

const contact = [
  "Thank you for visiting my website! It's been a pleasure having you here. If you'd like to stay connected or have any questions, feel free to reach out through any of my social media channels or drop me an email. Let's keep the conversation going!",
];

export { introduction, typeWords, projects, skills, tools, contact };
