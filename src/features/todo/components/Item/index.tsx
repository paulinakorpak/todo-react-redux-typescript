import React from 'react';
import Form from 'react-bootstrap/Form';
import { BsArchiveFill } from 'react-icons/all';
import Element from './styles';

function Item() {
  return (
    <Element className="todo">
      <Form.Group controlId="formBasicCheckbox" className="d-flex align-items-center">
        <Form.Check
          type="checkbox"
          label="example todo"
          className="checkbox flex-grow-1 text-secondary flex-grow-1"
        />
        <BsArchiveFill className="icon text-primary" />
      </Form.Group>
    </Element>
  );
}

export default Item;
