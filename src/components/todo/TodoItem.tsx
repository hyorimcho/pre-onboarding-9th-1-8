import { deleteTodo, updateTodo } from '@/api/todo';
import { ITodo } from '@/pages/TodoPage/types';
import { useState, Dispatch } from 'react';

const TodoItem = ({
  todo,
  todos,
  setTodos,
}: {
  todo: ITodo;
  todos: ITodo[];
  setTodos: Dispatch<React.SetStateAction<ITodo[]>>;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [todoTitle, setTodoTitle] = useState(todo.todo);

  const handleDelete = async () => {
    await deleteTodo(todo.id);
    const newTodos = todos.filter((item) => item.id !== todo.id);
    setTodos(newTodos);
  };

  const handleUpdate = async () => {
    const res = await updateTodo(todo.id, todoTitle, todo.isCompleted);
    const newTodo = todos.map((todo) =>
      todo.id === res.data.id ? res.data : todo,
    );
    setTodos(newTodo);
    setIsEditing(false);
  };

  const handleCheck = async () => {
    const res = await updateTodo(todo.id, todoTitle, !todo.isCompleted);
    const newTodo = todos.map((todo) =>
      todo.id === res.data.id ? res.data : todo,
    );
    setTodos(newTodo);
    setIsEditing(false);
  };

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={handleCheck}
        />
        {isEditing ? (
          <>
            <input
              value={todoTitle}
              onChange={(e) => setTodoTitle(e.target.value)}
              data-testid="modify-input"
            />
            <button type="button" onClick={() => setIsEditing(!isEditing)}>
              x
            </button>
            <button type="button" onClick={handleUpdate}>
              제출
            </button>
          </>
        ) : (
          <>
            <span>{todo.todo}</span>
            <button
              type="button"
              onClick={handleDelete}
              data-testid="delete-button"
            >
              x
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(!isEditing)}
              data-testid="modify-button"
            >
              수정
            </button>
          </>
        )}
      </label>
    </li>
  );
};

export default TodoItem;
