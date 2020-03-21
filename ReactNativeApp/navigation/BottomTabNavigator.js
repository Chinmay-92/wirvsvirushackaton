import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import { Image, Platform, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}
        
    tabBarOptions={{
        activeBackgroundColor: '#00FFFF',
        inactiveBackgroundColor: '#00FFFF',
        activeTintColor:'Black',
        inactiveTintColor:'Blue',
        labelStyle: {
          fontSize: 18,
             }}}>


      <BottomTab.Screen
        
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
          }}
      />
      <BottomTab.Screen
        name="FAQs"
        component={LinksScreen}
        options={{
          title: 'FAQs',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Links':
      return 'FAQs';
  }
}

const styles = StyleSheet.create({
  text:{
    fontSize: 50,
  }
})