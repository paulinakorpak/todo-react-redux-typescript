import React from 'react';
import { useAppDispatch } from '../../../../app/hooks';
import { addTodo } from '../../todoSlice';

function Form() {
  const dispatch = useAppDispatch();

  const handleChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.currentTarget.value !== '') {
      const todo = {
        id: Date.now(),
        title: e.currentTarget.value,
        completed: false,
      };

      dispatch(addTodo(todo));

      e.currentTarget.value = '';
    }
  };

  return (
    <div className="w-100">
      <input
        onKeyDown={handleChange}
        type="text"
        placeholder="add new todo"
        className="form-control form-control-color-secondary p-4"
      />
    </div>
  );
}

export default Form;
