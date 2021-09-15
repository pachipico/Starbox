import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import StickyParallaxHeader from 'react-native-sticky-parallax-header';
import Icon from 'react-native-vector-icons/FontAwesome';
import {DrinkInfo, HomeScreenNavigatorParamList} from '../../types';
import CardButton from '../Components/CardButton';
import HorizontalDrinkContainer from '../Components/HorizontalDrinkContainer';

import {
  Container,
  FloatingButton,
  FloatingButtonText,
  OptionButton,
  ScrollView,
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
        onPress={() => {
          navigation.navigate('Test');
        }}>
        <Icon name="bell-o" size={24} color="gray" />
      </OptionButton>
      <ScrollView
        onScrollEndDrag={e => {
          const last = e.nativeEvent.contentOffset.y;
          setLastOffset(last);
        }}
        onScroll={e => {
          const what = e.nativeEvent.contentOffset.y - lastOffset;
          what > 0 ? setScrollDirection('down') : setScrollDirection('up');
        }}
        // bounces={false}
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
