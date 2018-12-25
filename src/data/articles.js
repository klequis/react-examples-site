/*
    An 'article' can be a componet within this app or an external github repository
    Articles with type='repo' get their id assigned when the app loads
*/
import Introduction from 'posts/Introduction'
// import ArrowFunctions from 'posts/ArrowFunctions'
// import ES67ForReact from 'posts/ES67ForReact'

export const articles = [
  {
    id: 'a8190a29-64f1-4939-b2eb-80e117af2afd',
    date: '17-Dec-2018',
    type: 'component',
    component: Introduction,
    description: 'A quick introduction to React examples.',
    path: '/introduction',
    pinned: 1,
    subtitle: 'Understanding and using the example projects',
    title: 'Introduction to React Examples',
  },
  {
    date: '19-Dec-2018',
    type: 'repo',
    description: 'A React button component with Material Design-like ripple effect using React JSS',
    gitHubUrl: 'https://github.com/klequis/ripple-button-ex',
    tags: ['React', 'Material Design'],
    title: 'Material Design-like button with ripple effect',
  },

  {
    date: '22-Dec-2018',
    type: 'repo',
    description: 'Flexbox properties demonstrated in a React app with Material UI.',
    gitHubUrl: 'https://github.com/klequis/react-flexbox-ex',
    tags: ['React', 'Flexbox', 'Material UI'],
    title: 'Using Flexbox with React & Material UI',
  },
]

// {
//   id: 'dddfccc5-dc62-43c5-a579-bf85131f8b2d',
//   date: '21-Apr-2016',
//   type: 'component',
//   component: ES67ForReact,
//   description: 'It is common to use ES6 & ES7 in React code. Here are some of the most common XXXXXXX you need to know.',
//   // gitHubUrl: 'https://github.com/klequis/intro-arrow-functions',
//   path: '/es-6-7-for-react',
//   // tags: ['JavaScript', 'Syntax', 'ES6', 'ES7'],
//   pinned: 2,
//   title: 'ES6 & ES7 for React',
// },

// {
//   id: '49282457-68ca-4bd8-8ca7-8c12fe1788f3',
//   date: '22-Apr-2016',
//   type: 'component',
//   component: ArrowFunctions,
//   description: 'The rules of arrorw functions => listed & explained by converting traditional functions to arrow functions.',
//   // gitHubUrl: 'https://github.com/klequis/intro-arrow-functions',
//   path: '/arrow-functions',
//   // tags: ['JavaScript', 'Syntax'],
//   pinned: 2,
//   title: 'Introduction to Arrow Functions',
// },