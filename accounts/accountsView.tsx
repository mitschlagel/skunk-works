import { Button, StatusBar, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import styles from '../styles/styles'

interface AccountsViewProps {
    navigation: any;
}
const AccountsView: React.FC<AccountsViewProps> = ({ navigation }) => {
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


  export default AccountsView;