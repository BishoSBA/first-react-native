import React from 'react';
// import type {PropsWithChildren} from 'react';

import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  Touchable,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

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
      <TouchableWithoutFeedback
        onPress={() => {
          ToastAndroid.showWithGravity(
            'Hello World!',
            ToastAndroid.SHORT,
            ToastAndroid.TOP,
          );
        }}
        style={{
          backgroundColor: 'blue',
          padding: 10,
          borderRadius: 10,
        }}>
        <Text style={styles.text}>Press me</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}

export default App;
