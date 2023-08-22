import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

function AccountsView({ navigation }) {
  return (
    <View style={styles}>
      <Text>Accounts View</Text>
      <Button 
      title="Go to Summary"
      onPress={() => navigation.navigate('Summary')}
      />
    </View>
  )
}

function AccountSummaryView() {
  return (
    <View style={styles}>
      <Text>Account Summary View</Text>
    </View>
  )
}

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Accounts'>
        <Stack.Screen name="Accounts" component={AccountsView} options={{headerLargeTitle: true}} />
        <Stack.Screen name="Summary" component={AccountSummaryView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
