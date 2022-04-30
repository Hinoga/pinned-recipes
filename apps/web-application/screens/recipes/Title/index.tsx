import React from 'react';

import { Text } from '@pinned-recipes/ui';
import { HeaderBoxStyled } from './styles';

const Title: React.VFC = () => {
  return (
    <HeaderBoxStyled>
      <Text.Title>Pinned you're favorite recipes! 👋</Text.Title>
    </HeaderBoxStyled>
  );
};

export default Title;
