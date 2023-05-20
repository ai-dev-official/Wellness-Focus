import {StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import AddScreen from '../screens/AddScreen';
import SettingsScreen from '../screens/SettingsScreen';
import BackScreen from '../screens/BackScreen';
import {NavigationContainer} from '@react-navigation/native';
import LandingScreen from '../screens/LandingScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <>
      <StatusBar backgroundColor="transparent" barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LandingScreen">
          <Stack.Screen
            name="LandingScreen"
            component={LandingScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="FavoriteScreen"
            component={FavoriteScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SearchScreen"
            component={SearchScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SettingsScreen"
            component={SettingsScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AddScreen"
            component={AddScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="BackScreen"
            component={BackScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
