import {StyleSheet, Text, View} from 'react-native';

import {COLORS} from '../../constants';

const Wishlist = () => {
  return (
    <View style={styles.container}>
      <Text>Wishlist</Text>
    </View>
  );
};

export {Wishlist};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
