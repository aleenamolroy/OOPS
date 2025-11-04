class BankAccount{
    #balance=0
    deposit(Amount){
        if (Amount > 0) this.#balance +=Amount
    }
    withdraw(Amount){
        if(Amount<=this.#balance) this.#balance -= Amount
        else console.log("Insufficient fund");
        
    }
    getBalance(){
        return this.#balance
    }
}
// class Hacker{
//     hack(account){
//         account.balance=100000
//     }
// }
const acc1=new BankAccount()
acc1.deposit(500)
acc1.withdraw(200)
console.log(acc1.getBalance())

// const g=new Hacker()
// g.hack(acc1)
// console.log(acc1.getBalance())
