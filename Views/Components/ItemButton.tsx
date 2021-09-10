import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ItemBox = styled.View`
  border: 1px solid black;
  height: 160px;
  justify-content: center;
  padding: 0px 20px;
`;

const ItemTextBox = styled.View`
  justify-content: space-evenly;
`;

const ItemHederText = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

const ItemSubText = styled.Text`
  font-size: 18px;
`;

const FlexColumn = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

interface ItemBoxProps {
  titleText: string;
  subText: string;
  iconName: string;
}

const ItemButton: React.FC<ItemBoxProps> = ({titleText, subText, iconName}) => {
  return (
    <ItemBox>
      <FlexColumn>
        <ItemTextBox>
          <ItemHederText>
            {titleText} <Icon name="chevron-right" size={24} />
          </ItemHederText>
          <ItemSubText>{subText}</ItemSubText>
        </ItemTextBox>
        <Icon name={iconName} size={80} color="green" />
      </FlexColumn>
    </ItemBox>
  );
};

export default ItemButton;