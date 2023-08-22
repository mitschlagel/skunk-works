import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

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