import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import { GitHub, LinkedIn, Description } from '@material-ui/icons';

const useStyle = makeStyles((theme) => ({
  container: {
    background: 'black',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    border: 'solid blue',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    height: '100vh',
  },
}));

const About = () => {
  const classes = useStyle();
  return (
    <div className={classes.container} id='about'>
      <Grid container>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <h1 className='name'>About Me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            voluptatum vel quod voluptates nesciunt quae earum possimus minus
            libero ea! Magnam, omnis quo vero iure molestias eius incidunt
            asperiores nihil?
          </p>
          <h3>Skills</h3>
          <GitHub />
          <LinkedIn />
          <Description />
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </div>
  );
};

export default About;
