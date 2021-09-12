import React from 'react';

import {StackNavigationProp} from '@react-navigation/stack';
import {PayNavigatorParamList} from '../../types';

type PayScreenProps = {
  navigation: NavigatorProp;
};
export type NavigatorProp = StackNavigationProp<
  PayNavigatorParamList,
  'PayScreen'
>;

import {
  Container,
  HeaderBox,
  HeaderText,
  OptionButton,
} from '../GiftScreen/Styles';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PayScreen: React.FC<PayScreenProps> = ({navigation}) => {
  return (
    <Container>
      <HeaderBox>
        <OptionButton>
          <Text>
            <Icon name="menu-outline" size={24} />
          </Text>
        </OptionButton>
        <HeaderText>Pay</HeaderText>
      </HeaderBox>
    </Container>
  );
};

export default PayScreen;
