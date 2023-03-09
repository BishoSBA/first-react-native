import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>My First React Native App</Text>
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
    backgroundColor: 'black',
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;
