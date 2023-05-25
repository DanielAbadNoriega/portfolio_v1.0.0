import html from '../assets/imgs/iconos_languages/html.png';
import css from '../assets/imgs/iconos_languages/css.png';
import js from '../assets/imgs/iconos_languages/js.png';
import react from '../assets/imgs/iconos_languages/react.png';
import git from '../assets/imgs/iconos_languages/git.png';

export const SKILLS = [
  {
    name: 'html',
    img: html,
    content: {
      Basic: 'links, tables, Iframes, Responsive...',
      Forms:
        'Attributes, elements, input types and attibutes and input form Attributes.',
      Media: 'Media, Video and Audio.',
      APIs: 'Geolacation, Drag/Drop, Web Storage...',
    },
  },
  {
    name: 'css',
    img: css,
    content: {
      Selectors:
        'types, classes, ID, attributes, pseudo-classes, and pseudo-elements.',
      'Box model': 'margin, padding, border, height, width.',
      Display: 'block, inline, inline-block, flex, grid.',
      Positioning: 'static, relative, absolute, fixed.',
      'Units of measurement': 'px, em, rem, %, vh, vw.',
      Typografy:
        'font-family, font-size, font-weight, ,line-height, text-align, text-decoration.',
      Colors: 'color, background-color, opacity.',
      Animations: 'transition, transform, keyframes.',
    },
  },
  {
    name: 'js',
    img: js,
    content: {
      APIs: 'Browser APIs (fetch, websockets, geolocation, etc.), Integration with external APIs, Advanced asynchronous programming, Package and module management.',
      Frameworks: 'Frontend Frameworks like ReactJS.',
    },
  },
  {
    name: 'react',
    img: react,
    content: {
      Components:
        'Props, State, Component lifecycle, Event handling, Component communication, Routing with React Router, useContext, Redux.',
      Forms: 'Validations width Formik y YUP.',
      Hooks:
        'Effect hook (useEffect), State hook (useState), Reference hook (useRef), Context hook (useContext).',
      Redux: 'React Redux (state management), Redux SAGA.',
    },
  },
  {
    name: 'git',
    img: git,
    content: {
      Basic:
        'Initial Git setup, cloning a repository, version control commands (add, commit, push, pull, fetch).',
      'Work with branchs': 'branch, checkout, merge, rebase.',
      'Work through the command line and with graphical tools':
        ' GitKraken or GitHub Desktop.',
    },
  },
];

export const SKILLS_FRONT = [
  'HTML5',
  'CSS3',
  'SASS/SCSS',
  'Bootstrap',
  'Tailwind',
  'Javascript',
  'ReactJS',
  'Typescript',
  'GIT',
];
export const SKILLS_BACK = [
  'MongoDB',
  'Express',
  'NodeJS',
  'API REST',
  'Firebase',
];
