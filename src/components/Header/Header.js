import React from 'react';
import { Button, makeStyles, Grid } from '@material-ui/core';
import { Link } from 'react-scroll';

const useStyle = makeStyles({
  root: {
    backgroundColor: 'hsla(0, 0%, 0%, 0.6)',
    height: '50px',
    textAlign: 'center',
    position: 'fixed',
    width: '100%',
    overflow: 'hidden',
    zIndex: 100000,
  },
  button: {
    color: '#ffe0b2',
    width: '70%',
    // fontFamily: 'times new roman',
    fontWeight: 'bold',
    transition: '0.5s',
    alignSelf: 'center',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

const Header = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          <Link
            to='about'
            activeClass='active'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Button size='large' className={classes.button}>
              ABOUT ME
            </Button>
          </Link>
        </Grid>

        <Grid item xs={6}>
          <Link
            to='projects'
            activeClass='active'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Button size='large' className={classes.button}>
              PROJECTS
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
