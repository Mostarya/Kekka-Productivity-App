import { useState } from "react";
import { AsyncStorage, TextInput } from "react-native-async-storage/async-storage";
import CreateNote from "./CreateNote";


const AllNotes = () => {
    const [notes, setNotes] = useState([]);
    const navigation = useNavigation();

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

    const renderItem = ({ item, index }) => {
        <ListItem
            title={
                <Text category='h5'>
                    {item}
                </Text>
            }
            onPress={() => navigation.navigate('Note', {
                singleNote: item
            })}
        />
    }

    return (
        <View style={styles.view}>
            <Text style={styles.title}>
                Notes
            </Text>
            <List 
                style={styles.container}
                data={notes.reverse()}
                renderItem={renderItem}
            />
            
        </View>
    )
};

const styles = StyleSheet.create ({
    view: {
        backgroundColor: '#222B45',
        flex: 1
    },
    item: {
        marginVertical: 4
    },
    container: {
        fontSize: 20
    },
    title: {
        textAlign: 'center',
        marginTop: 50
    },
    notes: {
        fontSize: 24
    }
});

export default AllNotes;