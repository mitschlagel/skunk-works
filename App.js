import { Button, StatusBar, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AccountsStack = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator initialRouteName='Accounts'>
      <Stack.Screen name="Accounts" component={AccountsView} options={navigationOptions(this.name, true)} />
      <Stack.Screen name="Summary" component={AccountSummaryView} options={navigationOptions(this.name, false)}/>
    </Stack.Navigator>
    
  )
}

const AccountsView = ({ navigation }) => {
  const insets = useSafeAreaInsets()
  return (
    <View style={[styles.container, {
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right
      },
    ]}>
      
      
      <Text>Accounts View</Text>
      <Button 
      title="Go to Summary"
      onPress={() => navigation.navigate('Summary')}
      />
    </View>
  )
}

const AccountSummaryView = () => {
  const insets = useSafeAreaInsets()
  return (
    <View style={[styles.container, {
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right
    },
  ]}>
      <Text>Account Summary View</Text>
    </View>
  )
}

const PaySendStack = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator initialRouteName='PaySendView'>
      <Stack.Screen name="Pay/Send" component={PaySendView} options={navigationOptions(this.name, true)} />
    </Stack.Navigator>
  )
}

const PaySendView = () => {
  const insets = useSafeAreaInsets()
  return (
    <View style={[styles.container, {
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right
    },
  ]}>
      <Text>Pay/Send View</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator()

const TabBar = () => {
  return (
    <Tab.Navigator initialRouteName='Accounts' screenOptions={{navigationOptions}}>
      <Tab.Screen name="Accounts" component={AccountsStack} options={{headerShown: false}} />
      <Tab.Screen name="Pay/Send" component={PaySendStack} options={{headerShown: false}} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <TabBar />
    </NavigationContainer>
  );
}

const navigationOptions = (title, headerLargeTitle) => {
  return { title: title,
    headerLargeTitle: headerLargeTitle,
    headerStyle: {
      backgroundColor: '#006341'
    },
    headerTintColor: '#fff'
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
