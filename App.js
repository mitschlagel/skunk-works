import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

import MainTabBar from './main/mainTabBar';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <MainTabBar />
    </NavigationContainer>
  );
}




