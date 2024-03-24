import {useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

import {COLORS, Fonts, topTabs} from '../../constants';
import {TopTab} from '../../types';

const ToptabBar = () => {
  const [activeTab, setActiveTab] = useState(topTabs[0]);

  const handleOnTabChange = (tab: TopTab) => setActiveTab(tab);

  return (
    <View style={styles.container}>
      {topTabs.map(item => {
        const isTabActive = item.id === activeTab.id;
        return (
          <Pressable
            key={item.id}
            onPress={() => handleOnTabChange(item)}
            style={[
              styles.tabContainer,
              {
                borderBottomWidth: isTabActive ? 2 : 0,
              },
            ]}>
            <Image
              source={item.icon}
              style={[
                styles.tabIcon,
                {tintColor: isTabActive ? COLORS.black : COLORS.primary},
              ]}
            />
            <Text
              style={[
                styles.tabText,
                {
                  fontFamily: isTabActive ? Fonts.semiBold : Fonts.regular,
                  color: isTabActive ? COLORS.black : COLORS.primary,
                },
              ]}>
              {item.name}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export {ToptabBar};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  tabContainer: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 5,
    borderRadius: 5,
    borderBottomColor: COLORS.gray,
  },
  tabIcon: {
    width: 30,
    height: 30,
  },
  tabText: {
    fontSize: 13,
  },
});
