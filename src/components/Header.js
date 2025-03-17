import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// BWstory Header Component
const BWstoryHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.menuButton}>
        <Icon name="bars" size={24} color="#fff" />
      </TouchableOpacity>

      <View style={styles.logoContainer}>
        <Text style={styles.logo}>BWstory</Text>
      </View>

      <TouchableOpacity style={styles.searchButton}>
        <Icon name="search" size={22} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: Platform.OS === 'android' ? 80 : 70,
    backgroundColor: '#154354',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  menuButton: {
    padding: 5,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: '700',
    fontFamily: 'serif',
  },
  searchButton: {
    padding: 5,
  },
});

export default BWstoryHeader;
