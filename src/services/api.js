import axios from 'axios';
const token = localStorage.getItem('token')
  ? localStorage.getItem('token')
  : '';
let url = 'https://api-todolist.igorrzinho.repl.co';

const api = axios.create({
  baseURL: url,
  headers: {
    token: token,
    'Content-Type': 'application/json',
  },
});

export default api;
