import React from 'react';
import {
  Card,
  CardHeader,
  Box,
  CardMedia,
  makeStyles,
  CardContent,
  CardActions,
  Typography,
} from '@material-ui/core';
import { GitHub, Web } from '@material-ui/icons';
import ProjectList from './ProjectList';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'none',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

const Project = () => {
  const classes = useStyles();
  return (
    <Box>
      {ProjectList.map((project) => (
        <Card>
          <CardHeader
            title={project.name}
            subheader={project.techStack.join(' ')}
          />
          <CardMedia
            className={classes.media}
            image={project.image}
            title={project.name}
          />
          <CardContent>
            <Typography>{project.description}</Typography>
          </CardContent>
          <CardActions>
            <a href={project.Github}>
              <GitHub />
            </a>
            {project.app ? (
              <a href={project.app}>
                <Web />
              </a>
            ) : (
              <a></a>
            )}
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default Project;
