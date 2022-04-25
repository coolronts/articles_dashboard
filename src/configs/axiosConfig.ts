import axios, { AxiosResponse } from 'axios';

const responseBody = (response: AxiosResponse) => response.data;
const instance = axios.create({
  baseURL: 'https://storage.googleapis.com',
  timeout: 15000,
});


const networkClient = {
    get: (url:string) => instance.get(url).then(responseBody),
    delete: (url: string) => instance.delete(url).then(responseBody),
    put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
    post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
};

export default networkClient;


