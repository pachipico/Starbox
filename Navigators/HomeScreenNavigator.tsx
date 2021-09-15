import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {HomeScreenNavigatorParamList} from '../types';
import HomeScreen from '../Views/HomeScreen/HomeScreen';
import Test from '../Views/HomeScreen/SubScreen/Test';

const Stack = createStackNavigator<HomeScreenNavigatorParamList>();

const HomeScreenNavigator: React.FC = () => {
  const {Navigator, Screen} = Stack;
  return (
    <Navigator>
      <Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Screen name="Test" component={Test} options={{headerShown: false}} />
    </Navigator>
  );
};

export default HomeScreenNavigator;
