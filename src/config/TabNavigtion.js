import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Headline from '../screens/Headline';
import Popular from '../screens/Popular';
import Sports from '../screens/Sports';
import Home from '../screens/Home';
const Tab = createMaterialTopTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#fff',
        style: {
          backgroundColor: '#192a56',
        },
        indicatorStyle: {
          backgroundColor: '#0fb9b1',
        },
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Stock" component={Headline} />
      <Tab.Screen name="Showbiz" component={Popular} />
      <Tab.Screen name="Sports" component={Sports} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
