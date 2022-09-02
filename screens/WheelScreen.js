import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';



const WheelScreen = () => {
    return (
        <View style={styles.wheel}>

        </View>
    )
};


const styles = StyleSheet.create ({
    wheel:{
        width: 200,
        height: 200,
        borderRadius: 200/2,
        backgroundColor: '#D9F2D2',
        borderColor:'#A9EAA2'
    }
})

export default WheelScreen;