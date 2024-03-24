import {BottomTabs, TopTab} from '../types';

export const topTabs: TopTab[] = [
  {
    id: 1,
    icon: require('../assets/icons/seaside.png'),
    name: 'Seaside',
  },
  {
    id: 2,
    icon: require('../assets/icons/forest.png'),
    name: 'Forest',
  },
  {
    id: 3,
    icon: require('../assets/icons/cabin.png'),
    name: 'Cabin',
  },
  {
    id: 4,
    icon: require('../assets/icons/city.png'),
    name: 'City',
  },
  {
    id: 5,
    icon: require('../assets/icons/mountain.png'),
    name: 'Mountain',
  },
];

export const bottomTabs: BottomTabs = {
  Explore: require('../assets/icons/explore.png'),
  Wishlist: require('../assets/icons/wishlist.png'),
  Trips: require('../assets/icons/trips.png'),
  Inbox: require('../assets/icons/inbox.png'),
  Profile: require('../assets/icons/profile.png'),
};
