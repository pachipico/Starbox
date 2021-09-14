import styled from 'styled-components/native';

export const List = styled.View<{isEnd?: boolean}>`
  flex: 1;
  border-bottom-width: ${props => (props.isEnd ? 0 : 1)};
  border-bottom-color: gray;
`;

export const BodyBox = styled.View`
  flex: 1;
  margin: 0px 15px;
`;

export const ListTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin: 20px 0px;
`;

export const Touchable = styled.TouchableOpacity``;

export const OptionButton = styled.TouchableOpacity`
  position: absolute;
  z-index: 10;
  right: 15px;
  top: 45px;
`;
export const HeaderText = styled.Text<{isTop?: boolean}>`
  font-size: ${props => (props.isTop ? '24px' : '14px')}
  font-weight: bold;
`;
