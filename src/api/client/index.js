import httpClient from './implementation';

const client = {
  get: (url, config) => httpClient.get(url, config),

  post: async (url, data = {}, config) => {
    const augmentedData = {
      ...data,
    };

    return httpClient.post(url, augmentedData, config);
  },

  put: async (url, data = {}, config) => {
    const augmentedData = {
      ...data,
    };

    return httpClient.put(url, augmentedData, config);
  },

  patch: (url, data, config) => httpClient.patch(url, data, config),

  delete: (url, config) => httpClient.delete(url, config),

  modifyHeaders: (headers) => {
    httpClient.defaults.headers = {
      ...httpClient.defaults.headers,
      ...headers,
    };
  },

  setBaseUrl: (url) => {
    httpClient.defaults.baseURL = url;
  },

  setTimeout: (timeout) => {
    httpClient.defaults.timeout = timeout;
  },
};

export default client;
