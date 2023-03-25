import { ITodoForm } from '@/pages/TodoPage/types';
import useInputs from '@/lib/hooks/useInputs';
import { FormEvent } from 'react';

const TodoForm = ({ submitFn }: ITodoForm) => {
  const [todoData, onChangeTodoData, setValues] = useInputs({ todo: '' });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitFn(todoData.todo);
    setValues({ todo: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">
        할 일 추가하기
        <input
          data-testid="new-todo-input"
          id="todo"
          name="todo"
          type="text"
          value={todoData.todo}
          onChange={onChangeTodoData}
        />
      </label>
      <button type="submit" data-testid="new-todo-add-button">
        추가
      </button>
    </form>
  );
};

export default TodoForm;
