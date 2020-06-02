import React from 'react';
import profile from '../../assets/profile_temp.jpg';
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
    color: '#ffe0b2',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 0,
  },
  mainGrid: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  atag: {
    margin: theme.spacing(5),
    color: '#333333',
    '&:visited': { color: '#333333' },
  },
  image: {
    width: theme.spacing(35),
    height: theme.spacing(35),
    alignSelf: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing(20),
  },
  name: {
    fontFamily: 'Kaushan Script, cursive',
    margin: theme.spacing(2),
  },
  greeting: {
    fontFamily: 'times new roman',
  },
  skills: {
    color: '#333333',
    fontFamily: 'times new roman',
    fontWeight: 'bold',
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dolorum
          repellendus id atque sed, aut ipsa magnam fugit modi quidem odit sunt
          dolores itaque debitis.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={10} className={classes.mainGrid}>
        <Typography variant='h5' className={classes.skills}>
          JAVASCRIPT | PYTHON | HTML/CSS
        </Typography>
        <Typography variant='subtitle1' className={classes.skills}>
          NodeJS | React | MongoDB | MySQL | ReactJS | Express | Mongoose |
          Sequelize
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
