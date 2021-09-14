import React from 'react';
import StickyParallaxHeader from 'react-native-sticky-parallax-header';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
`;
const ScrollView = styled.ScrollView``;
const HeaderText = styled.Text`
  font-size: 24px;
`;

const HomeScreen = () => {
  return (
    <Container>
      <ScrollView>
        <HeaderText>Home</HeaderText>
      </ScrollView>
    </Container>
  );
};

export default HomeScreen;
