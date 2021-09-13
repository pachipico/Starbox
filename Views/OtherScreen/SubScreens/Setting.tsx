import React from 'react';
import styled from 'styled-components/native';
import ListItem from '../../Components/ListItem';
import {OtherNavigatorProp} from '../OtherScreen';
import {List, Touchable} from '../Styles';

const Container = styled.ScrollView`
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

const ListTitle = styled.Text`
  margin-top: 50px;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
`;

interface SettingProps {
  navigation: OtherNavigatorProp;
}

const Setting: React.FC<SettingProps> = ({navigation}) => {
  const settings = [
    {text: '닉네임', keyword: 'nickName'},
    {text: '개인컵 리워드 설정', keyword: 'personalReward'},
    {text: 'My DT Pass', keyword: 'dt'},
    {text: '연결된 서비스 관리', keyword: 'services'},
    {text: '임직원 번호 설정', keyword: 'emploee'},
  ];
  const authority = [
    {text: '푸시 알림', keyword: 'pushNotification'},
    {text: '위치 정보 서비스 이용약관 동의', keyword: 'gpsService'},
  ];

  const etc = [
    {text: '암호 설정', keyword: 'changePassword'},
    {text: '버전 정보', keyword: 'version'},
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
          return (
            <Touchable key={i}>
              <ListItem
                text={each.text}
                keyword={each.keyword}
                navigation={navigation}
              />
            </Touchable>
          );
        })}
      </List>
      <List>
        <ListTitle>권한 설정</ListTitle>
        {authority.map((each, i) => {
          return (
            <Touchable key={i}>
              <ListItem
                text={each.text}
                keyword={each.keyword}
                navigation={navigation}
              />
            </Touchable>
          );
        })}
      </List>
      <List isEnd={true}>
        <ListTitle>기타 관리</ListTitle>
        {etc.map((each, i) => {
          return (
            <ListItem
              key={i}
              text={each.text}
              keyword={each.keyword}
              navigation={navigation}
            />
          );
        })}
      </List>
    </Container>
  );
};

export default Setting;
