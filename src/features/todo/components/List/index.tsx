import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useAppSelector } from '../../../../app/hooks';
import { selectTodos, Todo } from '../../todoSlice';
import Item from '../Item';

function List() {
  const todos = useAppSelector(selectTodos);

  return (
    <div className="w-100">
      <ListGroup>
        {todos.map((item: Todo) => <Item key={item.id} item={item} />)}
      </ListGroup>
    </div>
  );
}

export default List;
