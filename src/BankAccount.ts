export default class BankAccount {
	private balance: number;
	constructor(balance: number) {
		this.balance = balance;
	}

	deposit(amount: number): void {
		this.balance = this.balance + amount;
	}

	getBalance(): number {
        return this.balance
    }
}
