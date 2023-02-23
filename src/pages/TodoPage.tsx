import { createTodo, getTodo } from '@/api/todo';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

export interface Itodo {
  id: number;
  isCompleted: boolean;
  todo: string;
  userId: number;
}
const TodoPage = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState<Itodo[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await getTodo();
      setTodos(res.data);
    };
    getData();
  }, []);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await createTodo({ todo: value });
    console.log('res', res);
    setTodos([...todos, res.data]);
    setValue('');
  };
  console.log(todos);
  return (
    <div>
      <h1>할 일</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="value"
          placeholder="할 일을 추가 해 주세요"
          value={value}
          onChange={onChange}
          data-testid="new-todo-input"
        />
        <button type="submit" data-testid="new-todo-add-button">
          추가
        </button>
      </form>
      <ul>
        {todos?.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input type="checkbox" checked={todo.isCompleted} />
                <span>{todo.todo}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoPage;
