import { Image, Platform, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { 
    createDrawerNavigator, 
    DrawerContentScrollView, 
    DrawerItemList 
} from '@react-navigation/drawer';
import DashboardScreen from './DashboardScreen';
import CalendarScreen from './CalendarScreen';
import CoinScreen from './CoinScreen';
import NoteScreen from './NoteScreen';
import ReminderScreen from './ReminderScreen';
import TimeScreen from './TimeScreen';
import TodoScreen from './TodoScreen';
import WaterScreen from './WaterScreen';
import WheelScreen from './WheelScreen';
import { Icon } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


const Drawer = createDrawerNavigator();

const screenOptions = {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: '#5637DD' }
}

const DashboardNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen 
                name='Dashboard'
                component={DashboardScreen}
                options={({ navigation }) => ({ 
                    title: 'Dashboard', 
                    headerLeft: () => (
                        <Icon   
                            name='home'
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

const NoteNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen 
                name='Notes'
                component={NoteScreen}
                options={({ navigation }) => ({ 
                    title: 'Notes', 
                    headerLeft: () => (
                        <Icon   
                            name='sticky-o' //sticky note
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

const TodoNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen 
                name='To Do List'
                component={TodoScreen}
                options={({ navigation }) => ({ 
                    title: 'To Do List', 
                    headerLeft: () => (
                        <Icon   
                            name='check'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    );
};

const CalendarNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen 
                name='Contact'
                component={CalendarScreen}
                options={({ navigation }) => ({ 
                    title: 'Calendar', 
                    headerLeft: () => (
                        <Icon   
                            name='calendar'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    );
};

const TimeNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen 
                name='Time Tracker'
                component={TimeScreen}
                options={({ navigation }) => ({ 
                    title: 'Time Tracker', 
                    headerLeft: () => (
                        <Icon   
                            name='check' //clock
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    );
};

const WaterNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen 
                name='Water Tracker'
                component={WaterScreen}
                options={({ navigation }) => ({ 
                    title: 'Water Tracker', 
                    headerLeft: () => (
                        <Icon   
                            name='tint'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    );
};

const WheelNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen 
                name='Decision Wheel'
                component={WheelScreen}
                options={({ navigation }) => ({ 
                    title: 'Decision Wheel', 
                    headerLeft: () => (
                        <Icon   
                            name='circle-o'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    );
};

const CoinNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen 
                name='Coin Flip'
                component={CoinScreen}
                options={({ navigation }) => ({ 
                    title: 'Coin Flip', 
                    headerLeft: () => (
                        <Icon   
                            name='circle' // if no coin icon
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    );
};

const ReminderNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen 
                name='Reminders'
                component={ReminderScreen}
                options={({ navigation }) => ({ 
                    title: 'Reminders', 
                    headerLeft: () => (
                        <Icon   
                            name='bell-o'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    );
};

const CustomDrawerContent = (props) => (
    <DrawerContentScrollView {...props}>
        <View style={styles.drawerHeader}>
            <View style={{ flex: 1 }}>
                <Image /*source={logo}*/ style={styles.drawerImage} />
            </View>

            <View style={{ flex: 2 }}>
                <Text style={styles.drawerHeaderText}>Kekka</Text>
            </View>
        </View>
        <DrawerItemList {...props} labelStyle={{ fontWeight: 'bold' }} />
    </DrawerContentScrollView>
);

const Main = () => {
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(fetchCampsites());
    //     dispatch(fetchPromotions());
    //     dispatch(fetchPartners());
    //     dispatch(fetchComments());
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
                initialRouteName='Dashboard'
                drawerContent={CustomDrawerContent}
                drawerStyle={{ backgroundColor: '#CEC8FF' }}
            >
                <Drawer.Screen  
                    name='Home'
                    component={DashboardNavigator}
                    options={{ 
                        title: 'Dashboard',
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
                    name='To Do'
                    component={TodoNavigator}
                    options={{ 
                        title: 'To Do List', 
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
                    name='Notes'
                    component={NoteNavigator}
                    options={{
                        title: 'Notes', 
                        drawerIcon: ({ color }) => (
                            <Icon 
                                name='sticky-o'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen  
                    name='Calendar'
                    component={CalendarNavigator}
                    options={{ 
                        title: 'Calendar', 
                        drawerIcon: ({ color }) => (
                            <Icon 
                                name='calendar'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen  
                    name='Time'
                    component={TimeNavigator}
                    options={{ 
                        title: 'Time Tracker', 
                        drawerIcon: ({ color }) => (
                            <Icon 
                                name='clock' 
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen  
                    name='Water'
                    component={WaterNavigator}
                    options={{ 
                        title: 'Water Tracker', 
                        drawerIcon: ({ color }) => (
                            <Icon 
                                name='tint'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen  
                    name='Reminders'
                    component={ReminderNavigator}
                    options={{ 
                        title: 'Reminders', 
                        drawerIcon: ({ color }) => (
                            <Icon 
                                name='bell-o'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen  
                    name='Decision Wheel'
                    component={WheelNavigator}
                    options={{ 
                        title: 'Decision Wheel', 
                        drawerIcon: ({ color }) => (
                            <Icon 
                                name='circle-o'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen  
                    name='Coin Flip'
                    component={CoinNavigator}
                    options={{ 
                        title: 'Coin Flip', 
                        drawerIcon: ({ color }) => (
                            <Icon 
                                name='circle'
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

export default Main;