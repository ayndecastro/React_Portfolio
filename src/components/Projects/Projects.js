import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import ProjectList from './ProjectList';
import Project from './Project';

const useStyle = makeStyles((theme) => ({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    width: '100%',
  },
  image: {
    borderRadius: '20px',
    width: '80%',
    margin: theme.spacing(8),
  },
  text: {
    textAlign: 'left',
    border: 'solid pink',
    paddingTop: theme.spacing(8),
  },
  subContainerOne: {
    border: 'solid red',
    height: '60vh',
  },
  subContainerTwo: {
    border: 'solid red',
    background: 'grey',
    height: '60vh',
  },
}));

const Projects = () => {
  const classes = useStyle();
  return (
    <Grid container spacing={3} className={classes.root} id='projects'>
      <Project />
    </Grid>
  );
};

export default Projects;
