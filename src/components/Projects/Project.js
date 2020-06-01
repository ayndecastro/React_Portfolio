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
} from '@material-ui/core';
import { GitHub, Web } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  mainContainer: {
    width: '50%',
    transition: '0.5s',
    '&:hover': {
      transform: 'scale(1.02)',
    },

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      '&:hover': {
        transform: 'scale(1.02)',
      },
    },
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(5),
  },
  subContainer: {
    backgroundColor: '#ffe0b2',
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
    fontFamily: 'times new roman',
  },
  text: { color: '#333333', fontWeight: 'bold', fontFamily: 'times new roman' },
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
            <Typography variant='subtitle1' className={classes.text}>
              {description}
            </Typography>
            <br />
            <Typography className={classes.text}>{techStack}</Typography>
          </CardContent>
          <CardActions>
            <div className={classes.linksContainer}>
              <a href={Github} className={classes.atag}>
                <GitHub fontSize='large' />
              </a>
              {app ? (
                <a href={app} className={classes.atag}>
                  <Web fontSize='large' />
                </a>
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
