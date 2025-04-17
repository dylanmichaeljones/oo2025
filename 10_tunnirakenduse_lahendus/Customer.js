var Customer = /** @class */ (function () {
    function Customer(name, className, accountBalance, returningCustomer) {
        this.name = name;
        this.className = className;
        this.accountBalance = accountBalance;
    }
    Customer.prototype.addBalance = function (amountToAdd) {
        return this.accountBalance += amountToAdd;
    };
    Customer.prototype.becomeReturningCustomer = function () {
        if (this.returningCustomer == false) {
            document.querySelector("registerAccount");
            this.returningCustomer = true;
            this.accountBalance -= 10;
        }
        else {
            console.log("You already have returning customer status!");
        }
    };
    Customer.prototype.displayCustomerDetails = function () {
        console.table("Full name: ".concat(this.name, ", class: ").concat(this.className, ", account balance: ").concat(this.accountBalance));
    };
    return Customer;
}());
var mage1 = new Customer("Merlin", "mage", 10, true);
mage1.displayCustomerDetails();
