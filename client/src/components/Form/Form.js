import React, { useState, useEffect } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import FileBase from 'react-file-base64';
import { StyledRoot, StyledPaper, StyledForm, StyledFileInput, StyledSubmitButton } from './styles'; // Adjust the import path as needed
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({currentId, setCurrentId}) => {
  const dispatch = useDispatch();
//   state
  const [postData, setPostData] = useState(
      {creator:'', title: '', message: '', tags: '', selectedFile: ''}
  )
  const post = useSelector((state) => currentId? state.posts.find((p) => p._id === currentId): null);
   // Your state and handler functions (e.g., postData, setPostData, handleSubmit, clear) should be defined here

  useEffect(()=> {
    if (post) setPostData(post);
  },[currentId, post])

  const handleSubmit = (e) => {
    e.preventDefault(); //not to get refresh in the browser
    if(currentId){
      dispatch(updatePost(currentId, postData));
    }
    else{
    dispatch(createPost(postData));}
    clear();
  }

  const clear = () => {
    setCurrentId(null);
    setPostData({creator:'', title: '', message: '', tags: '', selectedFile: ''});
  }
  
  return (
    <StyledRoot>
      <StyledPaper>
        <StyledForm autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Typography variant="h6">{currentId? 'Creating': 'Editing'} a Memory</Typography>
          {/* value over here is gonna be stored in a postdata object in the state  */}
          <TextField 
            name="creator" 
            variant="outlined" 
            label="Creator" 
            fullwidth = 'true'
            value={postData.creator} 
            // ...postData: This is the spread operator. It's copying all existing properties from the current postData object into this new object.
// creator: e.target.value: This is adding or updating the creator property with the new value from the input field.
            onChange={(e) => setPostData({ ...postData, creator: e.target.value })} 
          />
          <TextField 
            name="title" 
            variant="outlined" 
            label="Title" 
            fullwidth = 'true' 
            value={postData.title} 
            onChange={(e) => setPostData({ ...postData, title: e.target.value })} 
          />
          <TextField 
            name="message" 
            variant="outlined" 
            label="Message" 
            fullwidth = 'true' 
            multiline 
            rows={4} 
            value={postData.message} 
            onChange={(e) => setPostData({ ...postData, message: e.target.value })} 
          />
          <TextField 
            name="tags" 
            variant="outlined" 
            label="Tags (comma separated)" 
            fullwidth = 'true' 
            value={postData.tags} 
            onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} 
          />
          <StyledFileInput>
            <FileBase 
              type="file" 
              multiple={false} 
              onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} 
            />
          </StyledFileInput>
          <StyledSubmitButton 
            variant="contained" 
            color="primary" 
            size="large" 
            type="submit" 
            fullwidth = 'true'
          >
            Submit
          </StyledSubmitButton>
          <Button 
            variant="contained" 
            color="secondary" 
            size="small" 
            onClick={clear} 
            fullwidth = 'true'
          >
            Clear
          </Button>
        </StyledForm>
      </StyledPaper>
    </StyledRoot>
  );
}

export default Form;