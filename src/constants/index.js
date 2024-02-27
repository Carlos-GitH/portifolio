import {
  frontend,
  backend,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  docker,
  database,
  g2soft,
  urbenLemos,
  csuDigital,
  urban,
  self,
  ferreiraCosta,
  cSharp,
  aws,
  plSQL,
  java,
  golang,
  python,
  powerAutomate,
  whatsapp,
  linkedin,
  github,
  spotify,
  github_black,
  pineapple,
  tasksStopwatch,
  laCasaDiCarlos,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

export const navIcons = [
  {
    id:'linkedin',
    icon: linkedin,
    link: 'https://linkedin.com/in/carlosaluizio/'
  },
  {
    id:'github',
    icon: github_black,
    link: 'https://github.com/Carlos-GitH'
  },
  {
    id:'whatsapp',
    icon: whatsapp,
    link: 'https://wa.me/5581981463245'
  },
  {
    id: 'spotify',
    icon: spotify,
    link: 'https://open.spotify.com/user/1cl2ara1x1ezepr2x6y5kqutd?si=HnqadKA5RPeSLQM3BI164A',
  },
]

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Data Analist',
    icon: database,
  },
];

const technologies = [
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'C#',
    icon: cSharp,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'Pl/SQL',
    icon: plSQL,
  },
  {
    name: 'Golang',
    icon: golang,
  },
  {
    name: 'AWS',
    icon: aws,
  },
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  }, 
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'Power Automate',
    icon: powerAutomate,
  },
];

const experiences = [
  {
    title: 'Outbound Telemarketing Operator',
    company_name: 'CSU Digital',
    icon: csuDigital,
    iconBg: '#333333',
    date: 'Dez 2014 - Feb 2015',
  },
  {
    title: 'Technical Suport',
    company_name: 'G2 Soft',
    icon: g2soft,
    iconBg: '#333333',
    date: 'Apr 2017 - Sep 2017',
  },
  {
    title: 'Administrative Assistant',
    company_name: 'G2 Soft',
    icon: g2soft,
    iconBg: '#333333',
    date: 'Oct 2017 - Aug 2018',
  },
  {
    title: 'Civil Engineer Internship',
    company_name: 'Urban - Viva o novo',
    icon: urban,
    iconBg: '#333333',
    date: 'Apr 2019 - Dez 2020',
  },
  {
    title: 'Construction Manager',
    company_name: 'Autonomous',
    icon: self,
    iconBg: '#333333',
    date: 'Jul 2021 - Apr 2022',
  },
  {
    title: 'Construction Manager',
    company_name: 'Urben Lemos Engenharia',
    icon: urbenLemos,
    iconBg: '#333333',
    date: 'Jul 2022 - Dez 2022',
  },
  {
    title: 'Data Analist Internship',
    company_name: 'Home Center Ferreira Costa',
    icon: ferreiraCosta,
    iconBg: '#333333',
    date: 'Apr 2023 - Dez 2023',
  },
  {
    title: 'Junior Data Analist',
    company_name: 'Home Center Ferreira Costa',
    icon: ferreiraCosta,
    iconBg: '#333333',
    date: 'Dez 2023 - Current',
  },
];

const projects = [
  {
    id: 'la-casa-di-carlos',
    name: 'Ristorante La Casa Di Carlos',
    description: 'A menu reactive page for a restaurant.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'TypeScript',
        color: 'green-text-gradient',
      },
      {
        name: 'SCSS',
        color: 'pink-text-gradient',
      },
    ],
    image: laCasaDiCarlos,
    repo: 'https://github.com/Carlos-GitH/la-casa-di-carlos',
    demo: 'https://carlos-gith.github.io/la-casa-di-carlos/',
  },
  {
    id: 'cronometro-tarefas',
    name: 'Tasks-Stopwatch',
    description: 'A task stopwatch for better control of your time.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'TypeScript',
        color: 'green-text-gradient',
      },
      {
        name: 'SCSS',
        color: 'pink-text-gradient',
      },
    ],
    image: tasksStopwatch,
    repo: 'https://github.com/Carlos-GitH/tasks-stopwatch',
    demo: 'https://carlos-gith.github.io/tasks-stopwatch/',
  },
];

export { services, technologies, experiences, projects };
