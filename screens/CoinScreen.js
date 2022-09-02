import React, { useState } from 'react';
import {
    StyleSheet, 
    Text, 
    TouchableOpacity,
    View, 
    Image
} from 'react-native';
import Heads from '../assets/images/Quarter_Heads.png';
import Tails from '../assets/images/Texas Quarter Tails.png';



const CoinScreen = () => {
    const [coin, setCoin] =useState(Heads);

    const coinFlipped = () => {
        const random = Math.floor(Math.random()*2) + 1

        switch(random){
            case 1: setCoin(Heads)
            break;
            case 2: setCoin(Tails)
            break;
            default: setCoin(Heads)
        };
    }

    return (
        <View>
            <TouchableOpacity>
                <Text>Flip Coin</Text>
            </TouchableOpacity>
            <Image 
                style={styles.img}
                source={coin}
                onPress={coinFlipped}
            />
        </View>
    )
};


const styles = StyleSheet.create ({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    },
    img:{
        width: 120,
        height: 120
    }
})

export default CoinScreen;