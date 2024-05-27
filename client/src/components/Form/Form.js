import React, { useState } from 'react'
import {TextField, Button, Typography, Paper} from '@material-ui/core'
import { Dispatch } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';

import useStyles from './style.js'
import { createPost } from '../../actions/posts.js';


function Form() {
    const classes = useStyles();
    const [postData, setPostData] = useState({ creator: '', message: '', title: '', tag: '', fileSelected: ''});
    const dispatch = useDispatch();

    const handleSubmit = (e) =>{
      e.preventDefault(); //   This will prevent from refreshing the page 
      dispatch(createPost(postData));
    }

    const clear = () =>{

    }

  return (
    <Paper className={classes.paper}>
      <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}` } onSubmit={handleSubmit}>
        <Typography variant='h6'>Creating a Memory TimeLine</Typography>
        <TextField name="creator"  variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(event)=> setPostData({...postData, creator: event.target.value})}></TextField>
        <TextField name="message"  variant="outlined" label="Message" fullWidth value={postData.message} onChange={(event)=> setPostData({...postData, message: event.target.value})}></TextField>
        <TextField name="title"  variant="outlined" label="title" fullWidth value={postData.title} onChange={(event)=> setPostData({...postData, title: event.target.value})}></TextField>
        <TextField name="tag"  variant="outlined" label="Tag" fullWidth value={postData.tag} onChange={(event)=> setPostData({...postData, tag: event.target.value})}></TextField>
        <div className={classes.fileInput}>
          <FileBase  type ="file" multiple={false} onDone={ ({base64}) => setPostData ({...postData, fileSelectedSelected: base64})} />
        </div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth >Submit</Button>
        <Button  variant="contained" color="secondary" size="small" onClick={clear} fullWidth >Clear</Button>

      </form>

    </Paper>
  )
}

export default Form;