import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {OtherNavigatorProp} from '../OtherScreen/OtherScreen';

export const HeaderBox = styled.View<{isTop?: boolean}>`
  padding-top: ${props => (props.isTop ? '40px' : '20px')}
  padding-bottom: 20px;

  align-items: ${props => (props.isTop ? 'flex-start' : 'center')};
  background-color: #f3f2f2;
`;

export const OptionButton = styled.TouchableOpacity`
  position: absolute;
  right: 15px;
  top: 15px;
`;
export const HeaderText = styled.Text<{isTop?: boolean}>`
  font-size: ${props => (props.isTop ? '24px' : '14px')}
  font-weight: bold;
`;
type HeaderProps = {
  navigation: OtherNavigatorProp;
  isTop?: boolean;
};

const Header: React.FC<HeaderProps> = ({navigation, isTop}) => {
  return (
    <HeaderBox isTop={isTop}>
      <OptionButton onPress={() => navigation.navigate('Setting')}>
        <Icon name="settings-outline" size={24} />
      </OptionButton>
      <HeaderText isTop={isTop}>Other</HeaderText>
    </HeaderBox>
  );
};

export default Header;
