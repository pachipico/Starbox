import React from 'react';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
`;
const HeaderText = styled.Text`
  font-size: 24px;
`;

const GiftScreen = () => {
  return (
    <Container>
      <HeaderText>Gift</HeaderText>
    </Container>
  );
};

export default GiftScreen;
