export default class XpAccountsAccount {
    name: string;
    balance: string;
    lastFour: string;
    paymentInformation: string
    actions: string[];
    constructor(name: string, balance: string, lastFour: string, paymentInformation: string, actions: string[]) {
        this.name = name;
        this.balance = balance;
        this.lastFour = lastFour;
        this.paymentInformation = paymentInformation;
        this.actions = actions;
    }
}