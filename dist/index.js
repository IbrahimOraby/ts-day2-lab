import BankAccount from "./BankAccount.js";
import genReverseArr from "./GenReverse.js";
const bankAcc = new BankAccount(2500);
bankAcc.deposit(2500);
console.log("Balance: ", bankAcc.getBalance());
const numArr = genReverseArr([2, 3, 4, 6, 7]);
const strArr = genReverseArr(["first", "second", "third"]);
console.log(numArr, strArr);
