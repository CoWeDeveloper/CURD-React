import React, { useEffect} from 'react';
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form.js';
import memoriesPic from "./Images/memories.png"
import useStyles from './style.js';


const App = ()=>{
  const classes = useStyles();
  const dispatch = useDispatch();
// after setting dispatch through useEffect, we need to dispatch our actions
  useEffect(()=>{
    dispatch(getPosts)
  }, [dispatch]);
  

  return(
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align="center">Social Life App</Typography>
        <img className={classes.image} src={memoriesPic} alt='memories' height="60" />
      </AppBar>

      <Grow in>
        <Container>
          <Grid container justifyContent='space-between' alignItems='stretch' spacing={3} >
            {/* inside Grid, we have assign container attribute this will enable us to make two grid items */}
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>

          </Grid>
        </Container>

      </Grow>

    </Container>
     
  );
}

export default App;
