import React, { useContext } from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from './../screens/Home';
import Profile from './../screens/Profile';

// Async storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// credentials context
import { CredentialsContext } from './../components/CredentialsContext';

const Tab = createMaterialBottomTabNavigator();

const Welcome = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#ffffff"
        labelStyle={{ fontSize: 12 }}
        barStyle={{ backgroundColor: '#6D28D9' }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={26} />,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account" color={color} size={26} />,
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={LogOut}
          options={{
            tabBarLabel: 'Exit',
            tabBarIcon: ({ color }) => <MaterialCommunityIcons name="logout" size={24} color={color} />,
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Welcome;

function LogOut({ navigation }) {
  const { storedCredentials, setStoredCredentials } = useContext(CredentialsContext);

  const clearLogin = () => {
    AsyncStorage.removeItem('henryCribCredentials')
      .then(() => {
        setStoredCredentials('');
      })
      .catch((error) => console.log(error));
  };

  React.useEffect(() => {
    clearLogin();
  }, [navigation]);

  return <></>;
}
