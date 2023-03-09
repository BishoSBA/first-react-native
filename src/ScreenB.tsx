import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {View, Text, Pressable, StyleSheet} from 'react-native';

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

export default ScreenB;
