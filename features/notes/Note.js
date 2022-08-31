import { AsyncStorage } from "react-native-async-storage/async-storage";
import { View, Text, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import AllNotes from "./AllNotes";


const Note = () => {
    const [notes, setNotes] = useState([]);
    const {singleNote} = route.params
    const navigation = useNavigation()

    useFocusEffect(
        React.useCallback(() => {
            getNotes()
        }, [])
    )

    const getNotes = () => {
        AsyncStorage.getItem('NOTES').then((notes) => {
            setNotes(JSON.parse(notes))
        })
    }

    const deleteNote = async () => {
        const newNotes = await notes.filter((note) => note !== singleNote)
        await AsyncStorage.setItem('NOTES', JSON.stringify(newNotes))
            .then(() => navigation.navigate('AllNotes'))
    }

    return (
        <View style={styles.aaa}>
            <Text 
                style={styles.title}
                category='h1'
            >
                Notes
            </Text>
            <Text 
                style={styles.note}
            >
                {singleNote}
            </Text>
            <View style={styles.bottom}>
                <Button
                    onPress={deleteNote}
                    style={styles.button}
                >
                    Delete
                </Button>
            </View>
        </View>
    )
};


const styles = StyleSheet.create ({
    aaa: {
        backgroundColor: '#222B45',
        flex: 1
    },
    note: {
        fontSize: 22,
        margin: 20
    },
    title: {
        textAlign: 'center',
        marginTop: 50
    },
    bottom: {

    },
    button: {

    }
});

export default Note;