import React from 'react';
import { useDispatch } from 'react-redux';
import {StyledCard, StyledCardMedia, CardActionsStyled, Overlay, Overlay2, Details, Title} from './styles';
import { CardContent, Button, Typography } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';  // Ensure you have moment installed
import { likePost, deletePost } from '../../../actions/posts';


const Post = ({ post, setCurrentId }) => {
    // const dispatch = useDispatch();
    const dispatch = useDispatch();
    return (
      <StyledCard>
        <StyledCardMedia image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
        <Overlay>
          <Typography variant="h6">{post.creator}</Typography>
          <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
        </Overlay>
        <Overlay2>
          <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}>
            <MoreHorizIcon fontSize="default" />
          </Button>
        </Overlay2>
        <Details>
          <Typography variant="body2" color="textSecondary" component="h2">
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
        </Details>
        <Title gutterBottom variant="h5" component="h2">
          {post.title}
        </Title>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.message}
          </Typography>
        </CardContent>
        <CardActionsStyled>
          <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
            <ThumbUpAltIcon fontSize="small" /> &nbsp; Like &nbsp; {post.likeCount} 
          </Button>
          <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
            <DeleteIcon fontSize="small" /> Delete
          </Button>
        </CardActionsStyled>
      </StyledCard>
    );
  };
  
  export default Post;