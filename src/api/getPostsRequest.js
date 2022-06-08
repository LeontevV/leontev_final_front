import api from './api';

const getPostsRequest = () => api.get('/posts');

export default getPostsRequest;
