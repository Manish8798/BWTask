import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import localData from '../config/localData';
import SocialMediaCard from '../components/SocialMediaCard';

const DiscoverScreen = () => {
  const [selectedChip, setSelectedChip] = useState('all');
  const [userData, setUserData] = useState(localData);

  const handleChipPress = chip => {
    setSelectedChip(chip.toLowerCase());
    if (chip == 'All') {
      setUserData(localData);
    } else {
      setUserData(localData.filter(item => item.category == chip));
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity
          style={[
            styles.chip,
            selectedChip == 'all' && {
              backgroundColor: '#154354',
              color: '#fff',
            },
          ]}
          onPress={() => handleChipPress('All')}>
          <Text
            style={[
              styles.text,
              selectedChip == 'all' && {
                color: '#fff',
              },
            ]}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.chip,
            selectedChip == 'entertainment' && {
              backgroundColor: '#154354',
              color: '#fff',
            },
          ]}
          onPress={() => handleChipPress('Entertainment')}>
          <Text
            style={[
              styles.text,
              selectedChip == 'entertainment' && {
                color: '#fff',
              },
            ]}>
            Entertainment
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.chip,
            selectedChip == 'lifestyle' && {
              backgroundColor: '#154354',
              color: '#fff',
            },
          ]}
          onPress={() => handleChipPress('Lifestyle')}>
          <Text
            style={[
              styles.text,
              selectedChip == 'lifestyle' && {
                color: '#fff',
              },
            ]}>
            Lifestyle
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={userData}
        renderItem={({item}) => <SocialMediaCard user={item} />}
        contentContainerStyle={{paddingBottom: 100, paddingTop: 10}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 15,
    elevation: 8,
  },
  chip: {
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: '#154354',
    borderRadius: 20,
    paddingVertical: 5,
    backgroundColor: '#fff',
    marginTop: 20,
    marginBottom: 10,
    minWidth: 80,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#154354',
    textAlign: 'center',
  },
});

export default DiscoverScreen;
