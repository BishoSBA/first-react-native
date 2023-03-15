import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Home';
import Login from './src/Login';
import Maps from './src/Maps';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Maps" component={Maps} />
          {/* <Stack.Screen name="Login" component={Login} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
