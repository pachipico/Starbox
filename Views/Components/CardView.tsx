import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CardData} from '../../types';
const CardContainer = styled.View`
  width: 90%;
  border: 1px solid black;
  align-items: center;
  padding: 40px;
  border-top-width: 0px;
`;

const Card = styled.Image`
  aspect-ratio: 1.6;
  width: 300px;
  height: 200px
  border-radius: 14px; ;
`;

const CardName = styled.Text`
  font-size: 14px;
  margin-top: 20px;
`;
const CardBalance = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;
const Barcode = styled.Text`
  font-weight: bold;
  font-size: 30px;
`;

const BarcodeCode = styled.Text`
  font-size: 12px;
`;

const CreditContainer = styled.View`
  flex-direction: row;
`;

const CreditEdit = styled.View`
  align-items: center;
  margin: 30px 35px;
`;

const RemainTime = styled.Text`
  font-size: 12px;
  margin-top: 20px;
`;

const Green = styled.Text`
  color: green;
`;

const CreditText = styled.Text`
  color: #b5b5b5;
  margin-top: 10px;
`;

interface CardProps {
  cardData: CardData;
}

const CardView: React.FC<CardProps> = ({cardData}) => {
  return (
    <CardContainer>
      <Card source={require('../../Resources/starbucks_card.jpeg')} />
      <CardName>
        {cardData.name}{' '}
        <Icon
          name="star-circle-outline"
          size={24}
          color={cardData.isFavorite ? 'yellow' : '#b5b5b5'}
        />
      </CardName>
      <CardBalance>{cardData.balance}원</CardBalance>
      <Barcode>BARCODE</Barcode>
      <BarcodeCode>{cardData.barcode}</BarcodeCode>
      <RemainTime>
        바코드 유효 시간 <Green>08:31</Green>
      </RemainTime>
      <CreditContainer>
        <CreditEdit>
          <Icon name="currency-krw" size={24} color="#b5b5b5" />
          <CreditText>자동충전</CreditText>
        </CreditEdit>
        <CreditEdit>
          <Icon name="currency-krw" size={24} color="#b5b5b5" />

          <CreditText>일반충전</CreditText>
        </CreditEdit>
      </CreditContainer>
    </CardContainer>
  );
};

export default CardView;
