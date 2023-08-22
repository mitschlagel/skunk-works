import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AccountsStack from '../accounts/accountsStack';
import PaySendStack from '../paySend/paySendStack';

const Tab = createBottomTabNavigator()

const MainTabBar = () => {
  return (
    <Tab.Navigator initialRouteName='Accounts'>
      <Tab.Screen name="Accounts" component={AccountsStack} options={{headerShown: false}} />
      <Tab.Screen name="Pay/Send" component={PaySendStack} options={{headerShown: false}} />
    </Tab.Navigator>
  )
}

export default MainTabBar;