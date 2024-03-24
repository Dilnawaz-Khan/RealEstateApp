import {NavigationContainer} from '@react-navigation/native';
import {TabNavigator} from '.';

function RootNatvigator() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

export {RootNatvigator};
