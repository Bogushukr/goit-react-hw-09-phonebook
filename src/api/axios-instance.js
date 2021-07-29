import ax from 'axios';

const defaultOptions = {
  baseURL: 'https://connections-api.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
};

const axios = ax.create(defaultOptions);

export default axios;
