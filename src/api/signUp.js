import api from './api';

const signUpUser = () => api.post('/users');

export default signUpUser;
