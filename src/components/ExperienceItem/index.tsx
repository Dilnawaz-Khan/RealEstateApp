import {Image, StyleSheet, Text, View} from 'react-native';

import {COLORS, Fonts} from '../../constants';
import {ExperienceData} from '../../types';

const ExperienceItem = ({thumbnai, description}: ExperienceData) => {
  return (
    <View style={styles.container}>
      <Image source={thumbnai} style={styles.thumbnail} />
      <Text style={styles.descriptionTxt}>{description}</Text>
    </View>
  );
};

export {ExperienceItem};

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 250,
    gap: 20,
  },
  thumbnail: {
    width: '100%',
    height: 160,
    borderRadius: 10,
  },
  descriptionTxt: {
    fontSize: 16,
    fontFamily: Fonts.semiBold,
    marginLeft: 5,
    color: COLORS.black,
  },
});
