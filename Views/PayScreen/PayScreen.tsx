import React, {useState} from 'react';
import {Container, OptionButton, SafeAreaView} from '../GiftScreen/Styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../Components/Header';
import {StackNavigationProp} from '@react-navigation/stack';
import {CardData, PayNavigatorParamList} from '../../types';
import Carousel from 'react-native-snap-carousel';
import {
  Ad,
  AdView,
  BodyBox,
  FloatingButton,
  FloatingButtonContainer,
  MiniBar,
} from './Styles';
import CardView from '../Components/CardView';

type PayScreenProps = {
  navigation: NavigatorProp;
};
export type NavigatorProp = StackNavigationProp<
  PayNavigatorParamList,
  'PayScreen'
>;

const PayScreen: React.FC<PayScreenProps> = ({navigation}) => {
  const [isTop, setIsTop] = useState(true);
  const cardData: CardData[] = [
    {name: '스타벅스 e카드1', balance: 6700, barcode: '1234-5677-8765-4365'},
    {name: '스타벅스 e카드2', balance: 16700, barcode: '1124-5657-8135-5342'},
  ];

  const renderItem = ({item}: {item: CardData}) => {
    return <CardView cardData={item} />;
  };

  return (
    <SafeAreaView>
      <OptionButton onPress={() => {}}>
        <Icon name="format-list-checkbox" size={24} />
      </OptionButton>
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
        <Header isTop={isTop} title="Pay" />

        <BodyBox>
          {/* <CardView cardData={cardData[0]} /> */}
          <Carousel
            layout={'default'}
            data={cardData}
            sliderWidth={345}
            itemWidth={380}
            renderItem={renderItem}
          />
          <FloatingButtonContainer>
            <FloatingButton>Coupon</FloatingButton>
            <MiniBar>|</MiniBar>
            <FloatingButton>e-Gift Item</FloatingButton>
          </FloatingButtonContainer>
        </BodyBox>
        <AdView>
          <Ad>Advertisement</Ad>
        </AdView>
      </Container>
    </SafeAreaView>
  );
};

export default PayScreen;
