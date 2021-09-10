import React from 'react';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
`;
const HeaderText = styled.Text`
  font-size: 24px;
`;

const OrderScreen = () => {
  return (
    <Container>
      <HeaderText>Order</HeaderText>
    </Container>
  );
};

export default OrderScreen;
