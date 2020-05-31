import React from 'react';
import { Button, makeStyles, Grid } from '@material-ui/core';
import { Link } from 'react-scroll';

const useStyle = makeStyles({
  root: {
    // background: 'linear-gradient(45deg, #ffcccb  30%, #B73E02 90%)',
    background: 'black',
    textAlign: 'center',
    padding: '10px',
    position: 'fixed',
    width: '100%',
    overflow: 'hidden',
    zIndex: 100000,
    border: 'solid green',
  },
  text: {
    color: 'white',
  },
});

const Header = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={4}>
          <Link
            to='about'
            activeClass='active'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Button className={classes.text}>ABOUT ME</Button>
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link
            to='home'
            activeClass='active'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Button className={classes.text}>HOME</Button>
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link
            to='projects'
            activeClass='active'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Button className={classes.text}>PROJECTS</Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
