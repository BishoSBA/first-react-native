import React, {useState} from 'react';
// import type {PropsWithChildren} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(this: any): JSX.Element {
  const styles = StyleSheet.create({
    body: {
      flex: 1,
      alignItems: 'center',
      gap: 10,
      padding: 10,
    },
    text: {
      textAlign: 'center',
      color: Colors.white,
      fontSize: 20,
    },
    input: {
      textAlign: 'center',
      color: Colors.white,
      fontSize: 20,
      width: 200,
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 10,
    },
  });

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Please write your name.</Text>
      <TextInput style={styles.input} />
    </View>
  );
}

export default App;
