import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {OtherNavigatorParamList} from '../../types';
import ListItem from '../Components/ListItem';

import {
  Container,
  HeaderBox,
  HeaderText,
  OptionButton,
} from '../GiftScreen/Styles';

import {BodyBox, List, ListTitle} from './Styles';

type OtherScreenProps = {
  navigation: NavigatorProp;
};

type NavigatorProp = StackNavigationProp<
  OtherNavigatorParamList,
  'OtherScreen'
>;

const OtherScreen: React.FC<OtherScreenProps> = ({navigation}) => {
  const service = [
    {text: '리워드', icon: 'star-outline'},
    {text: '쿠폰', icon: 'gift-outline'},
    {text: 'e-기프트 카드', icon: 'ios-gift-outline'},
    {text: "what's new", icon: 'mail-outline'},
    {text: '알림', icon: 'notifications-outline'},
    {text: '히스토리', icon: 'stopwatch-outline'},
    {text: '전자영수증', icon: 'receipt-outline'},
    {text: '마이 스타벅스 리뷰', icon: 'pencil'},
  ];

  return (
    <Container>
      <HeaderBox>
        <OptionButton onPress={() => navigation.navigate('Setting')}>
          <Text>
            <Icon name="settings-outline" size={24} />
          </Text>
        </OptionButton>
        <HeaderText>Other</HeaderText>
      </HeaderBox>
      <BodyBox>
        <List>
          <ListTitle>서비스</ListTitle>
          {service.map((each, i) => {
            return <ListItem key={i} text={each.text} icon={each.icon} />;
          })}
        </List>
      </BodyBox>
    </Container>
  );
};

export default OtherScreen;
