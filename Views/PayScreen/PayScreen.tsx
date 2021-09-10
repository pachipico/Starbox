import React from 'react';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
`;
const HeaderText = styled.Text`
  font-size: 24px;
`;

const PayScreen = () => {
  return (
    <Container>
      <HeaderText>Pay</HeaderText>
    </Container>
  );
};

export default PayScreen;
