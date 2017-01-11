class account {
    ownerName:string;
    initialBalance:number;

    constructor(name, balance){
        this.ownerName = name;
        this.initialBalance = balance;
    }

    deposit(moneys:number) {
        this.initialBalance += moneys;
    }
    withdraw(takeMoneys:number) {
        this.initialBalance-= takeMoneys;
    }
    checkBalance():void {
        console.log(`${this.ownerName} has ${this.initialBalance} in your account`);
    }

}

class savingsAccount extends account {

    constructor(ownerName:string, initialBalance:number, private withdrawals:number = 0){
        super(ownerName, initialBalance);
    }

    deposit(moneys:number) {
        this.initialBalance += moneys;
    }
    withdraw(takeMoneys:number) {
        if (this.withdrawals == 3) {
            console.log("you are withdrawing too many times!!");
        }else {
            this.initialBalance-= takeMoneys;
            this.withdrawals++;
        }
    }
    checkBalance():void {
        console.log(`${this.ownerName} has ${this.initialBalance} in your account`);
    }

}

class checkingsAccount extends account{
    constructor(ownerName:string, initialBalance:number ){
        super(ownerName, initialBalance);
    }
}

let check1 = new checkingsAccount("Danny", 100);
let save1 = new savingsAccount("Lanny", 1000000);

check1.checkBalance();
check1.deposit(200);
check1.withdraw(100);
check1.checkBalance();

console.log("\nSavings!");
save1.checkBalance();
save1.withdraw(200);
save1.withdraw(200);
save1.checkBalance();
save1.withdraw(200);
save1.withdraw(200);


