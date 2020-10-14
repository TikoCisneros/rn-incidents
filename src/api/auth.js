import client from './client';

const login = async ({ username, password: secret }) =>
  client.post('https://up-company.dev/dev-up-security/api/v1/user/login', {
    username,
    secret,
    app: 'SITY_ADMIN',
  });

// eslint-disable-next-line import/prefer-default-export
export { login };
