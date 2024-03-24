import {ImageProps} from 'react-native';

interface MainFeedData {
  id: number;
  thumbnai: ImageProps;
  location: string;
  description: string;
  area: string;
  beds: string;
  baths: string;
}

export {MainFeedData};
