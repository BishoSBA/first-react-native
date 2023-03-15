import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import styles from './utils/GlobalStyle'
import MapView from 'react-native-maps';

const Maps = ({ route }: any) => {

    const { country, city, longitude, latitude } = route.params.item;

    return (
        <View style={styles.body}>
            <Text style={styles.title}>Maps</Text>
            <MapView style={customStyle.map}
                initialRegion={{
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        </View>
    )
}

const customStyle = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
    },
});


export default Maps