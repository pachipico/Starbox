import styled from 'styled-components/native';

export const TabContainer = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 10px;
`;
export const HeaderBox = styled.View<{isTop?: boolean}>`
  padding-top: ${props => (props.isTop ? '50px' : '20px')}
  // padding-bottom: 15px;

  border-bottom-width: 1px;
  border-bottom-color: gray;
  align-items:  center;
  background-color: #f3f2f2;
`;

export const TabItem = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 10px 0px;
`;
export const Wrapper = styled.View<{curr: string}>`
  width: 100%;
  align-items: ${props => props.curr};
`;
export const Highliter = styled.View`
  height: 3px;
  width:31%
  background-color: green;
`;

export const Touchable = styled.TouchableOpacity``;

export const Tab = styled.Text`
  font-size: 17px;
  text-align: center;
`;

export const Body = styled.View`
  flex: 1;
`;

export const SearchBar = styled.View`
  background-color: #21201f;
  flex-direction: row;
  padding: 10px;
  justify-content: space-between;
`;

export const Picker = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: gray;
`;

export const PickerText = styled.Text`
  color: white;
  padding: 3px;
`;

export const IconWrapper = styled.Text`
  color: white;
`;
