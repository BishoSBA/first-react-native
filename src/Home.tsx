import React, {useEffect, useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {View, Text, Pressable, StyleSheet, Alert} from 'react-native';
import SQLite, {SQLError} from 'react-native-sqlite-storage';
import {TextInput} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {setName, setAge} from './redux/actions';

const db = SQLite.openDatabase(
  {
    name: 'MainDB',
    location: 'default',
  },
  () => {
    console.log('Database created');
  },
  (error: SQLError) => {
    console.log('Error: ', error);
  },
);

const Home = ({navigation}: any) => {
  const {name, age} = useSelector((state: any) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      await db.transaction(async tx => {
        await tx.executeSql(
          'SELECT Name, Age FROM Users',
          [],
          (tx, results) => {
            if (results.rows.length > 0) {
              let userName = results.rows.item(0).name;
              let userAge = results.rows.item(0).age;
              dispatch(setName(userName));
              dispatch(setAge(userAge));
              console.log('Name: ', name);
              console.log('Age: ', age);
            }
          },
        );
      });
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  const updateData = async () => {
    try {
      await db.transaction(async tx => {
        await tx.executeSql(
          `UPDATE Users SET Name = ${name}, Age = ${age}`,
          [],
          (tx, results) => {
            console.log('Results', results.rowsAffected);
            if (results.rowsAffected > 0) {
              Alert.alert('Success', 'User updated successfully');
            } else {
              Alert.alert('Error', 'Please try again');
            }
          },
        );
      });
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  const removeData = async () => {
    try {
      await db.transaction(async tx => {
        await tx.executeSql('DELETE FROM Users', [], (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert('Success', 'User deleted successfully');
          } else {
            Alert.alert('Error', 'Please try again');
          }
        });
        navigation.navigate('Login');
      });
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  return (
    <View style={styles.body}>
      <Text style={styles.title}>Home Screen</Text>
      <View style={styles.view}>
        <View>
          <Text style={styles.title}>Hi {name}</Text>
          <Text style={styles.title}>Didn't know you are {age} years old!</Text>
        </View>
        <TextInput
          label="Name"
          placeholder="Enter your name"
          onChangeText={text => dispatch(setName(text))}
          style={styles.input}
        />
        <TextInput
          label="Age"
          placeholder="Enter your age"
          onChangeText={text => dispatch(setAge(text))}
          style={styles.input}
        />
        <Pressable onPress={updateData} style={[styles.button, styles.update]}>
          <Text style={styles.text}>Update</Text>
        </Pressable>
        <Pressable onPress={removeData} style={[styles.button, styles.delete]}>
          <Text style={styles.text}>Delete</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  view: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'RubikIso-Regular',
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    color: Colors.white,
    fontSize: 25,
  },
  input: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
  },
  button: {
    minWidth: 150,
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  update: {
    backgroundColor: 'blue',
  },
  delete: {
    backgroundColor: 'red',
  },
});

export default Home;
