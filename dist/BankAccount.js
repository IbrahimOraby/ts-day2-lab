export default class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    deposit(amount) {
        this.balance = this.balance + amount;
    }
    getBalance() {
        return this.balance;
    }
}
