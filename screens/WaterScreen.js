import React, { useState } from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import { FAB } from 'react-native-elements';
import { increment, decrement } from '../features/water tracker/WaterSlice';
import {useSelector, useDispatch} from 'react-redux';


const WaterScreen = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    

    return (
        <View style={styles.container}>
            <View style={styles.droplet}>
                <Text>{count}</Text>
            </View>
            <FAB 
                style={styles.incr}
                small
                icon='plus'
                onPress={() => dispatch(increment())}
            />
            <FAB 
                style={styles.decr}
                small
                icon='minus'
                onPress={() => dispatch(decrement())}
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