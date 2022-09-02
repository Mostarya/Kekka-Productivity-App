import React, { useState} from 'react';
import {StyleSheet, View} from 'react-native';
import { CalendarList, Agenda} from 'react-native-calendars';



const CalendarScreen = () => {
    const [agenda, setAgenda] = useState([]);
    
    return (
        <View>
            <View>
                <CalendarList
                    style={styles.calendar}
                    horizontal={true}
                    pagingEnabled={true}
                    pastScrollRange={4}
                    futureScrollRange={12}
                    scrollEnabled={true}
                />
            </View>
            <View>
                <Agenda 
                    items={{agenda}}
                />
            </View>
        </View>
    );
};


const styles = StyleSheet.create ({
    calendar:{
        backgroundColor:'#D9F2D2'
    }
})

export default CalendarScreen;