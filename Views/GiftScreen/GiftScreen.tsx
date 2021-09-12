import React from 'react';
import ItemButton from '../Components/ItemButton';
import {BodyBox, Container, HeaderBox, HeaderText, ScrollView} from './Styles';

const GiftScreen = () => {
  return (
    <Container>
      <HeaderBox>
        <HeaderText>Gift</HeaderText>
      </HeaderBox>
      <BodyBox>
        <ItemButton
          titleText={'배송하기'}
          subText={'스타벅스의 MD를\n이제 집에서 받아보세요.'}
          iconName={'truck-check-outline'}
        />
        <ItemButton
          titleText={'e-Gift Item'}
          subText={'고마운 마음,\n모바일상품권으로 선물하세요'}
          iconName={'gift-outline'}
        />
        <ItemButton
          titleText={'e-Gift Card'}
          subText={'소중한 사람에게 쉽고ㅂ 빠르게\n마음을 전해보세요'}
          iconName={'wallet-giftcard'}
        />
      </BodyBox>
    </Container>
  );
};

export default GiftScreen;
