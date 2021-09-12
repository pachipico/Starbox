import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

const ItemBox = styled.View`
  height: 50px;

  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
const ItemText = styled.Text`
  font-size: 16px;
`;

const IconWrapper = styled.View`
  width: 50px;
  align-items: center;
`;

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

interface ListProps {
  text: string;
  key: number;
  icon?: string;
}

const ListItem: React.FC<ListProps> = ({text, icon}) => {
  return (
    <ItemBox>
      <Wrapper>
        {icon && (
          <IconWrapper>
            <Icon name={icon} size={26} color="gray" />
          </IconWrapper>
        )}
        <ItemText>{text}</ItemText>
      </Wrapper>
      <Icon name="chevron-forward" size={24} />
    </ItemBox>
  );
};

export default ListItem;
