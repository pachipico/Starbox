import React from 'react';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  margin: 10px 0px;
  flex: 1;
  border: 1px solid #b5b5b5;
`;

const ImageView = styled.View`
  background-color: cyan;
  height: 200px;
`;

const TextContainer = styled.View`
  margin: 20px;
`;

const TitleText = styled.Text`
  font-size: 20px;
`;

const SubText = styled.Text`
  font-size: 16px;
  color: #b5b5b5;
`;

const CardButton = () => {
  return (
    <Container>
      <ImageView></ImageView>
      <TextContainer>
        <TitleText>e-Gift Item 보너스 스타</TitleText>
        <SubText>e-Gift Iten으로 빠르고 간편하게 마음 전송!</SubText>
      </TextContainer>
    </Container>
  );
};

export default CardButton;
