import React from 'react';
import styled from 'styled-components/native';
import ItemButton from '../Components/ItemButton';

const Container = styled.SafeAreaView`
  flex: 1;
  margin: 10px;
`;
const HeaderText = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

const HeaderBox = styled.View`
  padding-top: 20px;
  margin-bottom: 10px;
`;

const BodyBox = styled.View`
  flex: 1;
  margin: 10px 0;
  justify-content: space-between;
`;

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
