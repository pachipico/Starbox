import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  margin: 15px;
  margin-top: 35px;
`;

export const BodyBox = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const HeaderText = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const HeaderBox = styled.View`
  padding-top: 40px;
  padding-bottom: 20px;
`;

export const OptionButton = styled.TouchableOpacity`
  position: absolute;
  right: 15px;
  top: 15px;
`;
