import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Item from '../Item/index';

function List() {
  return (
    <div className="w-100">
      <ListGroup>
        <Item />
        <Item />
        <Item />
      </ListGroup>
    </div>
  );
}

export default List;
