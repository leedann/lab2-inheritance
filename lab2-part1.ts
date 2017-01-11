class checkingsAccount {

    constructor(private ownerName:string, private initialBalance:number ){

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

var test = new checkingsAccount("Danny", 1000000);
test.checkBalance();
