import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin: 15px;
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
  border: 1px solid yellow;
  position: absolute;
  right: 15px;
  top: 15px;
`;
