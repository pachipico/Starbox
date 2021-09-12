import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PayScreen from '../Views/PayScreen/PayScreen';
import {PayNavigatorParamList} from '../types';

const Stack = createNativeStackNavigator<PayNavigatorParamList>();

const PayNavigator: FC = () => {
  const {Screen, Navigator} = Stack;
  return (
    <Navigator>
      <Screen
        name="PayScreen"
        component={PayScreen}
        options={{headerShown: false}}
      />
    </Navigator>
  );
};

export default PayNavigator;
