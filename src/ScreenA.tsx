import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {View, Text, Pressable, StyleSheet} from 'react-native';

const ScreenA = ({navigation}: any) => {
  const onPressHandler = () => {
    navigation.navigate('B');
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

export default ScreenA;
