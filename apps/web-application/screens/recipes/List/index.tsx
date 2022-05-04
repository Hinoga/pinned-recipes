import React from 'react';
import { ContainerStyled, ListContainerStyled } from './styles';
import { useSpoonacularAPI } from '@pinned-recipes/data-access-contexts';
import { Card, CardBody, Text } from '@pinned-recipes/ui';
import EmptyList from './Empty';

const List = () => {
  const spoonacularRecipes = useSpoonacularAPI();
  return (
    <ListContainerStyled>
      {spoonacularRecipes.length > 0 ? (
        <ContainerStyled>
          {spoonacularRecipes.map((item) => (
            <Card>
              <img src={item.image} alt="" style={{ maxWidth: '100%' }} />
              <CardBody>
                <Text.Paragraph>{item.title}</Text.Paragraph>
              </CardBody>
            </Card>
          ))}
        </ContainerStyled>
      ) : (
        <EmptyList />
      )}
    </ListContainerStyled>
  );
};

export default List;
