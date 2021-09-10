import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import GiftScreen from '../Views/GiftScreen/GiftScreen';
import HomeScreen from '../Views/HomeScreen/HomeScreen';
import OrderScreen from '../Views/OrderScreen/OrderScreen';
import PayScreen from '../Views/PayScreen/PayScreen';

const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            switch (route.name) {
              case 'Home':
                iconName = 'home';
                break;

              case 'Pay':
                iconName = 'card';
                break;

              case 'Gift':
                iconName = 'gift';
                break;

              case 'Order':
                iconName = 'order';
                break;

              case 'Other':
                iconName = 'other';
                break;

              default:
                iconName = '';
                break;
            }
            console.log(iconName);
            return <Text>{iconName}</Text>;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Pay"
          component={PayScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Gift"
          component={GiftScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Order"
          component={OrderScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Other"
          component={OrderScreen}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
