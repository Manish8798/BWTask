import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <Image
          source={require('../assets/Jeremy_Meeks.jpg')} // Placeholder for profile image
          style={styles.profileImage}
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>manish</Text>
          <View style={styles.location}>
            <Ionicons name="location-outline" size={16} color="gray" />
            <Text style={styles.locationText}>New Delhi, Delhi</Text>
          </View>
          <View style={styles.jobInfo}>
            <FontAwesome5 name="briefcase" size={14} color="gray" />
            <Text style={styles.jobText}> software engineer</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      </View>

      {/* Stats Section */}
      <View style={styles.statsContainer}>
        <TouchableOpacity style={styles.statButton}>
          <Text style={styles.statText}>Trash</Text>
        </TouchableOpacity>
        <View style={styles.stats}>
          {['Feed', 'Followers', 'Following', 'Blocked Profiles'].map(
            (label, index) => (
              <View
                key={index}
                style={[
                  styles.statItem,
                  index >= 0 &&
                    index < 3 && {
                      borderRightWidth: 1,
                      borderRightColor: 'gray',
                      paddingHorizontal: 2,
                    },
                ]}>
                <Text style={styles.statNumber}>0</Text>
                <Text style={styles.statLabel}>{label}</Text>
              </View>
            ),
          )}
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        {/* About Me Section */}
        <View style={styles.aboutSection}>
          <Text style={styles.aboutTitle}>About me</Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.buttonText}>Drafts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.buttonText}>History</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.aboutText}>Anonymous</Text>

      {/* No Post Section */}
      <View style={styles.noPostContainer}>
        <Text style={styles.noPostText}>No Post</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    paddingTop: 32,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ddd',
  },
  userInfo: {
    flex: 1,
    marginLeft: 12,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 8,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 14,
    color: 'gray',
    marginLeft: 4,
  },
  jobInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  jobText: {
    fontSize: 14,
    color: 'gray',
    marginLeft: 4,
  },
  editButton: {
    backgroundColor: '#1F3A47',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  editText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  statButton: {
    backgroundColor: '#1F3A47',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 10,
  },
  statText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  stats: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    // marginLeft: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: 'gray',
  },
  aboutSection: {
    marginBottom: 16,
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  aboutText: {
    fontSize: 14,
    color: 'gray',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  actionButton: {
    backgroundColor: '#1F3A47',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  noPostContainer: {
    alignItems: 'center',
    marginTop: '50%',
  },
  noPostText: {
    fontSize: 20,
    color: '#000',
  },
});

export default ProfileScreen;
