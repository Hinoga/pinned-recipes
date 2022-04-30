import React from 'react';

import { HeaderBox, RecipesContainer } from './styles';
import Title from './Title';
import Header from './Header';
import SearchInput from './SearchInput';
import List from './List';

const Recipes: React.VFC = () => {
  return (
    <RecipesContainer>
      <HeaderBox>
        <Header />
        <SearchInput />
      </HeaderBox>
      <Title />
      <List />
    </RecipesContainer>
  );
};

export default Recipes;
