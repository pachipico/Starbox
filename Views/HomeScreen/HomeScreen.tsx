import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import {DrinkInfo, HomeScreenNavigatorParamList} from '../../types';
import CardButton from '../Components/CardButton';
import HorizontalDrinkContainer from '../Components/HorizontalDrinkContainer';

import {
  Container,
  FloatingButton,
  FloatingButtonText,
  HeaderBox,
  HeaderButtonText,
  HeaderButtonView,
  HeaderText,
  OptionButton,
  ScrollView,
  TouchableWrapper,
} from './styles';

type HomeScreenProps = {
  navigation: NavigatorProp;
};
export type NavigatorProp = StackNavigationProp<
  HomeScreenNavigatorParamList,
  'HomeScreen'
>;

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const [lastOffset, setLastOffset] = useState<number>(0);
  const [scrollDirection, setScrollDirection] = useState<string>();
  const [isTop, setIsTop] = useState<boolean>(true);

  const drinks: DrinkInfo[] = [
    {name: 'Latte'},
    {name: 'Americano'},
    {name: 'Cold Brew'},
    {name: 'Hot Chocolate'},
    {name: 'Rum'},
  ];

  return (
    <Container>
      <OptionButton
        isTop={isTop}
        onPress={() => {
          navigation.navigate('Test');
        }}>
        <Icon name="bell-o" size={20} color="gray" />
      </OptionButton>
      <HeaderBox isTop={isTop}>
        <HeaderText isTop={isTop}>신선해진 가을밤</HeaderText>
        <HeaderText isTop={isTop}>가볍게 산책할까요?</HeaderText>
        <HeaderButtonView isTop={isTop}>
          <TouchableWrapper>
            <HeaderButtonText>What's New?</HeaderButtonText>
          </TouchableWrapper>
          <TouchableWrapper>
            <HeaderButtonText>Coupon</HeaderButtonText>
          </TouchableWrapper>
        </HeaderButtonView>
      </HeaderBox>
      <ScrollView
        bounces={false}
        onScrollEndDrag={e => {
          const last = e.nativeEvent.contentOffset.y;
          setLastOffset(last);
        }}
        onScroll={e => {
          const what = e.nativeEvent.contentOffset.y - lastOffset;
          what > 0 ? setScrollDirection('down') : setScrollDirection('up');
          if (e.nativeEvent.contentOffset.y !== 0) {
            setIsTop(false);
          } else {
            setIsTop(true);
          }
        }}
        scrollEventThrottle={16}>
        <HorizontalDrinkContainer title="Drinks" drinks={drinks} />
        <CardButton />
        <HorizontalDrinkContainer title="이 시간 인기 메뉴" drinks={drinks} />
        <CardButton />
      </ScrollView>
      <FloatingButton scrollDirection={scrollDirection}>
        <Icon name="motorcycle" size={30} color="white" />
        <FloatingButtonText scrollDirection={scrollDirection}>
          &nbsp;Delivery
        </FloatingButtonText>
      </FloatingButton>
    </Container>
  );
};

export default HomeScreen;
