// Accounts API

import axios from 'axios';

interface XpAccountsAccount {
  name: string,
  balance: string,
  lastFour: string,
  paymentInformation: string,
  actions: string[]
}

export default async function getAccounts(): Promise<XpAccountsAccount[]> {
  try {
    const response = await axios.get<XpAccountsAccount[]>('http://localhost:3000/data');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

