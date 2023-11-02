import axios from "../axios";
export const apiGetProducts = (params) => axios({
    url: '/product/',
    method: 'get',
    params 
})
export const apiGetProduct = (pid) => axios({
    url: '/product/',
    method: 'get',
    pid 
})
export const apiCreateProducts= (data) => axios({
    url: '/product/',
    method: 'post',
    data 
})