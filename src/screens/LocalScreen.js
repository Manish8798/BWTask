import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

const LocalScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Local</Text>
    </SafeAreaView>
  );
};

export default LocalScreen;
