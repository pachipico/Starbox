import React from 'react';
import styled from 'styled-components/native';
import {DrinkInfo} from '../../../types';
import DrinkView from './DrinkView';
const Container = styled.View``;

const HorizintalScrollView = styled.ScrollView`
  flex: 1;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin: 23px 10px;
`;

type DrinkContainerProps = {
  title: string;
  drinks: DrinkInfo[];
};

const HorizontalDrinkContainer: React.FC<DrinkContainerProps> = ({
  title,
  drinks,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <HorizintalScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {drinks.map((drink, i) => {
          return <DrinkView name={drink.name} key={i} />;
        })}
      </HorizintalScrollView>
    </Container>
  );
};

export default HorizontalDrinkContainer;
