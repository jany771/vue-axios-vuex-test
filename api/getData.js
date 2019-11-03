import request from '../config/axiosConfig';
import qs from 'qs'

export function getJokes(data){
    return request({
        url:"/jokes/list/random",
        method:"GET",
        params:data 
    })
}

export function getWeather(data){
    return request({
        url:"/weather/forecast/"+data,
        method:"GET",
        params:data
    })
}

export function getUnknow(data,isJson=false){
    return request({
        url:"/weather/forecast/",
        method:"POST",
        params:isJson?data : qs.stringify(data)
    })
}
