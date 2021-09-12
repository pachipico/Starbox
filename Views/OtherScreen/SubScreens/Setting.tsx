import React from 'react';
import styled from 'styled-components/native';
import ListItem from '../../Components/ListItem';

const Container = styled.View`
  flex: 1;
  padding: 23px 15px;
`;

const NicknameView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const NicknameText = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

const LogOutButton = styled.TouchableOpacity`
  color: green;
  border: 1px solid green;
  padding: 8px 13px;
  border-radius: 18px;
`;
const LogOutText = styled.Text`
  font-size: 15px;
  color: green;
  font-weight: bold;
`;

const List = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: gray;
`;

const ListTitle = styled.Text`
  margin-top: 50px;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
`;

const Setting = () => {
  const settings = [
    '닉네임',
    '개인컵 리워드 설정',
    'My DT Pass',
    '연결된 서비스 관리',
    '임직원 번호 설정',
  ];
  return (
    <Container>
      <NicknameView>
        <NicknameText>PACHIPI**</NicknameText>
        <LogOutButton>
          <LogOutText>로그아웃</LogOutText>
        </LogOutButton>
      </NicknameView>
      <List>
        <ListTitle>계정정보</ListTitle>
        {settings.map((each, i) => {
          return <ListItem key={i} text={each} />;
        })}
      </List>
    </Container>
  );
};

export default Setting;
