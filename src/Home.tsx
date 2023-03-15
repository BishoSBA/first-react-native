/* eslint eqeqeq: 0, curly: 2 */
import React, { useEffect } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { View, Text, Pressable, StyleSheet, Alert, FlatList } from 'react-native';
import SQLite, { SQLError } from 'react-native-sqlite-storage';
import { TextInput } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setAge, getCities } from './redux/actions';
import PushNotification from 'react-native-push-notification';
import styles from "./utils/GlobalStyle.js";

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



const Home = ({ navigation }: any) => {
  const { name, age, cities } = useSelector((state: any) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
    dispatch(getCities());
  }, []);

  const getData = async () => {
    try {
      await db.transaction(async tx => {
        tx.executeSql('SELECT Name, Age FROM Users', [], (tx, results) => {
          if (results.rows.length > 0) {
            let userName = results.rows.item(0).name;
            let userAge = results.rows.item(0).age;
            dispatch(setName(userName));
            dispatch(setAge(userAge));
            console.log('Name: ', name);
            console.log('Age: ', age);
          }
        });
      });
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  // const updateData = async () => {
  //   try {
  //     await db.transaction(async tx => {
  //       tx.executeSql(
  //         `UPDATE Users SET Name = ${name}, Age = ${age}`,
  //         [],
  //         (tx, results) => {
  //           console.log('Results', results.rowsAffected);
  //           if (results.rowsAffected > 0) {
  //             Alert.alert('Success', 'User updated successfully');
  //           } else {
  //             Alert.alert('Error', 'Please try again');
  //           }
  //         },
  //       );
  //     });
  //   } catch (error) {
  //     console.log('Error: ', error);
  //   }
  // };

  // const removeData = async () => {
  //   try {
  //     await db.transaction(async tx => {
  //       tx.executeSql('DELETE FROM Users', [], (tx, results) => {
  //         console.log('Results', results.rowsAffected);
  //         if (results.rowsAffected > 0) {
  //           Alert.alert('Success', 'User deleted successfully');
  //         } else {
  //           Alert.alert('Error', 'Please try again');
  //         }
  //       });
  //       navigation.navigate('Login');
  //     });
  //   } catch (error) {
  //     console.log('Error: ', error);
  //   }
  // };

  // const handleNotification = (item: any) => {
  //   PushNotification.localNotification({
  //     channelId: 'test-channel',
  //     title: 'You Clicked on ' + item.country + '',
  //     message: 'Its capital is ' + item.city + '',
  //   });
  //   console.log(item)
  // };

  interface MapItem {
    country: string;
    city: string;
    latitude: number;
    longitude: number;
  }

  const onPressHandler = (item: MapItem) => {
    navigation.navigate('Maps', { item });
  };

  return (
    <View style={styles.body}>
      <Text style={styles.title}>Home Screen</Text>
      <FlatList
        data={cities}
        renderItem={({ item }) => (
          <Pressable
            style={styles.listItem}
            onPress={() => onPressHandler(item)}
          >
            <Text style={styles.text}>{item.country}</Text>
            <Text style={styles.text}>{item.city}</Text>
            <Text style={styles.text}>{item.latitude}</Text>
            <Text style={styles.text}>{item.longitude}</Text>
            <View />
          </Pressable>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};



export default Home;
