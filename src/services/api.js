import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dadosabertos.camara.leg.br/api/v2',
});

export default api;
