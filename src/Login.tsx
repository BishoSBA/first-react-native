import React, {useEffect, useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {View, Text, Pressable, StyleSheet, Alert} from 'react-native';
import SQLite, {SQLError} from 'react-native-sqlite-storage';
import {TextInput} from 'react-native-gesture-handler';
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

const Login = ({navigation}: any) => {
  const {name, age} = useSelector((state: any) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    createTable();
    getData();
  }, []);

  const createTable = () => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER)',
        [],
      );
    });
  };

  const getData = async () => {
    try {
      await db.transaction(async tx => {
        await tx.executeSql(
          'SELECT Name, Age FROM Users',
          [],
          (tx, results) => {
            console.log('Results', results);
            if (results.rows.length > 0) {
              navigation.navigate('Home');
              setData();
            }
          },
        );
      });
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  const setData = async () => {
    if (name.length === 0 || age === 0) {
      Alert.alert('Please enter name and age');
      return;
    }
    try {
      dispatch(setName(name));
      dispatch(setAge(age));
      await db.transaction(async tx => {
        await tx.executeSql(
          `INSERT INTO Users (Name, Age) VALUES (${name}, ${age})`,
        );
      });
      console.log(`INSERT INTO Users (Name, Age) VALUES (${name}, ${age})`);
      navigation.navigate('Home');
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  return (
    <View style={styles.body}>
      <Text style={styles.title}>Login Page</Text>
      <Text style={styles.title}>Name: {name}</Text>
      <Text style={styles.title}>Age: {age}</Text>
      <View style={styles.view}>
        <TextInput
          placeholder="Name"
          style={styles.input}
          onChangeText={text => dispatch(setName(text))}
        />
        <TextInput
          placeholder="Age"
          style={styles.input}
          onChangeText={text => dispatch(setAge(parseInt(text)))}
        />
        <Pressable onPress={setData} style={styles.button}>
          <Text style={styles.text}>Login</Text>
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
    gap: 20,
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
    color: 'black',
    borderRadius: 10,
  },
  button: {
    minWidth: 150,
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  update: {
    backgroundColor: 'blue',
  },
  delete: {
    backgroundColor: 'red',
  },
});

export default Login;
