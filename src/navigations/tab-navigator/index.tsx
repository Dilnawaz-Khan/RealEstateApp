import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Explore, Inbox, Profile, Trips, Wishlist} from '../../screens';
import {COLORS, Fonts, ScreenNames, bottomTabs} from '../../constants';
import {Image, StyleSheet} from 'react-native';
import {BottomTabs} from '../../types';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={props => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.black,
        tabBarInactiveTintColor: COLORS.primary,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarIcon: ({color, focused}) => {
          const {name} = props.route;
          return (
            <Image
              source={bottomTabs[name as keyof BottomTabs]}
              style={{
                width: focused ? 40 : 30,
                height: focused ? 40 : 30,
                tintColor: color,
              }}
            />
          );
        },
      })}>
      <Tab.Screen name={ScreenNames.Explore} component={Explore} />
      <Tab.Screen name={ScreenNames.Wishlist} component={Wishlist} />
      <Tab.Screen name={ScreenNames.Trips} component={Trips} />
      <Tab.Screen name={ScreenNames.Inbox} component={Inbox} />
      <Tab.Screen name={ScreenNames.Profile} component={Profile} />
    </Tab.Navigator>
  );
}

export {TabNavigator};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 70,
    gap: 10,
    alignItems: 'center',
    backgroundColor: COLORS.whiteSmoke,
  },
  tabBarLabelStyle: {
    fontSize: 12,
    fontFamily: Fonts.semiBold,
  },
});
