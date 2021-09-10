import React from 'react';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
`;
const HeaderText = styled.Text`
  font-size: 24px;
`;

const HomeScreen = () => {
  return (
    <Container>
      <HeaderText>Home</HeaderText>
    </Container>
  );
};

export default HomeScreen;
