import styled from 'styled-components/native';

export const List = styled.View<{isEnd?: boolean}>`
  flex: 1;
  border-bottom-width: ${props => (props.isEnd ? 0 : 1)};
  border-bottom-color: gray;
`;

export const BodyBox = styled.View`
margin: 15px
  flex: 1;
`;

export const ListTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin: 20px 0px;
`;

export const Touchable = styled.TouchableOpacity``;
