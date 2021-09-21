import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';
import Header from '../../../Components/Header';
import {NavigatorProp} from '../../OrderScreen';

const Container = styled.SafeAreaView``;

const TouchableWrapper = styled.TouchableOpacity`
  z-index: 1;
  position: absolute;
  top: 45px;
  left: 15px;
`;
type ReservationProps = {
  navigation: NavigatorProp;
};
const BackButton = styled.Text``;

const CakeReservation: React.FC<ReservationProps> = ({navigation}) => {
  return (
    <Container>
      <TouchableWrapper
        onPress={() => {
          navigation.goBack();
        }}>
        <BackButton>
          <Icon name="chevron-back" size={24} color="black" />
        </BackButton>
      </TouchableWrapper>
      <Header title="홀케이크 예약" isTop={true} />
    </Container>
  );
};

export default CakeReservation;
