import { Image, Platform, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { 
    createDrawerNavigator, 
    DrawerContentScrollView, 
    DrawerItemList 
} from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import CreateNote from '../features/notes/CreateNote';
import AllNotes from '../features/notes/AllNotes';
import Note from '../features/notes/Note';


const Drawer = createDrawerNavigator();

const screenOptions = {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: '#5637DD' }
}

const NoteNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen 
                name='Notes'
                component={Note}
                options={({ navigation }) => ({ 
                    title: 'Notes', 
                    headerLeft: () => (
                        <Icon   
                            name='home' //sticky note
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    )
};

const AllNotesNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen 
                name='Notes'
                component={AllNotes}
                options={({ navigation }) => ({ 
                    title: 'All Notes', 
                    headerLeft: () => (
                        <Icon   
                            name='home' //sticky note list
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    )
};

const NoteScreen = () => {
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(fetchCreateNote());
    //     dispatch(fetchAllNotes());
    //     dispatch(fetchNote());
    // }, [dispatch]);

    return (
        <View 
            style={{ 
                flex: 1, 
                paddingTop: 
                    Platform.OS === 'ios' ? 0 : Constants.statusBarHeight 
            }}
        >
            <Drawer.Navigator
                initialRouteName='Notes'
                drawerContent={CustomDrawerContent}
                drawerStyle={{ backgroundColor: '#CEC8FF' }}
            >
                <Drawer.Screen  
                    name='Notes'
                    component={HomeNavigator}
                    options={{ 
                        title: 'Notes',
                        drawerIcon: ({ color }) => (
                            <Icon 
                                name='home'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen  
                    name='Directory'
                    component={DirectoryNavigator}
                    options={{ 
                        title: 'Campsite Directory', 
                        drawerIcon: ({ color }) => (
                            <Icon 
                                name='list'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen  
                    name='ReserveCampsite'
                    component={ReservationNavigator}
                    options={{ 
                        title: 'Reserve Campsite', 
                        drawerIcon: ({ color }) => (
                            <Icon 
                                name='tree'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen  
                    name='About'
                    component={AboutNavigator}
                    options={{
                        title: 'About', 
                        drawerIcon: ({ color }) => (
                            <Icon 
                                name='info-circle'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen  
                    name='Contact'
                    component={ContactNavigator}
                    options={{ 
                        title: 'Contact Us', 
                        drawerIcon: ({ color }) => (
                            <Icon 
                                name='address-card'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
            </Drawer.Navigator>
        </View>
    );
};

const styles = StyleSheet.create({
    drawerHeader: {
        backgroundColor: '#5637DD',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60
    },
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
});