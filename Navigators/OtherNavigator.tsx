import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {OtherNavigatorParamList} from '../types';
import OtherScreen from '../Views/OtherScreen/OtherScreen';
import Setting from '../Views/OtherScreen/SubScreens/Setting';

const Stack = createNativeStackNavigator<OtherNavigatorParamList>();

const OtherNavigator: React.FC = () => {
  const {Screen, Navigator} = Stack;
  return (
    <Navigator>
      <Screen
        name="OtherScreen"
        component={OtherScreen}
        options={{headerShown: false}}
      />
      <Screen
        name="Setting"
        component={Setting}
        options={{
          headerTitle: '설정',
          headerBackTitle: '',
          headerTintColor: 'black',
        }}
      />
    </Navigator>
  );
};

export default OtherNavigator;
