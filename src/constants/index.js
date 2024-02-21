import { FaWhatsapp } from "react-icons/fa";
import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
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
    date: 'Dez 2014 - Feb 2025',
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
    id: 'project-1',
    name: 'Flask-Blog',
    description: 'A simple blog built with Flask.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: '',
    repo: '',
    demo: '',
  },
  // {
  //   id: 'project-2',
  //   name: 'Leaderboard',
  //   description:
  //     'A leaderboard list app that displays scores submitted by different players.',
  //   tags: [
  //     {
  //       name: 'react',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'restapi',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'scss',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: leaderboard,
  //   repo: 'https://github.com/shaqdeff/Leaderboard',
  //   demo: 'https://shaqdeff.github.io/Leaderboard/',
  // },
  // {
  //   id: 'project-3',
  //   name: 'Math Magicians',
  //   description: 'This is a single-page calculator app built with React',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: math,
  //   repo: 'https://github.com/shaqdeff/Math-Magicians',
  //   demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  // },
  // {
  //   id: 'project-4',
  //   name: 'Movie Metro',
  //   description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: movie,
  //   repo: 'https://github.com/shaqdeff/Movie-Metro',
  //   demo: 'https://movie-metro.netlify.app/',
  // },
  // {
  //   id: 'project-5',
  //   name: 'Nyeusi Fest Site',
  //   description:
  //     'This is a demo concert website for a music festival called Nyeusi.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: nyeusi,
  //   repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
  //   demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  // },
];

export { services, technologies, experiences, projects };
