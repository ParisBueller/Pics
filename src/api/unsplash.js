import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 9580754c365b6b1df81edc41f9ddef4c78f3b0ec523db1157efb2653d764c4d4'
    }
});

