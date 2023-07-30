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
    code: ' ',
    link: ' ',
  },
  {
    projectName: 'Charliechildress.me',
    organization: 'Independent',
    information:
      'Personal website to applying my skills in web development and UI/UX design. Hope you enjoy it!',
    languages: ['HTML', 'CSS', 'JavaScript', 'React'],
    code: ' ',
    link: ' ',
  },
  {
    projectName: 'GreenBox Dashboard',
    organization: 'GreenBox Storage',
    information:
      'Dashboard that provides real-time insights and centralized control for order management, customer data, and key administrative tasks.',
    languages: ['HTML', 'CSS', 'TypeScript', 'React'],
    code: ' ',
    link: ' ',
  },
  {
    projectName: 'Tiny Search Engine',
    organization: 'Dartmouth Computer Science Department, CS50',
    information:
      'Mini version of the Google search engine. Crawls through web pages, indexes word occurrences, and returns the best URLs based on word relevance to the query.',
    languages: ['C'],
    code: ' ',
    link: ' ',
  },
  {
    projectName: 'Nuggets',
    organization: 'Dartmouth Computer Science Department, CS50',
    information:
      'A multi-player exploration game, Nuggets, in which a game server maintains all game state, and one or more game clients display the game to a user. The object of the game is to collect more gold nuggets than any other player.',
    languages: ['C'],
    code: ' ',
    link: ' ',
  },
  {
    projectName: 'Collaborative Sketch Editor',
    organization: 'Dartmouth Computer Science Department, CS10',
    information:
      'Collaborative graphical editor that allows multiple simultaneous editors on the same document. The server can handle multiple objects at a time, and clients can draw rectangles, line segments, elipses and freehand shapes.',
    languages: ['Java'],
    code: ' ',
    link: ' ',
  },
];

const skills = [
  {
    name: 'Java',
    rating: '5',
    years: '2 years',
    icon: 'fab fa-java javaIcon',
  },
  {
    name: 'JavaScript',
    rating: '4',
    years: '<1 year',
    icon: 'fab fa-js-square jsIcon',
  },
  {
    name: 'React',
    rating: '4',
    years: '<1 year',
    icon: 'fab fa-react reactIcon',
  },
  {
    name: 'React Native',
    rating: '4',
    years: '<1 year',
    icon: 'fab fa-react rnIcon',
  },
  {
    name: 'Python',
    rating: '4',
    years: '3 years',
    icon: 'fab fa-python pythonIcon',
  },
  {
    name: 'HTML',
    rating: '4',
    years: '<1 year',
    icon: 'fab fa-html5 htmlIcon',
  },
  {
    name: 'CSS',
    rating: '4',
    years: '<1 year',
    icon: 'fab fa-css3-alt',
  },
  {
    name: 'C',
    rating: '3',
    years: '1 year',
    icon: 'fas fa-copyright cIcon',
  },
  {
    name: 'TypeScript',
    rating: '3',
    years: '<1 year',
  },
  {
    name: 'Bash',
    rating: '3',
    years: '1 year',
    icon: 'fas fa-terminal',
  },
  {
    name: 'JSON',
    rating: '3',
    years: '2 years',
    icon: 'fas fa-file',
  },
];

const tools = [
  {
    name: 'Git/Git Flow',
    rating: '5',
    years: '2 years',
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'>
        <path d='M0 32v32h64.002V-.002H0zm51.577-2.55c1.625.406 2.865 1.128 4.003 2.306.59.63 1.463 1.778 1.534 2.052.02.08-2.763 1.95-4.45 2.997-.06.04-.305-.223-.58-.63-.823-1.2-1.686-1.717-3.007-1.808-1.94-.132-3.2.884-3.18 2.58 0 .498.07.792.274 1.2.427.884 1.22 1.412 3.708 2.49 4.582 1.97 6.542 3.27 7.76 5.12 1.36 2.062 1.666 5.354.742 7.802-1.016 2.662-3.535 4.47-7.08 5.07-1.097.193-3.698.163-4.876-.05-2.57-.457-5.008-1.727-6.512-3.393-.59-.65-1.737-2.347-1.666-2.47.03-.04.295-.203.59-.376l2.377-1.37 1.84-1.067.386.57c.538.823 1.717 1.95 2.428 2.326 2.042 1.077 4.846.924 6.227-.315.59-.538.833-1.097.833-1.92 0-.742-.09-1.067-.477-1.625-.498-.71-1.514-1.31-4.4-2.56-3.302-1.422-4.724-2.306-6.024-3.708-.752-.813-1.463-2.113-1.758-3.2-.244-.904-.305-3.17-.112-4.084.68-3.2 3.088-5.415 6.563-6.075 1.128-.213 3.75-.132 4.856.142zM36.552 32.12l.02 2.62h-8.33v23.67H22.35v-23.67h-8.33v-2.57l.07-2.64c.03-.04 5.1-.06 11.246-.05l11.185.03z' />
      </svg>
    ),
  },
  {
    name: 'Microsoft Office',
    rating: '5',
    years: '7 years',
    icon: 'fab fa-microsoft',
  },
  {
    name: 'VSCode',
    rating: '5',
    years: '2 years',
  },
  {
    name: 'IntelliJ Idea',
    rating: '5',
    years: '3 years',
  },
  {
    name: 'Expo',
    rating: '4',
    years: '<1 year',
    icon: 'fas fa-chevron-up',
  },
  {
    name: 'LaTex',
    rating: '4',
    years: '1 year',
  },
  {
    name: 'Photoshop',
    rating: '4',
    years: '<1 year',
  },
  {
    name: 'Illustrator',
    rating: '4',
    years: '<1 year',
  },

  {
    name: 'After Effects',
    rating: '3',
    years: '<1 year',
  },
  {
    name: 'Premiere Pro',
    rating: '3',
    years: '<1 year',
  },
  {
    name: 'Android Studio',
    rating: '2',
    years: '<1 year',
    icon: 'fab fa-android',
  },
  {
    name: 'XCode',
    rating: '2',
    years: '<1 year',
    icon: 'fab fa-app-store-ios',
  },
];

const contact = [
  'If you have any questions, comments, criticisms, concerns, please contact me in any of the mediums below!',
];

export { introduction, typeWords, projects, skills, tools, contact };
