import axios from 'axios';

//TODO: Need to put into .env file
axios.defaults.baseURL = `https://storage.googleapis.com`;
const networkClient = {
    get: (url) => axios.get(url),
    // post: (url) => axios.post(url),
    // put: (url) => axios.put(url),
    // delete: (url) => axios.delete(url)
};

export default networkClient;