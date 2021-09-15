import React, {useCallback, useEffect, useState} from 'react';
import {Container, SafeAreaView} from '../GiftScreen/Styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../Components/Header';
import {StackNavigationProp} from '@react-navigation/stack';
import {CardData, PayNavigatorParamList} from '../../types';
import Carousel from 'react-native-snap-carousel';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Ad,
  AdView,
  BodyBox,
  FloatingButton,
  FloatingButtonContainer,
  MiniBar,
  OptionButton,
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
  const [cardData, setCardData] = useState<CardData[]>([
    {
      name: '스타벅스 e카드1',
      balance: '6,700',
      barcode: '1234-5677-8765-4365',
      isFavorite: true,
    },
    {
      name: '스타벅스 e카드2',
      balance: '16,700',
      barcode: '1124-5657-8135-5342',
      isFavorite: false,
    },
  ]);

  const storeData = async (initalData: CardData[]) => {
    try {
      const data = JSON.stringify(initalData);
      await AsyncStorage.setItem('cards', data);
    } catch (err) {
      console.log(err);
    }
  };
  const getData = async () => {
    const data = await AsyncStorage.getItem('cards');
    if (data) {
      setCardData(JSON.parse(data));
      console.log(JSON.parse(data));
    }
  };

  useEffect(() => {
    const reload = navigation.addListener('focus', () => {
      getData();
    });
    getData();
    return reload;
  }, [navigation]);

  const renderItem = ({item}: {item: CardData}) => {
    return <CardView cardData={item} />;
  };

  return (
    <SafeAreaView>
      <OptionButton
        onPress={() => {
          navigation.navigate('CardList', {
            cardData: cardData,
          });
        }}>
        <Icon name="format-list-checkbox" size={24} />
      </OptionButton>
      <Container
        showsVerticalScrollIndicator={false}
        onScroll={curr => {
          if (curr.nativeEvent.contentOffset.y !== 0) {
            setIsTop(false);
          } else {
            setIsTop(true);
          }
        }}
        stickyHeaderIndices={[0]}>
        <Header isTop={isTop} title="Pay" />

        <BodyBox>
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
