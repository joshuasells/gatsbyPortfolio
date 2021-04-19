import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Joshua Sells / JS Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Joshua Sells',
  subtitle: 'I am a JavaScript Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'professionalPhoto.jpg',
  paragraphOne: 'I am an aspiring JavaScript Developer. I am a husband and father. I love programming and building new things. ' +
  'My goal is to create an application someday that will drastically help the normal person become more organized, habitual, and happy!',
  paragraphTwo: 'When I graduated high school in 2015, I didn' + "'" + 't know what I wanted to do with my life. I was detail oriented, systems driven, and loved to build things. ' +
  'The problem was that I was never exposed to the concept of programming. Because of this, I was unsure about my dream occupation for a few years. ' +
  'After getting married and starting a family, I started pursuing a degree in Computer Science at the University of Concordia, St. Paul.',
  paragraphThree: 'It has been a crazy past few years of learning computer science, raising my family, and working full time. I am set to graduate in August 2021 and am currently looking for job opportunities! ' +
  'Please feel free to check out my site and reach out for a chat!',
  resume: 'https://drive.google.com/file/d/1P2dN50VHwPntq2vYhJuqbOcjHH_TsYxo/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'joshuataylorsells@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/joshuasells/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jsells18',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
