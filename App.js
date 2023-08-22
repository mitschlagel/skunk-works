import { Button, StatusBar, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

function AccountsView({ navigation }) {
  const insets = useSafeAreaInsets()
  return (
    <View style={[styles.container, {
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right
      },
    ]}>
      <StatusBar barStyle="light-content" />
      <Text>Accounts View</Text>
      <Button 
      title="Go to Summary"
      onPress={() => navigation.navigate('Summary')}
      />
    </View>
  )
}

function AccountSummaryView() {
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

const Stack = createNativeStackNavigator()

export default function App() {
  StatusBar.setBarStyle('dark-content', true)
  return (
      <SafeAreaProvider>
        
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Accounts'>
            <Stack.Screen name="Accounts" component={AccountsView} options={accountsNavigationOptions} />
            <Stack.Screen name="Summary" component={AccountSummaryView} options={summaryNavigationOptions}/>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
      
    
  );
}

const accountsNavigationOptions = {
  title: "Accounts",
  headerLargeTitle: true,
  headerStyle: {
    backgroundColor: '#006341'
  },
  headerTintColor: '#fff'
}

const summaryNavigationOptions = {
  title: "Summary",
  headerStyle: {
    backgroundColor: '#006341'
  },
  headerTintColor: '#fff'
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
