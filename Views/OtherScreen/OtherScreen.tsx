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
    {text: '리워드'},
    {text: '쿠폰'},
    {text: 'e-기프트 카드'},
    {text: "what's new"},
    {text: '알림'},
    {text: '히스토리'},
    {text: '전자영수증'},
    {text: '마이 스타벅스 리뷰'},
  ];

  return (
    <Container>
      <HeaderBox>
        <OptionButton>
          <Text>
            <Icon name="settings-outline" size={24} />
          </Text>
        </OptionButton>
        <HeaderText>Others</HeaderText>
      </HeaderBox>
      <BodyBox>
        <List>
          <ListTitle>서비스</ListTitle>
          {service.map((each, i) => {
            return <ListItem key={i} text={each.text} />;
          })}
        </List>
      </BodyBox>
    </Container>
  );
};

export default OtherScreen;
