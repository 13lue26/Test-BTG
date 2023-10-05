import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./Home";
import Chat from './Chat';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Setting from './Setting';
import Contacts from './Contacts';
import DetailPesanan from '../components/DetailPesanan';

const Tab = createBottomTabNavigator();

const TabScreen = () => {

    return (

        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='home-outline' color={color} size={size} />
                    )
                }}
            />

            <Tab.Screen
                name="Chat"
                component={Chat}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Icon name='chat-outline' color={color} size={size} />
                    }
                }}
            />

            <Tab.Screen
                name="Contacts"
                component={Contacts}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Icon name='account-group-outline' color={color} size={size} />
                    }
                }}
            />

            <Tab.Screen
                name="Detail Pesanan"
                component={DetailPesanan}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Icon name='clipboard-text' color={color} size={size} />
                    }
                }}
            />

            <Tab.Screen
                name="Setting"
                component={Setting}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Icon name='cog-outline' color={color} size={size} />
                    }
                }}
            />
        </Tab.Navigator>
    );
}

export default TabScreen
