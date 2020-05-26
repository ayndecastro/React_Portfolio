import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import project from '../../wallpaper/r32.png';

const useStyle = makeStyles((theme) => ({
  root: {
    justifyContent: 'center',
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
    border: 'solid pink',
    paddingTop: theme.spacing(8),
  },
  subContainerOne: {
    border: 'solid red',
    height: '60vh',
  },
  subContainerTwo: {
    border: 'solid red',
    background: 'grey',
    height: '60vh',
  },
}));

const Projects = () => {
  const classes = useStyle();
  return (
    <Grid container spacing={3} className={classes.root} id='projects'>
      <Grid item xs={12} container className={classes.subContainerOne}>
        <Grid item xs={1} />

        <Grid item xs={5}>
          <img src={project} className={classes.image} />
        </Grid>
        <Grid item xs={5} className={classes.text}>
          <h2>Project name</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            alias sed corporis esse nulla sapiente cumque fugiat aut numquam
            quod eveniet eligendi illum et dolore, impedit optio consectetur nam
            odio delectus a, labore quo, perferendis obcaecati. Consequatur
            doloribus veritatis a nobis error, culpa dolorum quos cum fuga!
            Facere ullam adipisci, molestias, aperiam blanditiis eius quam
            officia pariatur veniam, distinctio odit. Ea officiis iure ipsa
            doloremque dolores laborum nemo, a repellat saepe veritatis
            consequuntur magnam illo architecto amet reprehenderit, vel
            quibusdam nobis. In cumque necessitatibus ducimus est, tempora
            incidunt, dolores odio suscipit maiores unde nulla. Numquam rerum
            laborum voluptas obcaecati nisi.
          </p>
        </Grid>
        <Grid item xs={1} />
      </Grid>

      <Grid item xs={12} container className={classes.subContainerTwo}>
        <Grid item xs={1} />

        <Grid item xs={5} className={classes.text}>
          <h2>Project name</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            alias sed corporis esse nulla sapiente cumque fugiat aut numquam
            quod eveniet eligendi illum et dolore, impedit optio consectetur nam
            odio delectus a, labore quo, perferendis obcaecati. Consequatur
            doloribus veritatis a nobis error, culpa dolorum quos cum fuga!
            Facere ullam adipisci, molestias, aperiam blanditiis eius quam
            officia pariatur veniam, distinctio odit. Ea officiis iure ipsa
            doloremque dolores laborum nemo, a repellat saepe veritatis
            consequuntur magnam illo architecto amet reprehenderit, vel
            quibusdam nobis. In cumque necessitatibus ducimus est, tempora
            incidunt, dolores odio suscipit maiores unde nulla. Numquam rerum
            laborum voluptas obcaecati nisi.
          </p>
        </Grid>
        <Grid item xs={5}>
          <img src={project} className={classes.image} />
        </Grid>
        <Grid item xs={1} />
      </Grid>

      <Grid item xs={12} container className={classes.subContainerOne}>
        <Grid item xs={1} />
        <Grid item xs={5}>
          <img src={project} className={classes.image} />
        </Grid>
        <Grid item xs={5} className={classes.text}>
          <h2>Project name</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            alias sed corporis esse nulla sapiente cumque fugiat aut numquam
            quod eveniet eligendi illum et dolore, impedit optio consectetur nam
            odio delectus a, labore quo, perferendis obcaecati. Consequatur
            doloribus veritatis a nobis error, culpa dolorum quos cum fuga!
            Facere ullam adipisci, molestias, aperiam blanditiis eius quam
            officia pariatur veniam, distinctio odit. Ea officiis iure ipsa
            doloremque dolores laborum nemo, a repellat saepe veritatis
            consequuntur magnam illo architecto amet reprehenderit, vel
            quibusdam nobis. In cumque necessitatibus ducimus est, tempora
            incidunt, dolores odio suscipit maiores unde nulla. Numquam rerum
            laborum voluptas obcaecati nisi.
          </p>
        </Grid>
        <Grid item xs={1} />
      </Grid>

      <Grid item xs={12} container className={classes.subContainerTwo}>
        <Grid item xs={1} />

        <Grid item xs={5} className={classes.text}>
          <h2>Project name</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            alias sed corporis esse nulla sapiente cumque fugiat aut numquam
            quod eveniet eligendi illum et dolore, impedit optio consectetur nam
            odio delectus a, labore quo, perferendis obcaecati. Consequatur
            doloribus veritatis a nobis error, culpa dolorum quos cum fuga!
            Facere ullam adipisci, molestias, aperiam blanditiis eius quam
            officia pariatur veniam, distinctio odit. Ea officiis iure ipsa
            doloremque dolores laborum nemo, a repellat saepe veritatis
            consequuntur magnam illo architecto amet reprehenderit, vel
            quibusdam nobis. In cumque necessitatibus ducimus est, tempora
            incidunt, dolores odio suscipit maiores unde nulla. Numquam rerum
            laborum voluptas obcaecati nisi.
          </p>
        </Grid>
        <Grid item xs={5}>
          <img src={project} className={classes.image} />
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </Grid>
  );
};

export default Projects;
