import React, {useState} from 'react';
// import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const [counter, setCounter] = useState(0);
  const isDarkMode = useColorScheme() === 'dark';

  const buttonHandler = () => {
    setCounter(counter + 1);
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    height: 800,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.container}>
        <Text style={styles.text}>{counter * 5}</Text>
        <Button color={'red'} title="Update Count" onPress={buttonHandler} />
        <Text style={styles.text}>You clicked {counter} times</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darker,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
    marginTop: -100,
  },
  text: {
    color: Colors.white,
  },
});

export default App;
