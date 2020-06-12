import bento from '../../assets/bento.png';
import rps from '../../assets/RPS.png';
import safetravels from '../../assets/SafeTravels.png';
import books from '../../assets/Books.png';
import FriendFinder from '../../assets/FriendFinder.png';

const projectList = [
  {
    id: 1,
    sort: true,
    name: 'RPS Game',
    techStack: ['Python'],
    Github: 'https://github.com/ayndecastro/RPS_python.git',
    image: rps ? rps : '#',
    description: 'Basic Rock-Paper-Scissor game with player vs PC',
  },
  {
    id: 2,
    sort: false,
    name: 'Ben-to',
    techStack: ['NodeJS', 'MongoDB', 'React', 'Redux', 'Auth-0', 'Express'],
    Github: 'https://github.com/ayndecastro/ben-to.git',
    image: bento ? bento : '#',
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
    image: safetravels ? safetravels : '#',
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
    image: books ? books : '#',
    description:
      'A simple book reading list app that lets you track books that you want read',
  },
  {
    id: 5,
    sort: true,
    name: 'Friend Finder',
    techStack: ['NodeJS', 'HTML', 'CSS', 'Express'],
    Github: 'https://github.com/ayndecastro/FriendFinder.git',
    app: 'https://secret-island-76490.herokuapp.com/',
    image: FriendFinder ? FriendFinder : '#',
    description:
      'The Friend Finder app, Matches you with a friend based on the survey with a series of 10 questions',
  },
];

export default projectList;
