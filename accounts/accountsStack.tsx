import { createNativeStackNavigator } from '@react-navigation/native-stack'

import AccountsView from './accountsView';
import AccountSummaryView from './accountSummaryView';

import navigationOptions from '../options/navigationOptions';

const AccountsStack = () => {
    const Stack = createNativeStackNavigator()
    return (
      <Stack.Navigator initialRouteName='Accounts'>
        <Stack.Screen name="Accounts" component={AccountsView} options={navigationOptions("Accounts", true)} />
        <Stack.Screen name="Summary" component={AccountSummaryView} options={navigationOptions("Summary", false)}/>
      </Stack.Navigator>
      
    )
  }

  export default AccountsStack;