import {StyleSheet, Text, View} from 'react-native';

import {COLORS} from '../../constants';

const Trips = () => {
  return (
    <View style={styles.container}>
      <Text>Trips</Text>
    </View>
  );
};

export {Trips};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
