import React from 'react';
import styled from 'styled-components/native';

export const HeaderBox = styled.View<{isTop?: boolean}>`
  padding-top: ${props => (props.isTop ? '50px' : '20px')}
  padding-bottom: 15px;
  padding-left: 15px;
  border-bottom-width: 1px;
  border-bottom-color: gray;
  align-items: ${props => (props.isTop ? 'flex-start' : 'center')};
  background-color: #f3f2f2;
`;

export const OptionButton = styled.TouchableOpacity`
  position: absolute;
  z-index: 10;
  right: 15px;
  top: 15px;
`;
export const HeaderText = styled.Text<{isTop?: boolean}>`
  font-size: ${props => (props.isTop ? '24px' : '14px')}
  font-weight: bold;
`;
type HeaderProps = {
  isTop?: boolean;
  title: string;
};

const Header: React.FC<HeaderProps> = ({isTop, title}) => {
  return (
    <HeaderBox isTop={isTop}>
      <HeaderText isTop={isTop}>{title}</HeaderText>
    </HeaderBox>
  );
};

export default Header;
