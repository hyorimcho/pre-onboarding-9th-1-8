import apiClient from '../apiClient';
import { postSignParam } from './param';

export const postSignUp = async ({ email, password }: postSignParam) => {
  return await apiClient({
    method: 'post',
    url: '/auth/signup',
    data: {
      email,
      password,
    },
  });
};

export const postSignIn = async ({ email, password }: postSignParam) => {
  return await apiClient({
    method: 'post',
    url: '/auth/signin',
    data: {
      email,
      password,
    },
  });
};
