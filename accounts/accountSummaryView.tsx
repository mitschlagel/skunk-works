import { Button, StatusBar, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import styles from '../styles/styles';

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

  export default AccountSummaryView;