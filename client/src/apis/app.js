import axios from "../axios";

export const  apiGetCategoies = () => axios({
    url: '/productcategory',
    method: 'get'
})


