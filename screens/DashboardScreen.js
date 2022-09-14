import { ScrollView, Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { useSelector } from 'react-redux';
import Loading from '../components/LoadingComponent';
import { Agenda } from 'react-native-calendars';


const FeaturedItem = (props) => {
    const { item } = props;

    if(props.isLoading) {
        return <Loading />
    }
    if(props.errMess) {
        return (
            <View>
                <Text 
                    >{props.errMess}</Text>
            </View>
        );
    }

    if (item) {
        return (
            <ScrollView>
                <Card containerStyle={{ padding: 0 }}>
                    <View 
                        style={{
                            color: 'white',
                            textAlign: 'center',
                            fontSize: 20
                        }}>
                        <Text style={{ margin: 20 }}>
                            {item.title}
                        </Text>
                    </View>
                </Card>
            </ScrollView>
        );
    }
    return <View />;
};

const DashboardScreen = () => {
    const water = useSelector((state) => counter.state.value);
    // const agenda = useSelector((state) => state.agenda);

    return (
        <ScrollView>
            {/* <FeaturedItem 
                item ={featCampsite} 
                isLoading={campsites.isLoading}
                errMess={campsites.errMess}
            /> */}
            <FeaturedItem 
                item ={water}  
                isLoading={water.isLoading}
                errMess={water.errMess}
            />
            <Agenda 
                renderItem={(item, agenda) => {
                    return <View />;
                }}
            />
            {/* <FeaturedItem 
                item ={featPartner}  
                isLoading={partners.isLoading}
                errMess={partners.errMess}
            /> */}
        </ScrollView>
    );
};

export default DashboardScreen;