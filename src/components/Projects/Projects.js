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
}));

const Projects = () => {
  const classes = useStyle();
  return (
    <Grid
      container
      direction='column'
      spacing={3}
      className={classes.root}
      id='projects'
    >
      {ProjectList.map((project) => (
        <Grid item xs={12}>
          <Project
            app={project.app}
            description={project.description}
            image={project.image}
            Github={project.Github}
            name={project.name}
            techStack={project.techStack.join(' ')}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Projects;
