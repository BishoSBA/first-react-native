import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {StyleSheet} from 'react-native';
import ScreenA from './src/ScreenA';
import ScreenB from './src/ScreenB';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

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
      <Drawer.Navigator>
        <Drawer.Screen name="A" component={ScreenA} />
        <Drawer.Screen name="B" component={ScreenB} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
