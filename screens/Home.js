import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

const Home = () => {
    return (
      <>
        <StatusBar style="dark" />
  
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home!</Text>
        </View>
      </>
    );
  }

  export default Home;