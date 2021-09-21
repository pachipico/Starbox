import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {OrderScreenNavigatorParamList} from '../../types';
import {HeaderText} from '../Components/Header';
import TabNav from '../Components/OrderScreen/TabNav';
import {Container} from '../GiftScreen/Styles';
import {HeaderButtonView} from '../HomeScreen/styles';
import {
  Body,
  HeaderBox,
  Highliter,
  IconWrapper,
  Picker,
  PickerText,
  SearchBar,
  Tab,
  TabContainer,
  TabItem,
  Touchable,
  Wrapper,
} from './styles';
import MyMenu from './SubScreen/SecondTab/MyMenu';

type OrderScreenProps = {
  navigation: NavigatorProp;
};
export type NavigatorProp = StackNavigationProp<
  OrderScreenNavigatorParamList,
  'OrderScreen'
>;

const OrderScreen: React.FC<OrderScreenProps> = ({navigation}) => {
  const [isTop, setIsTop] = useState(true);
  const [currTab, setCurrTab] = useState('flex-start');
  return (
    <>
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
                  navigation.navigate('CakeReservation');
                }}>
                <Tab>홀케이크 예약</Tab>
              </Touchable>
            </TabItem>
            <Wrapper curr={currTab}>
              <Highliter />
            </Wrapper>
          </TabContainer>
        </HeaderBox>
        <Body>
          {currTab === 'flex-start' && <TabNav />}
          {currTab === 'center' && <MyMenu />}
        </Body>
      </Container>
      <SearchBar>
        <Picker>
          <PickerText>
            주문할 매장을 선택해 주세요
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon name="md-chevron-down-outline" size={20} color="white" />
          </PickerText>
        </Picker>
        <IconWrapper>
          <Icon name="md-cart-outline" size={30} color="white" />
        </IconWrapper>
      </SearchBar>
    </>
  );
};

export default OrderScreen;
