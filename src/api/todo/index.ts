import apiClient from '../apiClient';
import { createTodoParam } from './param';

export const createTodo = async ({ todo }: createTodoParam) => {
  return await apiClient({
    method: 'post',
    url: '/todos',
    data: {
      todo,
    },
  });
};

export const getTodo = async () => {
  return await apiClient({
    method: 'get',
    url: '/todos',
  });
};
