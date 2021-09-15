import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin: 0px 10px;
`;

export const OptionButton = styled.TouchableOpacity`
  position: absolute;
  z-index: 1;
  right: 15px;
  top: 45px;
`;
export const ScrollView = styled.ScrollView`
  flex: 1;
`;

export const HeaderText = styled.Text`
  font-size: 24px;
`;

export const FloatingButton = styled.View<{
  scrollDirection: string | undefined;
}>`
  width: ${props => (props.scrollDirection === 'down' ? '75px' : '160px')}
  height: 75px;
  flex-direction: row;
  border-radius: 50px;
  position: absolute;
  background-color: #4eab76;
  bottom: 20px;
  right: 20px;
  justify-content: center;
  align-items: center;
`;
export const FloatingButtonText = styled.Text<{
  scrollDirection: string | undefined;
}>`
  display: ${props => (props.scrollDirection === 'down' ? 'none' : 'flex')}
  color: white;
  font-size: 24px;
  font-weight: bold;
margin-left:7px;
`;
