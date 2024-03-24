import {Image, StyleSheet, TextInput, View} from 'react-native';
import {COLORS, Fonts} from '../../constants';

const searchIcon = require('../../assets/icons/search.png');

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Image source={searchIcon} style={styles.icon} />
      <TextInput
        placeholder="Where to ?"
        placeholderTextColor={COLORS.primary}
        style={styles.textInp}
      />
    </View>
  );
};

export {SearchBar};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 48,
    backgroundColor: COLORS.primary + 50,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    borderRadius: 24,
    gap: 10,
  },
  icon: {
    width: 25,
    height: 25,
  },
  textInp: {
    fontSize: 16,
    fontFamily: Fonts.regular,
    width: '85%',
  },
});
