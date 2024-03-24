import {ScrollView, StyleSheet, Text, View} from 'react-native';

import {ExperienceItem} from '..';
import {COLORS, Experience, Fonts} from '../../constants';

const ExperienceSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.experienceTitle}>Experience</Text>
      <ScrollView
        nestedScrollEnabled
        horizontal
        showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
          {Experience.map(item => (
            <ExperienceItem {...item} key={item.id.toString()} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export {ExperienceSection};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    gap: 20,
    marginBottom: 100,
  },
  experienceTitle: {
    fontSize: 22,
    fontFamily: Fonts.bold,
    color: COLORS.black,
  },
});
