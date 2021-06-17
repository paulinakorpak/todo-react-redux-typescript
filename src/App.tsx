import React from 'react';
import Figure from 'react-bootstrap/Figure';
import Wrapper from './styles';
import Filter from './features/todo/components/Filter';
import Form from './features/todo/components/Form';
import List from './features/todo/components/List';

function App() {
  return (
    <div className="container-sm d-flex justify-content-center h-100 w-100">
      <Wrapper className="d-flex flex-column align-items-center">
        <Figure className="text-center mt-5">
          <blockquote className="blockquote">
            <h1 className="h1 title text-primary text-uppercase">To Do List</h1>
          </blockquote>
          <Figure.Caption className="blockquote-footer text-secondary">
            you wont forget anything today!
          </Figure.Caption>
        </Figure>
        <Form />
        <List />
        <Filter />
      </Wrapper>
    </div>
  );
}

export default App;
