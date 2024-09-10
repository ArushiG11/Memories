import axios from 'axios'; //to make api calls

const API = axios.create({ baseURL: 'http://localhost:8080' });

export const getPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
