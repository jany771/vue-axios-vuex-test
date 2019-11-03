/* eslint-disable no-console */
import axios from 'axios';

const request = axios.create({
    baseURL:"https://www.mxnzp.com/api",
    timeout:15000
});

request.interceptors.request.use(config=>{
    console.log('请求开始')
    console.log(config)
    console.log('请求结束')
    return config;
});

request.interceptors.response.use(response=>{
    console.log('响应开始')
    console.log(response)
    console.log('响应结束')
    return response;
})

export default request;