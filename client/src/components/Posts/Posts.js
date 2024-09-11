import React from 'react';
import Post from './Post/Post';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@mui/material';
import { StyledContainer } from './styles';

// import useStyles from './styles';

const Posts = ({setCurrentId}) =>{
    const posts = useSelector((state) => state.posts);
    console.log(posts);
    // const classes = useStyles();
    return(
        !posts.length ? <CircularProgress/> : (
            <StyledContainer container alignItems="stretch" spacing={3}>
                {posts.map((post) => 
                    <Grid item key = {post._id} xs= {12} sm={6}>
                        <Post post = {post} setCurrentId ={setCurrentId} />
                    </Grid>
                )}
            </StyledContainer>
        )
    );
}

export default Posts;