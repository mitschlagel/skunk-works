import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

import MainTabBar from './main/mainTabBar';

import { default as storybook } from './.storybook';

const STORYBOOK_ENABLED = false;
const AppEntry = STORYBOOK_ENABLED ? storybook : App;

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <MainTabBar />
    </NavigationContainer>
  );
}

export default AppEntry




