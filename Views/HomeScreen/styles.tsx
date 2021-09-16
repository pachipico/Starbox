import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const HeaderBox = styled.View<{isTop?: boolean}>`
  padding-top: ${props => (props.isTop ? '50px' : '20px')}
  padding-bottom: 15px;
  padding-left: 15px;
  border-bottom-width: 1px;
  border-bottom-color: gray;
  align-items: ${props => (props.isTop ? 'flex-start' : 'center')};
  background-color: #f3f2f2;
`;

export const HeaderText = styled.Text<{isTop?: boolean}>`
  font-size: 24px;
  display: ${props => (props.isTop ? 'flex' : 'none')}
  font-weight: bold;
  margin-bottom: 20px;
`;

export const HeaderButtonView = styled.View<{isTop?: boolean}>`
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
`;

export const HeaderButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin-right: 20px; ;
`;
export const TouchableWrapper = styled.TouchableOpacity``;

export const OptionButton = styled.TouchableOpacity<{isTop?: boolean}>`
  position: absolute;
  z-index: 1;
  right: 15px;
  top: ${props => (props.isTop ? '190px' : '60px')};
`;
export const ScrollView = styled.ScrollView`
  flex: 1;
  margin: 0px 10px;
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
  display: ${props => (props.scrollDirection === 'up' ? 'flex' : 'none')};
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-left: 7px;
`;
