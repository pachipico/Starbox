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
  text: String;
  key: number;
}

const ListItem: React.FC<ListProps> = ({text}) => {
  return (
    <ItemBox>
      <Wrapper>
        <IconWrapper>
          <Icon name="star-outline" size={24} />
        </IconWrapper>
        <ItemText>{text}</ItemText>
      </Wrapper>
      <Icon name="chevron-forward" size={24} />
    </ItemBox>
  );
};

export default ListItem;
