import * as api from '../api';

// Action Creators - func that create actions
// now here we are dealing with asynchronous data. to fetch all post some time will pass
export const getPosts = () => async (dispatch) => {
    try {
        // we are getting response as data obj from api
        const { data } = await api.getPosts();
        // sending that data through payload
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
    
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};