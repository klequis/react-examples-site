/*
    An 'article' can be a componet within this app or an external github repository
    Articles with type='repo' get their id assigned when the app loads
*/
import Introduction from 'posts/Introduction'

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
    date: '22-Apr-2016',
    type: 'repo',
    description: 'The rules of arrorw functions => listed & explained by converting traditional functions to arrow functions.',
    gitHubUrl: 'https://github.com/klequis/intro-arrow-functions',
    tags: ['JavaScript', 'Syntax'],
    title: 'Introduction to Arrow Functions',
  },
  // https://github.com/klequis/react-flexbox-ex
  //
  {
    date: '22-Dec-2018',
    type: 'repo',
    description: 'Flexbox properties demonstrated in a React app with Material UI.',
    gitHubUrl: 'https://github.com/klequis/react-flexbox-ex',
    tags: ['React', 'Flexbox', 'Material UI'],
    title: 'Using Flexbox with React & Material UI',
  },
]