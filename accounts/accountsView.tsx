import { Button, FlatList, ScrollView, Text, TouchableHighlight, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import AccountCardView from './components/accountCard';

import styles from '../styles/styles'
import XpAccountsAccount from '../data/XpAccountsAccount';

import getAccounts from '../AccountsAPI';

interface AccountsViewProps {
    navigation: any;
}

// const accounts = [
//     new XpAccountsAccount("Checking", "$123.45", "0123", "",["Deposit", "Transfer", "Pay Bill"]),
//     new XpAccountsAccount("Savings", "$123.45", "0123", "",["Transfer", "Pay Bill"]),
//     new XpAccountsAccount("Credit Card", "$123.45", "0123", "",["Make Payment", "Pay Bill"]),
// ]

// const mockAccount = new XpAccountsAccount("Checking", "$123.45", "0123", "",["Transfer", "Pay Bill"])

const accountsResponse = getAccounts()
let accounts: XpAccountsAccount[] = []

accountsResponse.then(( response )=>{
    accounts = response
})
const accountListItem =({ item }: { item:XpAccountsAccount}) => {
    return (
        <TouchableHighlight onPress={() => console.log("go to account summary")}>
            <AccountCardView account={item} />
        </TouchableHighlight>
        
    )
}

const AccountsView: React.FC<AccountsViewProps> = () => {
    const insets = useSafeAreaInsets()
    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View style={[styles.container, {
                    paddingTop: insets.top,
                    paddingBottom: insets.bottom,
                    paddingLeft: insets.left,
                    paddingRight: insets.right
                    },
                ]}>
                    <FlatList 
                        data={accounts}
                        renderItem={accountListItem}
                        keyExtractor={(item) => item.lastFour}
                    />
                    
                    
                </View>
        </ScrollView>
    
   )
}


  export default AccountsView;