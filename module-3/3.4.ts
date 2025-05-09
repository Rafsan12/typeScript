{
  //
  // Access Modifiers
  class Bank {
    public readonly id: number;
    public name: string;
    private _balance: number;
    // if you want to make balance property accessible in the child you can use protected instead of private
    // protected balance1: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
      //   this.balance1 = balance1;
    }

    addBalance(amount: number) {
      this._balance += amount;
    }

    getBalance() {
      return this._balance;
    }
  }

  const poorMan = new Bank(1, "Rafsan", 1000);

  poorMan.addBalance(150);
  const PoorManTotalBalance = poorMan.getBalance();
  console.log(PoorManTotalBalance); // 1150
  // console.log(poorMan.balance); // Error: Property 'balance' is private and only accessible within class 'Bank'.

  // getters and setters

  // getters
  class Bank2 {
    public readonly id: number;
    public name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
    // getter
    get balance() {
      return this._balance;
    }
    // setter
    set addBalance(amount: number) {
      this._balance += amount;
    }
  }
  const poorMan2 = new Bank2(1, "Rafsan", 1000);
  const myBalance = poorMan2.balance; // in getter we don't need to call the method with () like in getBalance() method
  console.log(myBalance); // 1000

  poorMan2.addBalance = 150; // in setter we don't need to call the method with () like in addBalance() method

  //
}
