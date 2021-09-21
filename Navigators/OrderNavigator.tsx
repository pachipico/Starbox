import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {OrderScreenNavigatorParamList} from '../types';
import OrderScreen from '../Views/OrderScreen/OrderScreen';
import CakeReservation from '../Views/OrderScreen/SubScreen/ThirdTab/CakeReservation';

const Stack = createNativeStackNavigator<OrderScreenNavigatorParamList>();

const OrderNavigator = () => {
  const {Screen, Navigator} = Stack;
  return (
    <Navigator>
      <Screen
        name="OrderScreen"
        component={OrderScreen}
        options={{headerShown: false}}
      />
      <Screen
        name="CakeReservation"
        component={CakeReservation}
        options={{headerShown: false}}
      />
    </Navigator>
  );
};

export default OrderNavigator;
