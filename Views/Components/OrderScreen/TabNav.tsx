import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: row;
`;

const TabText = styled.Text`
  font-size: 16px;
`;

const TabMenu = styled.TouchableOpacity`
  padding: 10px;
  > ${TabText} {
    color: red;
  }
`;
const Tab = () => {
  return (
    <Container>
      <TabMenu>
        <TabText>음료 </TabText>
      </TabMenu>
      <TabMenu>
        <TabText>푸드</TabText>
      </TabMenu>
      <TabMenu>
        <TabText>상품</TabText>
      </TabMenu>
    </Container>
  );
};

export default Tab;
