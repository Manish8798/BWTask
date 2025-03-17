import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const SocialMediaCard = ({user}) => {
  const {name, city, date, views, subtitle, location, image} = user;

  return (
    <View style={styles.cardContainer}>
      {/* Header section with profile pic, name, location and follow button */}
      <View style={styles.headerContainer}>
        <View style={styles.profileContainer}>
          <Image source={image} style={styles.profileImage} />
          <View style={styles.userInfoContainer}>
            <Text style={styles.username}>{name}</Text>
            <Text style={styles.location}>{city}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.followButtonText}>Follow</Text>
        </TouchableOpacity>
      </View>

      {/* Main post image */}
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.postImage} resizeMode="cover" />
        <TouchableOpacity style={styles.menuButton}>
          <Icon name="ellipsis-vertical" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Post details */}
      <View style={styles.postDetailsContainer}>
        <Text style={styles.dateText}>{date}</Text>
        <Text style={styles.viewsText}>Community | {views} Views</Text>
      </View>

      {/* Post caption */}
      <Text style={styles.captionText}>{subtitle}</Text>

      {/* Engagement buttons */}
      <View style={styles.engagementContainer}>
        <TouchableOpacity style={styles.engagementButton}>
          <Icon name="heart-outline" size={20} color="#1a3b5d" />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>1</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.engagementButton}>
          <Icon name="share-social-outline" size={20} color="#1a3b5d" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.engagementButton}>
          <Icon name="chatbubble-outline" size={20} color="#1a3b5d" />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>1</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Location footer */}
      <View style={styles.locationFooter}>
        <Icon name="location-outline" size={16} color="#1a3b5d" />
        <Text style={styles.locationFooterText}>{location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userInfoContainer: {
    justifyContent: 'center',
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4a90e2',
  },
  location: {
    fontSize: 12,
    color: '#333',
  },
  followButton: {
    borderWidth: 1,
    borderColor: '#1a3b5d',
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  followButtonText: {
    fontSize: 14,
    color: '#1a3b5d',
    fontWeight: '500',
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 250,
    borderRadius: 8,
  },
  menuButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  postDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  dateText: {
    fontSize: 12,
    color: '#666',
  },
  viewsText: {
    fontSize: 12,
    color: '#666',
  },
  captionText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 15,
  },
  engagementContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  engagementButton: {
    flexDirection: 'row',
    marginRight: 30,
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -12,
    backgroundColor: '#1a3b5d',
    borderRadius: 10,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
  },
  locationFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
  },
  locationFooterText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 5,
    flex: 1,
  },
});

export default SocialMediaCard;
