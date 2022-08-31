import React, { useState } from 'react';
import { 
    AsyncStorage, 
    Dimensions, 
    KeyboardAvoidingView, 
    Platform, 
    StyleSheet, 
    Text, 
    TextInput, 
    View 
} from 'react-native-async-storage/async-storage';



const CreateNote = () => {
    const [note, setNote] = useState('');
    const navigation = useNavigation()

    const saveNote = async () => {
        const value = await AsyncStorage.getItem('NOTES')
        const n = value ? JSON.parse(value) : []
        n.push(note)
        await AsyncStorage.setItem('NOTES', JSON.stringify(n)).then(() => navigation.navigate('AllNotes'))
        setNote('')
    }

    return (
        <View style={styles.container}>
            <TextInput
                value={note}
                onChangeText={setNote}
                style={styles.note}
                multiline={true}
                autoFocus
                selectionColor='#fff'
            />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.bottom}
            >
                <Button 
                    style={styles.button}
                    appearance='filled'
                    onPress={saveNote}
                >
                    Create Note
                </Button>
            </KeyboardAvoidingView>
        </View>
    )
};

const styles = StyleSheet.create ({
    note: {
        color: '#fff',
        fontSize: 22
    },
    container: {
        flex: 1,
        backgroundColor: '#222B45',
        color: '#fff',
        padding: 30,
        paddingTop: 80,
        width: Dimensions.get('Window').width
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36
    },
    button: {
        marginBottom: 30
    }
});

export default CreateNote;