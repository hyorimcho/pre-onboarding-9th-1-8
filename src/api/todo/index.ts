import apiClient from '../apiClient';
import { CreateTodoType } from './types';

export const createTodo = async (todo: string) => {
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

export const deleteTodo = async (id: number) => {
  return await apiClient({
    method: 'delete',
    url: `/todos/${id}`,
  });
};

export const updateTodo = async (
  id: number,
  todo: string,
  isCompleted: boolean,
) => {
  return await apiClient({
    method: 'put',
    url: `/todos/${id}`,
    data: {
      todo,
      isCompleted,
    },
  });
};
