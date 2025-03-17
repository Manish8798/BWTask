import React from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import localData from '../config/localData';
import SocialMediaCard from '../components/SocialMediaCard';

const DiscoverScreen = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={localData}
        renderItem={({item}) => <SocialMediaCard user={item} />}
        contentContainerStyle={{paddingBottom: 60, paddingTop: 10}}
      />
    </SafeAreaView>
  );
};

export default DiscoverScreen;
