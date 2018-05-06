import apisauce from 'apisauce'

const create = (baseURL = 'https://jsonplaceholder.typicode.com') => {

    const api = apisauce.create({
        // base URL is read from the "constructor"
        baseURL: baseURL,
        // here are some default headers
        headers: {
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/json',
        },
        // 10 second timeout...
        timeout: 10000
    });

    const getUser = () => api.get('/users');

    return {
        addMonitor:api.addMonitor,
        getUser
    }
};

export default {
    create
}