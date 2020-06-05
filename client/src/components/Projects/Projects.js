import React from './node_modules/react';
import { makeStyles, Grid } from './node_modules/@material-ui/core';
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
    paddingTop: theme.spacing(8),
  },
  card: {
    margin: theme.spacing(2),
  },
  cardContainer: {
    width: '100%',
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
        <Grid item xs={12} className={classes.cardContainer}>
          <Project
            className={classes.card}
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
