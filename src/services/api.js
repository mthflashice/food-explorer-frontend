import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://food-explorer-backend-a13f.onrender.com' //yarn start
    // baseURL: 'http://localhost:3333' //produção 

});

