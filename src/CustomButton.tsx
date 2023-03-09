import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Pressable, StyleSheet, Text} from 'react-native';

interface Props {
  submited: boolean;
  setSubmited: (value: boolean) => void;
}

const CustomButton = ({submited, setSubmited}: Props) => {
  return (
    <Pressable
      onPress={() => {
        setSubmited(!submited);
      }}
      style={{
        backgroundColor: submited ? 'green' : 'red',
        padding: 10,
        borderRadius: 10,
      }}>
      <Text style={styles.text}>{submited ? 'Submit' : 'Clear'}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: Colors.white,
    fontSize: 20,
  },
});

export default CustomButton;
