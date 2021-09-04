import axios from 'axios';

axios.defaults.headers.post["Content-Type"]= "application/json";

axios.interceptors.response.use(null,error => {
    const expectedErrors =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;
    if (!expectedErrors) {
        alert("مشکلی از سمت سرور رخ داده است");
    }
    return Promise.reject(error);
});

export default{
    post: axios.post,
    get: axios.get,
    put: axios.put,
    delete: axios.delete
};