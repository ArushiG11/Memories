import React, {useEffect} from 'react';
import { Container, Grow, Grid } from '@mui/material';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { StyledAppBar, StyledTypography, StyledImg } from './styles';
import memories from './images/memories.jpeg';
import { useDispatch } from 'react-redux'; // to dispatch an action
import {getPosts} from './actions/posts';

const App = () => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    },[]);

    return (
        <Container maxWidth="lg">
            <StyledAppBar position='static' color='inherit'>
                <StyledTypography variant='h2' align='center'>
                    Memories
                    <StyledImg src={memories} alt="memories" height="60" />
                </StyledTypography>
            </StyledAppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
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