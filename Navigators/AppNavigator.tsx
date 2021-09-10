import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
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
          tabBarIcon: ({focused}) => {
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
                iconName = 'pint';
                break;

              case 'Other':
                iconName = 'ellipsis-horizontal';
                break;

              default:
                iconName = '';
                break;
            }
            return (
              <Icon
                name={iconName}
                size={30}
                color={focused ? 'green' : 'gray'}
              />
            );
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
