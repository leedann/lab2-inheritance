class savingsAccount {

    constructor(private ownerName:string, private initialBalance:number, private withdrawals:number = 0){

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

var test = new savingsAccount("Danny", 1000000);
test.withdraw(100);
test.withdraw(100);
test.withdraw(100);
test.checkBalance();
test.withdraw(100);