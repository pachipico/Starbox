import React, {useState} from 'react';
import styled from 'styled-components/native';
import Drinks from '../../OrderScreen/SubScreen/FirstTab/Drinks';
import Food from '../../OrderScreen/SubScreen/FirstTab/Food';
import Merchandize from '../../OrderScreen/SubScreen/FirstTab/Merchandize';
const Container = styled.View`
  flex-direction: row;
  flex-wrap: nowrap;
`;

const TabText1 = styled.Text<{fontWeight: string}>`
  font-size: 16px;
  font-weight: ${props => props.fontWeight};
`;

const TabText2 = styled.Text<{fontWeight: string}>`
  font-size: 16px;
  font-weight: ${props => props.fontWeight};
`;

const TabText3 = styled.Text<{fontWeight: string}>`
  font-size: 16px;
  font-weight: ${props => props.fontWeight};
`;
const TabMenu = styled.TouchableOpacity`
  padding: 10px;
`;
const Tab = () => {
  const [first, setFirst] = useState<string>('bold');
  const [second, setSecond] = useState<string>('normal');
  const [third, setThird] = useState<string>('normal');
  return (
    <>
      <Container>
        <TabMenu
          onPress={() => {
            setFirst('bold');
            setSecond('normal');
            setThird('normal');
          }}>
          <TabText1 fontWeight={first}>음료</TabText1>
        </TabMenu>
        <TabMenu
          onPress={() => {
            setFirst('normal');
            setSecond('bold');
            setThird('normal');
          }}>
          <TabText2 fontWeight={second}>푸드</TabText2>
        </TabMenu>
        <TabMenu
          onPress={() => {
            setFirst('normal');
            setSecond('normal');
            setThird('bold');
          }}>
          <TabText3 fontWeight={third}>상품</TabText3>
        </TabMenu>
      </Container>
      {first === 'bold' && <Drinks />}
      {second === 'bold' && <Food />}
      {third === 'bold' && <Merchandize />}
    </>
  );
};

export default Tab;
