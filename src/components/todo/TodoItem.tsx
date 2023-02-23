import { ITodo } from '@/pages/TodoPage/types';
import React, { useState } from 'react';

const TodoItem = ({ todo }: { todo: ITodo }) => {
  const [isComplete, setIsComplete] = useState(todo.isCompleted);

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={isComplete}
          onChange={() => setIsComplete((curr) => !curr)}
        />
        <span>{todo.todo}</span>
      </label>
    </li>
  );
};

export default TodoItem;
