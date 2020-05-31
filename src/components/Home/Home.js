import React from 'react';
import { Grid, Avatar, makeStyles } from '@material-ui/core';
import profile from '../../wallpaper/profile_temp.jpg';

const useStyle = makeStyles((theme) => ({
  container: {
    background: 'grey',
    border: 'solid yellow',
    height: '100vh',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 0,
    overflow: 'hidden',
  },
  image: {
    width: theme.spacing(45),
    height: theme.spacing(45),
    alignSelf: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing(20),
  },
  name: {},
}));

const Home = () => {
  const classes = useStyle();
  return (
    <div className={classes.container} id='home'>
      <Grid container spacing={3}>
        <Grid item sm={10} xs={12} className={classes.container}>
          <Avatar src={profile} className={classes.image} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
