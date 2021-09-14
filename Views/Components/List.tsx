import React from 'react';
import styled from 'styled-components/native';
import {Data} from '../../types';
import {OtherNavigatorProp} from '../OtherScreen/OtherScreen';

import ListItem from './ListItem';

const Container = styled.View<{isEnd?: boolean}>`
  border-bottom-width: ${props => (props.isEnd ? 0 : 1)};
  border-bottom-color: #9a999a;
`;

const ListTitle = styled.Text`
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
`;

interface ListProps {
  title: string;
  data: Data[];
  isEnd?: boolean;
  navigation: OtherNavigatorProp;
}

const List: React.FC<ListProps> = ({title, data, isEnd, navigation}) => {
  return (
    <Container isEnd={isEnd ?? false}>
      <ListTitle>{title}</ListTitle>
      {data.map((each, i) => {
        return (
          <ListItem
            key={i}
            text={each.text}
            keyword={each.keyword}
            icon={each.icon}
            navigation={navigation}
          />
        );
      })}
    </Container>
  );
};

export default List;
