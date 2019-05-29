import axios from 'axios';

const api = axios.create({
    baseURL: 'https://proj-omnistack-backend-dropbox.herokuapp.com'
});

export default api;