import axios from 'axios';

const NETWORK_DEFAULT_TIMEOUT = 10000;

const client = axios.create({
  timeout: NETWORK_DEFAULT_TIMEOUT,
});

client.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
client.defaults.headers.put['Content-Type'] = 'application/json;charset=utf-8';
client.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8';

// Add a request interceptor
client.interceptors.request.use(
  async (config) => {
    console.log('[NETWORK] [REQUEST SUCCESS]:', config, new Date());
    return config;
  },
  (error) => {
    console.log('[NETWORK] [REQUEST ERROR]:', error);
    return Promise.reject(error);
  },
);

// Add a response interceptor
client.interceptors.response.use(
  (response = {}) => {
    console.log('[NETWORK] [RESPONSE SUCCESS]:', response, new Date());
    const { data, headers } = response;

    return {
      ...data,
      headers,
    };
  },
  (error) => {
    console.warn('[NETWORK] [RESPONSE ERROR]:', { ...error });
    return Promise.reject(error);
  },
);

export default client;
