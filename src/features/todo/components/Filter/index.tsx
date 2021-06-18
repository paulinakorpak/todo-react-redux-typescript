import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { useAppDispatch } from '../../../../app/hooks';
import { setFilter } from '../../todoSlice';
import FilterType from '../../filterType';

function Filter() {
  const dispatch = useAppDispatch();

  const handleClick = (filter: FilterType) => {
    dispatch(setFilter(filter));
  };

  return (
    <div>
      <ButtonGroup className="mt-3">
        <Button
          onClick={() => handleClick(FilterType.All)}
          variant="link text-decoration-none"
        >
          All
        </Button>
        <Button
          onClick={() => handleClick(FilterType.Active)}
          variant="link text-decoration-none"
        >
          Active
        </Button>
        <Button
          onClick={() => handleClick(FilterType.Done)}
          variant="link text-decoration-none"
        >
          Done
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default Filter;
