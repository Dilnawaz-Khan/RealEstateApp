import {FlatList, StyleSheet, View} from 'react-native';

import {
  ExperienceSection,
  MainFeedItem,
  SearchBar,
  ToptabBar,
} from '../../components';
import {COLORS, MainFeed} from '../../constants';

const Explore = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <ToptabBar />
      <View style={styles.mainFeedContainer}>
        <FlatList
          nestedScrollEnabled
          data={MainFeed}
          renderItem={({item}) => <MainFeedItem {...item} />}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          ListFooterComponent={() => <ExperienceSection />}
        />
      </View>
    </View>
  );
};

export {Explore};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 20,
  },
  mainFeedContainer: {
    marginVertical: 10,
  },
});
