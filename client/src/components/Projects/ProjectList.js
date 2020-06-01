import photo from '../../wallpaper/r32.png';

const projectList = [
  {
    id: 1,
    sort: true,
    name: 'RPS Game',
    techStack: ['Python'],
    Github: 'https://github.com/ayndecastro/RPS_python.git',
    image: photo,
    description: 'Basic Rock-Paper-Scissor game with player vs PC',
  },
  {
    id: 2,
    sort: false,
    name: 'Ben-to',
    techStack: ['NodeJS', 'MongoDB', 'React', 'Redux', 'Auth-0', 'Express'],
    Github: 'https://github.com/ayndecastro/ben-to.git',
    image: photo,
    description:
      'Bento is a Lunchbox Marketplace app concept that helps homecooks sell homecooked Meals',
  },
  {
    id: 3,
    sort: true,
    name: 'Safe Travels',
    techStack: ['NodeJS', 'MongoDB', 'React', 'Redux', 'Auth-0', 'Express'],
    Github: 'https://github.com/ayndecastro/project_3.git',
    app: 'https://project3trip.herokuapp.com/',
    image: photo,
    description:
      'Safe-Travels is an application that helps you budget for your next trip',
  },
  {
    id: 4,
    sort: false,
    name: 'Book Reading List',
    techStack: ['NodeJS', 'MongoDB', 'React', 'Express'],
    Github: 'https://github.com/ayndecastro/books.git',
    app: 'https://bookspracticex.herokuapp.com/',
    image: photo,
    description:
      "A simple book reading list app that lets you store books that you've already read",
  },
  {
    id: 5,
    sort: true,
    name: 'Friend Finder',
    techStack: ['NodeJS', 'HTML', 'CSS', 'Express'],
    Github: 'https://github.com/ayndecastro/FriendFinder.git',
    app: 'https://secret-island-76490.herokuapp.com/',
    image: photo,
    description:
      'The Friend Finder app, Matches you with a friend based on the survey with a series of 10 questions',
  },
];

export default projectList;
