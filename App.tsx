import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {StyleSheet} from 'react-native';
import ScreenA from './src/ScreenA';
import ScreenB from './src/ScreenB';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: Colors.white,
    fontSize: 25,
  },
  view: {
    flex: 1,
    backgroundColor: 'black',
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      // screenOptions={({route}) => {
      //   tabBarIcon: ({focused, color, size}) => {
      //     let iconName;
      //     if(route.name === "A") {
      //       iconName = ""
      //     }
      >
        <Tab.Screen name="A" component={ScreenA} />
        <Tab.Screen name="B" component={ScreenB} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
