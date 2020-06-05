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
  mainGrid: {
    marginLeft: 'auto',
    marginRight: 'auto',
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
    marginTop: theme.spacing(15),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(3),
      width: theme.spacing(25),
      height: theme.spacing(25),
    },
  },
  name: {
    fontFamily: 'Kaushan Script, cursive',
    color: '#333333',
    margin: theme.spacing(2),
  },
  greeting: {
    fontWeight: 'bold',
    margin: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      color: '#333333',
    },
  },
  skills: {
    fontWeight: 'bold',
    margin: theme.spacing(2),
  },
}));

const About = () => {
  const classes = useStyle();
  return (
    <Grid container className={classes.root} id='about'>
      <Grid item xs={12} sm={10} className={classes.mainGrid}>
        <Avatar src={profile} className={classes.image} />
        <Typography variant='h2' className={classes.name}>
          Ayn de Castro
        </Typography>
      </Grid>
      <Grid item xs={12} sm={10} className={classes.mainGrid}>
        <Typography variant='h4' className={classes.greeting}>
          I am a Software Developer passionate about building and learning new
          things.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={10} className={classes.mainGrid}>
        <Typography variant='h5' className={classes.skills}>
          JAVASCRIPT | PYTHON | HTML/CSS
        </Typography>
        <Typography variant='subtitle1' className={classes.skills}>
          NodeJS | MongoDB | MySQL | ReactJS | Express | Mongoose | Sequelize |
          Redux
        </Typography>
      </Grid>
      <Grid item xs={12} sm={10} className={classes.mainGrid}>
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
    </Grid>
  );
};

export default About;
