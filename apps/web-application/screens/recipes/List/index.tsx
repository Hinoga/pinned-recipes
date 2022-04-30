import React from 'react';
import { ItemList, ListContainer } from './styles';

const List = () => {
  return (
    <ListContainer>
      {[1, 2].map((item) => (
        <ItemList>{item}</ItemList>
      ))}
    </ListContainer>
  );
};

export default List;
