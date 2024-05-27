import axios from 'axios';

const url = 'http://localhost:4000/posts';
// This will get the data from the backend application
export const fetchPosts = () => axios.get(url); 
export const createPost = (newPost) => axios.post(url, newPost); //(url, the data we are sending);