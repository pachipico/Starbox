import React from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Container,
  HeaderBox,
  HeaderText,
  OptionButton,
} from '../GiftScreen/Styles';

const OrderScreen = () => {
  return (
    <Container>
      <HeaderBox>
        <OptionButton>
          <Text>
            <Icon name="search-outline" size={24} />
          </Text>
        </OptionButton>
        <HeaderText>Order</HeaderText>
      </HeaderBox>
    </Container>
  );
};

export default OrderScreen;
