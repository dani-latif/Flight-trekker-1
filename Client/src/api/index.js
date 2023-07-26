import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3001' });


export const fetchPostsBySearch = (searchQuery) => API.get(`/jobs/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);

