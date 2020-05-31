import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import { GitHub, LinkedIn, Description } from '@material-ui/icons';

const useStyle = makeStyles((theme) => ({
  container: {
    background: 'black',
    color: 'white',
    textAlign: 'center',
    border: 'solid blue',
    overflow: 'hidden',
    height: '100vh',
  },
  mainGrid: {
    marginLeft: 'auto',
    marginRight: 'auto',
    border: 'solid red',
  },
}));

const About = () => {
  const classes = useStyle();
  return (
    <Grid container className={classes.container} id='about'>
      <Grid item xs={12} sm={10} className={classes.mainGrid}>
        <h1 className='name'>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
          voluptatum vel quod voluptates nesciunt quae earum possimus minus
          libero ea! Magnam, omnis quo vero iure molestias eius incidunt
          asperiores nihil?
        </p>
        <h3>Skills</h3>

        <a href='https://github.com/ayndecastro'>
          <GitHub />
        </a>
        <a href='www.linkedin.com/in/vincent-ayn-de-castro'>
          <LinkedIn />
        </a>
        <a href='https://docs.google.com/document/d/1DoJQkl_gpjpiaeJ6ffkASGNF2vJeBXxHCzg2WfpS6nw/edit?usp=sharing'>
          <Description />
        </a>
      </Grid>
    </Grid>
  );
};

export default About;
