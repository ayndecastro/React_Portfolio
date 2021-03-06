import React from 'react';
import {
  Card,
  Box,
  Paper,
  CardMedia,
  makeStyles,
  CardContent,
  CardActions,
  Typography,
  Tooltip,
} from '@material-ui/core';
import { GitHub, Web } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  media: {
    paddingTop: '56.25%', // 16:9
  },
  mainContainer: {
    width: '60%',
    transition: '0.5s',
    '&:hover': {
      transform: 'scale(1.02)',
    },

    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(5),
  },
  subContainer: {
    backgroundColor: '#FFDCC8',
  },

  atag: {
    margin: theme.spacing(5),
    color: '#333333',
    '&:visited': {
      color: '#333333',
    },
  },
  linksContainer: {
    width: '100%',
  },
  title: {
    color: '#333333',
    fontWeight: 'bold',
    margin: theme.spacing(2),
  },
  text: { color: '#333333', fontWeight: 'bold', margin: theme.spacing(1) },
  techStack: { color: '#333333', fontWeight: 'bold', margin: theme.spacing(2) },
}));

const Project = ({ app, description, image, Github, name, techStack }) => {
  const classes = useStyles();

  return (
    <Box className={classes.mainContainer}>
      <Paper elevation={24}>
        <Card className={classes.subContainer}>
          <CardMedia className={classes.media} image={image} title={name} />
          <CardContent class>
            <Typography variant='h4' className={classes.title}>
              {name}
            </Typography>
            <Typography variant='subtitle2' className={classes.text}>
              {description}
            </Typography>
            <Typography className={classes.techStack}>{techStack}</Typography>
          </CardContent>
          <CardActions>
            <div className={classes.linksContainer}>
              <Tooltip title='Github page'>
                <a href={Github} className={classes.atag}>
                  <GitHub fontSize='large' />
                </a>
              </Tooltip>
              {app ? (
                <Tooltip title='App Website'>
                  <a href={app} className={classes.atag}>
                    <Web fontSize='large' />
                  </a>
                </Tooltip>
              ) : (
                ''
              )}
            </div>
          </CardActions>
        </Card>
      </Paper>
    </Box>
  );
};

export default Project;
