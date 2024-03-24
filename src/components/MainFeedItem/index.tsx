import {Image, StyleSheet, Text, View} from 'react-native';

import {COLORS, Fonts} from '../../constants';
import {MainFeedData} from '../../types';

const MainFeedItem = ({
  thumbnai,
  location,
  description,
  area,
  beds,
  baths,
}: MainFeedData) => {
  return (
    <View style={styles.container}>
      <Image source={thumbnai} style={styles.thumbnail} />
      <View style={styles.detailsContainer}>
        <Text style={styles.locationTxt}>{location}</Text>
        <Text style={styles.descriptionTxt}>{description}</Text>
        <View style={styles.houseDetailsContainer}>
          <Text style={styles.houseDetailsTxt}>{area}</Text>
          <Text style={styles.houseDetailsTxt}>{beds}</Text>
          <Text style={styles.houseDetailsTxt}>{baths}</Text>
        </View>
      </View>
    </View>
  );
};

export {MainFeedItem};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    gap: 10,
  },
  thumbnail: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  detailsContainer: {
    gap: 10,
  },
  locationTxt: {
    fontSize: 18,
    fontFamily: Fonts.bold,
    color: COLORS.black,
  },
  descriptionTxt: {
    fontSize: 16,
    color: COLORS.primary,
    fontFamily: Fonts.regular,
  },
  houseDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  houseDetailsTxt: {
    fontSize: 16,
    color: COLORS.primary,
    fontFamily: Fonts.regular,
  },
});
