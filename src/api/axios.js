import axios from 'axios';
import ApplicationStore from '../utils/localStorageUtil';
const token = ApplicationStore().getStorage('token');  
// const id=ApplicationStore().getStorage('id');  

export default axios.create({
    baseURL:'http://localhost:3006/api',
    headers: {
        'Content-Type':'application/json',
        "authorization" : `Bearer:${token}`,
        // "id":id
    } 
});