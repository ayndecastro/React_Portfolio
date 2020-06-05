import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import ProjectList from './ProjectList';
import Project from './Project';

const useStyle = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    textAlign: 'center',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    width: '100%',
    background: '#2D112A',
  },
  cardContainer: {
    width: '100%',
  },
}));

const Projects = () => {
  const classes = useStyle();
  return (
    <Grid container spacing={1} className={classes.root} id='projects'>
      {ProjectList.map((project) => (
        <Grid item lg={6} sm={12} className={classes.cardContainer}>
          <Project
            app={project.app}
            description={project.description}
            image={project.image}
            Github={project.Github}
            name={project.name.toUpperCase()}
            techStack={project.techStack.join(' | ')}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Projects;
