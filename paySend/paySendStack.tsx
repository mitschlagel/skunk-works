import { View, Text } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import styles from '../styles/styles';
import navigationOptions from '../options/navigationOptions';

const PaySendStack = () => {
    const Stack = createNativeStackNavigator()
    return (
      <Stack.Navigator initialRouteName='PaySendView'>
        <Stack.Screen name="Pay/Send" component={PaySendView} options={navigationOptions("Pay/Send", true)} />
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

  export default PaySendStack;