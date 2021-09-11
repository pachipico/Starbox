import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PayScreen from '../Views/PayScreen/PayScreen';
import {RootStackParamList} from '../types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const PayNavigator: FC = () => {
  const {Screen, Navigator} = Stack;
  return (
    <Navigator>
      <Screen name="PayScreen" component={PayScreen} />
    </Navigator>
  );
};

export default PayNavigator;
