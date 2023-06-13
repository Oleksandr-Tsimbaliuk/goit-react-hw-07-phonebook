import React from 'react';
import { StyledFilterBox, StyledFilterTitle } from './Filter.styled';

function Filter({ filter, changeFilter }) {
  return (
    <StyledFilterBox>
      <StyledFilterTitle>Find contacts by name</StyledFilterTitle>
      <input value={filter} type="text" required onChange={changeFilter} />
    </StyledFilterBox>
  );
}

export default Filter;
