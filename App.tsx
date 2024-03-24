import {SafeAreaView, StyleSheet} from 'react-native';

import {RootNatvigator} from './src/navigations';
import {COLORS} from './src/constants';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <RootNatvigator />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
