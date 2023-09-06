import { BASE_URL } from './common/constants';
import axios from 'axios';


export const requester = axios.create({ baseURL: BASE_URL });
