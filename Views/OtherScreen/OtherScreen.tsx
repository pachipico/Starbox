import React, {useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';

import {Data, OtherNavigatorParamList} from '../../types';
import List from '../Components/List';

import {Container} from '../GiftScreen/Styles';

import {BodyBox} from './Styles';
import Header from '../Components/Header';

type OtherScreenProps = {
  navigation: OtherNavigatorProp;
};

export type OtherNavigatorProp = StackNavigationProp<
  OtherNavigatorParamList,
  'OtherScreen'
>;

const OtherScreen: React.FC<OtherScreenProps> = ({navigation}) => {
  const [isTop, setIsTop] = useState(true);

  const service: Data[] = [
    {text: '리워드', icon: 'star-outline', keyword: 'reward'},
    {text: '쿠폰', icon: 'gift-outline', keyword: 'coupon'},
    {text: 'e-기프트 카드', icon: 'ios-gift-outline', keyword: 'giftCard'},
    {text: "what's new", icon: 'mail-outline', keyword: 'new'},
    {text: '알림', icon: 'notifications-outline', keyword: 'notifications'},
    {text: '히스토리', icon: 'stopwatch-outline', keyword: 'history'},
    {text: '전자영수증', icon: 'receipt-outline', keyword: 'receipt'},
    {text: '마이 스타벅스 리뷰', icon: 'pencil', keyword: 'review'},
  ];
  const support = [
    {text: '스토어 케어', keyword: 'storeCare'},
    {text: '고객의 소리', keyword: 'customer'},
    {text: '매장 정보', keyword: 'info'},
  ];
  const policy = [
    {text: '이용약관', keyword: 'policy'},
    {text: '개인정보 처리 방침', keyword: 'persinalInfo'},
  ];

  return (
    <Container
      showsVerticalScrollIndicator={false}
      onScroll={curr => {
        if (curr.nativeEvent.contentOffset.y !== 0) {
          setIsTop(false);
        } else {
          setIsTop(true);
          console.log('top');
        }
      }}
      stickyHeaderIndices={[0]}>
      <Header navigation={navigation} isTop={isTop} />
      <BodyBox>
        <List title="서비스" data={service} navigation={navigation} />
        <List title="고객지원" data={support} navigation={navigation} />
        <List
          title="이용 정책"
          data={policy}
          isEnd={true}
          navigation={navigation}
        />
      </BodyBox>
    </Container>
  );
};

export default OtherScreen;
