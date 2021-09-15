import React from 'react';
import styled from 'styled-components/native';

export const DrinkContainer = styled.View`
  border: 1px solid black;
  align-items: center;
`;

export const DrinkImg = styled.View`
  height: 100px;
  background-color: cyan;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  width: 100px;
  margin: 10px;
`;

export const DrinkText = styled.Text`
  font-size: 24px;
`;

export const DrinkName = styled.Text``;

type DrinkViewProps = {
  name: string;
};

const DrinkView: React.FC<DrinkViewProps> = ({name}) => {
  return (
    <DrinkContainer>
      <DrinkImg>
        <DrinkText>1</DrinkText>
      </DrinkImg>
      <DrinkName>{name}</DrinkName>
    </DrinkContainer>
  );
};

export default DrinkView;
