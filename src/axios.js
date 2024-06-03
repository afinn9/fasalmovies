import axios from 'axios'
import { baseUrl } from './Component/Constants/Constants';
import {} from './Component/Constants/Constants'
const instance = axios.create({
    baseURL: baseUrl
});

export default instance