import React from 'react';
import styled from 'styled-components/native';
import List from '../Components/List';

const Container = styled.SafeAreaView`
  flex: 1;
`;
const HeaderText = styled.Text`
  font-size: 24px;
`;

const HomeScreen = () => {
  const test = [{text: 'Home'}, {text: 'something else'}];
  return (
    <Container>
      <HeaderText>Home</HeaderText>
      <List title={'test'} data={test} />
    </Container>
  );
};

export default HomeScreen;
