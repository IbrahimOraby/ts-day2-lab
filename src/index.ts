import BankAccount from "./BankAccount.js";

const bankAcc = new BankAccount(2500);
bankAcc.deposit(2500)
console.log("Balance: ", bankAcc.getBalance());