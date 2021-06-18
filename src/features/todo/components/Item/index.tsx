import React from 'react';
import Form from 'react-bootstrap/Form';
import { BsArchiveFill } from 'react-icons/all';
import Element from './styles';
import { Todo, removeTodo } from '../../todoSlice';
import { useAppDispatch } from '../../../../app/hooks';

interface Props {
  item: Todo
}

function Item({ item }: Props) {
  const dispatch = useAppDispatch();

  const handleRemove = () => {
    dispatch(removeTodo(item));
  };

  return (
    <Element className="todo">
      <Form.Group controlId="formBasicCheckbox" className="d-flex align-items-center">
        <Form.Check
          type="checkbox"
          label={item.title}
          className="checkbox flex-grow-1 text-secondary flex-grow-1"
        />
        <BsArchiveFill
          onClick={handleRemove}
          className="icon text-primary"
        />
      </Form.Group>
    </Element>
  );
}

export default Item;
