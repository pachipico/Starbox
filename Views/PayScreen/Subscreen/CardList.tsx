import React, {useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import {PayNavigatorParamList} from '../../../types';
import {Container, SafeAreaView} from '../../GiftScreen/Styles';
import Header from '../../Components/Header';

import {Ad, AdView, OptionButton} from '../Styles';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type CardListRouteProp = RouteProp<PayNavigatorParamList, 'CardList'>;

type CardListProps = {
  route: CardListRouteProp;
};

const CardListContainer = styled.View`
  flex-direction: row;
  flex: 1;
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #b5b5b5;
  justify-content: space-between;
  align-items: center;
`;

const CardImage = styled.Image<{index: number}>`
  height: 20px;
  width: ${props => (props.index === 0 ? '120px' : '64px')}
  aspect-ratio: 1.5;
  border-radius: 2px;
`;

const CardTextContainer = styled.View`
  margin-left: 16px;
  margin-top: 3px;
`;

const CardName = styled.Text``;

const CardBalance = styled.Text<{index: number}>`
  font-weight: bold;
  font-size: ${props => (props.index === 0 ? '26px' : '16px')};
`;

const Wrapper = styled.View`
  flex-direction: row;
`;

const FavoriteButton = styled.TouchableOpacity``;

const CardList: React.FC<CardListProps> = ({route}) => {
  const [isTop, setIsTop] = useState(true);
  console.log(route.params);
  return (
    <SafeAreaView>
      <OptionButton onPress={() => {}}>
        <Icon name="plus-circle-outline" size={24} color="#b5b5b5" />
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
        <Header isTop={isTop} title={`카드(${route.params.length})`} />
        <AdView>
          <Ad>Advertisement</Ad>
        </AdView>
        {route.params.map((each, i) => {
          return (
            <CardListContainer>
              <Wrapper>
                <CardImage
                  index={i}
                  source={require('../../../Resources/starbucks_card.jpeg')}
                />
                <CardTextContainer>
                  <CardName>{each.name}</CardName>
                  <CardBalance index={i}>{`${each.balance}원`}</CardBalance>
                </CardTextContainer>
              </Wrapper>
              <FavoriteButton>
                <Icon name="star-circle-outline" size={24} color={'#b5b5b5'} />
              </FavoriteButton>
            </CardListContainer>
          );
        })}
      </Container>
    </SafeAreaView>
  );
};

export default CardList;
