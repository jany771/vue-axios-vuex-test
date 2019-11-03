import request from './axiosConfig'
import qs from 'qs'

export const get= function(url,data){
    return request({
        url: url,
        method:"GET",
        params: data 
    })
}

export const post= function(url,data,isJson =false){
    return request({
        url: url,
        method:"GET",
        data: isJson ? data : qs.stringify(data)
    })
}