import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ScreenA = ({navigation}: any) => {
  const onPressHandler = () => {
    navigation.replace('B');
  };

  return (
    <View style={styles.view}>
      <Text>Screen A</Text>
      <Pressable
        onPress={onPressHandler}
        style={{
          backgroundColor: 'green',
          padding: 10,
          borderRadius: 10,
        }}>
        <Text style={styles.text}>Go To Screen B</Text>
      </Pressable>
    </View>
  );
};

const ScreenB = ({navigation}: any) => {
  const onPressHandler = () => {
    navigation.navigate('A');
  };

  return (
    <View style={styles.view}>
      <Text>Screen B</Text>
      <Pressable
        onPress={onPressHandler}
        style={{
          backgroundColor: 'blue',
          padding: 10,
          borderRadius: 10,
        }}>
        <Text style={styles.text}>Go To Screen A</Text>
      </Pressable>
    </View>
  );
};

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
      <Stack.Navigator>
        <Stack.Screen name="A" component={ScreenA} />
        <Stack.Screen name="B" component={ScreenB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
