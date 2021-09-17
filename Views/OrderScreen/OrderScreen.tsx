import React, {useState} from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import {HeaderText} from '../Components/Header';
import {Container} from '../GiftScreen/Styles';
import {HeaderButtonView} from '../HomeScreen/styles';
import {
  Body,
  HeaderBox,
  Highliter,
  Tab,
  TabContainer,
  TabItem,
  Touchable,
  Wrapper,
} from './styles';

const OrderScreen = () => {
  const [isTop, setIsTop] = useState(true);
  const [currTab, setCurrTab] = useState('flex-start');
  return (
    <Container
      showsVerticalScrollIndicator={false}
      onScroll={curr => {
        if (curr.nativeEvent.contentOffset.y !== 0) {
          setIsTop(false);
        } else {
          setIsTop(true);
        }
      }}
      scrollEventThrottle={16}
      stickyHeaderIndices={[0]}>
      <HeaderBox isTop={isTop}>
        <HeaderText isTop={isTop}>Order</HeaderText>
        <HeaderButtonView isTop={isTop}></HeaderButtonView>
        <TabContainer>
          <TabItem>
            <Touchable
              onPress={() => {
                setCurrTab('flex-start');
              }}>
              <Tab>전체 메뉴</Tab>
            </Touchable>
            <Touchable
              onPress={() => {
                setCurrTab('center');
              }}>
              <Tab>나만의 메뉴</Tab>
            </Touchable>
            <Touchable
              onPress={() => {
                setCurrTab('flex-end');
              }}>
              <Tab>홀케이크 예약</Tab>
            </Touchable>
          </TabItem>
          <Wrapper curr={currTab}>
            <Highliter />
          </Wrapper>
        </TabContainer>
      </HeaderBox>
      <Body></Body>
    </Container>
  );
};

export default OrderScreen;
