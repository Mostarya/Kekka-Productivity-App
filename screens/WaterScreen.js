import React, { useState } from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import { FAB } from 'react-native-elements';




const WaterScreen = () => {
    const [counter, setCounter] = useState(0);
    
    const increment = () => {
        setCounter(counter + 1);
    };

    const decrement = () => {
        if ( counter > 0 ) {
            setCounter(counter - 1);
        } else {
            Alert.alert('You cannot have less than 0 waters a day.');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.droplet}>
                <Text>{counter}</Text>
            </View>
            <FAB 
                style={styles.incr}
                small
                icon='plus'
                onPress={increment}
            />
            <FAB 
                style={styles.decr}
                small
                icon='minus'
                onPress={decrement}
            />
        </View>
    )

};


const styles = StyleSheet.create ({
    container:{
        position:'absolute',
        backgroundColor:'#fff',
        alignItems: 'center',
        justifyContent:'center'
    },
    droplet:{
        height: 0,
        width: 0,
        borderRadius: 5,
        backgroundColor: 'blue',
        borderStyle: 'solid',
        borderLeftWidth: 60,
        borderRightWidth: 60,
        borderBottomWidth: 120,
        borderLeftColor: 'black',
        borderRightColor: 'black',
        borderBottomColor: 'blue',
    },
    incr:{
        position:'absolute',
        marginTop: 100,
        marginRight:50
    },
    decr:{
        position:'absolute',
        marginTop: 100,
        marginLeft: 50
    }
})

export default WaterScreen;