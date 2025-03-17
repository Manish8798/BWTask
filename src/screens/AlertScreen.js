import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

const AlertScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Alert</Text>
    </SafeAreaView>
  );
};

export default AlertScreen;
