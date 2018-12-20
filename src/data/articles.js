/*
    An 'article' can be a componet within this app or an external github repository
*/
import Introduction from 'posts/Introduction'

export const articles = [
  {
    date: '19-Dec-18',
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
  {
    id: 'a8190a29-64f1-4939-b2eb-80e117af2afd',
    type: 'component',
    component: Introduction,
    description: 'If you are unfamiliar with JSS, React-JSS and/or ThemeProvider, this will be a good read.',
    path: '/introduction',
    subtitle: 'Understanding and using the example projects',
    title: 'Introduction',
  },
]

