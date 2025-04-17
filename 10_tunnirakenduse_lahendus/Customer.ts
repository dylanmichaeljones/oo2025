class Customer {
    name: string;
    className: string;
    accountBalance: number;
    returningCustomer: boolean;

    constructor(name: string, className: string, accountBalance: number, returningCustomer: boolean) {
        this.name = name;
        this.className = className;
        this.accountBalance = accountBalance;
    }
    addBalance(amountToAdd: number): number {
        return this.accountBalance += amountToAdd;
    }

    becomeReturningCustomer(): void {
        if (this.returningCustomer == false) {
            document.querySelector("registerAccount");
            this.returningCustomer = true;
            this.accountBalance -= 10;
        } else {
            console.log("You already have returning customer status!");
        }
    }

    displayCustomerDetails(): void {
        console.table(`Full name: ${this.name}, class: ${this.className}, account balance: ${this.accountBalance}`);
    }
}

let mage1: Customer = new Customer("Merlin", "mage", 10, true);
mage1.displayCustomerDetails();