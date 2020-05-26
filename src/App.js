import React from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import { Grid } from '@material-ui/core';
import Home from './components/Home/Home.js';

function App() {
  return (
    <div>
      <Header />
      <Grid container direction='column'>
        <Grid item xs={12}>
          <Home />
        </Grid>
        <Grid item xs={12}>
          <About />
        </Grid>
        <Grid item xs={12}>
          <Projects />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
