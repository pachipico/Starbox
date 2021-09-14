import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PayScreen from '../Views/PayScreen/PayScreen';
import {PayNavigatorParamList} from '../types';
import CardList from '../Views/PayScreen/Subscreen/CardList';

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
      <Screen
        name="CardList"
        component={CardList}
        options={{headerShown: false}}
      />
    </Navigator>
  );
};

export default PayNavigator;
