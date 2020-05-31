import React from 'react';
import {
  Card,
  CardHeader,
  Box,
  Paper,
  CardMedia,
  makeStyles,
  CardContent,
  CardActions,
  Typography,
} from '@material-ui/core';
import { GitHub, Web } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  mainContainer: {
    maxWidth: '80%',
    transition: '0.5s',
    '&:hover': {
      transform: 'scale(1.1)',
    },

    '@media (max-width:1024px)': {
      maxWidth: '95%',
      '&:hover': {
        maxWidth: '100%',
      },
    },
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(5),
  },
  subContainer: {
    background: 'grey',
  },
  paperCard: {
    '&:hover': {
      elevation: 24,
    },
    stack: {
      background: 'red',
    },
  },
}));

const Project = ({ app, description, image, Github, name, techStack }) => {
  const classes = useStyles();

  return (
    <Box className={classes.mainContainer}>
      <Paper elevation={24}>
        <Card className={classes.subContainer}>
          <CardHeader title={name} subheader={techStack} />
          <CardMedia className={classes.media} image={image} title={name} />
          <CardContent>
            <Typography>{description}</Typography>
          </CardContent>
          <CardActions>
            <a href={Github}>
              <GitHub />
            </a>
            {app ? (
              <a href={app}>
                <Web />
              </a>
            ) : (
              ''
            )}
          </CardActions>
        </Card>
      </Paper>
    </Box>
  );
};

export default Project;
