import React from 'react';
import profile from '../../assets/profile.JPG';
import {
  makeStyles,
  Grid,
  Typography,
  Avatar,
  Tooltip,
} from '@material-ui/core';
import { GitHub, LinkedIn, Description } from '@material-ui/icons';

const useStyle = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    overflow: 'hidden',
    height: '100vh',
    color: '#FFDCC8',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 0,
    marginBottom: theme.spacing(5),
  },
  firstGrid: {
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
  },
  nameGrid: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  greetingsGrid: {
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
  },
  skillsGrid: {
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
  },
  linksGrid: {
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
  },
  atag: {
    color: '#FFDCC8',
    margin: theme.spacing(5),
    '&:visited': { color: '#FFDCC8' },
  },
  image: {
    width: theme.spacing(35),
    height: theme.spacing(35),
    alignSelf: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing(10),

    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(8),
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
  },
  name: {
    fontFamily: 'Kaushan Script, cursive',
    color: '#333333',
    [theme.breakpoints.down('xs')]: {
      fontSize: '3rem',
    },
  },
  greeting: {
    fontWeight: 'bold',
    margin: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      color: '#333333',
      fontSize: '1.2rem',
      margin: theme.spacing(0),
    },
  },
  skills: {
    fontWeight: 'bold',
    margin: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      color: '#333333',
      fontSize: '1rem',
      margin: theme.spacing(0),
    },
  },
}));

const About = () => {
  const classes = useStyle();
  return (
    <Grid container className={classes.root} id='about'>
      <Grid item xs={12} sm={10} className={classes.firstGrid}>
        <Avatar src={profile} className={classes.image} />
      </Grid>
      <Grid item xs={12} sm={10} className={classes.nameGrid}>
        {' '}
        <Typography variant='h1' className={classes.name}>
          Ayn de Castro
        </Typography>
      </Grid>
      <Grid item xs={12} sm={10} className={classes.greetingsGrid}>
        <Typography variant='h4' className={classes.greeting}>
          Software Developer from Austin Texas.
          <br /> I am passionate about building applications and learning new
          things. A great team player who's always looking to bring something
          new and interesting to the table.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={10} className={classes.skillsGrid}>
        <Typography variant='h5' className={classes.skills}>
          JAVASCRIPT | PYTHON | HTML/CSS
        </Typography>
        <Typography variant='subtitle1' className={classes.skills}>
          NodeJS | MongoDB | MySQL | ReactJS | Express | Mongoose | Sequelize |
          Redux
        </Typography>
      </Grid>
      <Grid item xs={12} sm={10} className={classes.linksGrid}>
        <Tooltip title='Github Profile'>
          <a href='https://github.com/ayndecastro' className={classes.atag}>
            <GitHub />
          </a>
        </Tooltip>
        <Tooltip title='LinkedIn Account'>
          <a
            href='https://linkedin.com/in/vincent-ayn-de-castro'
            className={classes.atag}
          >
            <LinkedIn />
          </a>
        </Tooltip>
        <Tooltip title='Resume'>
          <a
            href='https://docs.google.com/document/d/1DoJQkl_gpjpiaeJ6ffkASGNF2vJeBXxHCzg2WfpS6nw/edit?usp=sharing'
            className={classes.atag}
          >
            <Description />
          </a>
        </Tooltip>
      </Grid>
      <Grid item xs={12} sm={10} className={classes.linksGrid} />
    </Grid>
  );
};

export default About;
