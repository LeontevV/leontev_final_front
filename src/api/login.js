import api from './api';

const loginUser = () => api.post('/users/sign_in');

export default loginUser;
