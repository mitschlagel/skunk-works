import React from 'react';
import { View, Text, Button } from 'react-native';
import XpAccountsAccount from '../../data/XpAccountsAccount';

interface AccountActionsViewProps {
    actions: string[];
}

const AccountActionsView: React.FC<AccountActionsViewProps> = ({ actions }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: "flex-end" }}>
        {actions.map((action, index) => {
            return (
            <View key={index} style={{ marginLeft: 8 }}>
                <Button title={action} onPress={() => {}} />
            </View>
            );
        })}
        </View>
    );
}

interface AccountCardViewProps {
    account: XpAccountsAccount;
}

const AccountCardView: React.FC<AccountCardViewProps> = ({ account }) => {

  return (
    <View style={{ paddingHorizontal: 16, backgroundColor: 'white' }}>
      <View style={{ alignItems: 'flex-start' }}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={{ fontSize: 18, fontWeight: 'bold' }}>{account.name}</Text>
        <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'gray' }}>Balance</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 24 }}>{account.balance}</Text>
            <View style={{ flex: 1 }} />
            <Text style={{ fontSize: 14 }}>{`•••• ${account.lastFour}`}</Text>
            </View>
      </View>

      <Text
        style={{ fontSize: 12, color: 'gray', marginTop: 8, marginBottom: 16 }}
        accessibilityLabel={`last four ${account.lastFour}`}
      >
        {account.paymentInformation}
      </Text>

      <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
        <AccountActionsView actions={account.actions} />
      </View>
    </View>
  );
};

export default AccountCardView;