import React from 'react';
import { ContainerStyled } from './styles';
import { useSpoonacularAPI } from '@pinned-recipes/data-access-contexts';
import { Badge, Card, CardBody, CardFooter, Text } from '@pinned-recipes/ui';
import EmptyList from './Empty';

const List = () => {
  const spoonacularRecipes = useSpoonacularAPI();
  console.log(spoonacularRecipes);
  return (
    <section>
      {spoonacularRecipes.length > 0 ? (
        <ContainerStyled>
          {spoonacularRecipes.map((item) => (
            <Card>
              <img src={item.image} alt="" style={{ maxWidth: '100%' }} />
              <CardBody>
                <Text.Paragraph>{item.title}</Text.Paragraph>
                <CardFooter>
                  <Badge>C-{item.carbs}</Badge>
                  <Badge>P-{item.protein}</Badge>
                  <Badge>F-{item.fat}</Badge>
                </CardFooter>
              </CardBody>
            </Card>
          ))}
        </ContainerStyled>
      ) : (
        <EmptyList />
      )}
    </section>
  );
};

export default List;
