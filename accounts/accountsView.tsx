import { Button, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

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