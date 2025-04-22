var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Customer = /** @class */ (function () {
    function Customer(name, className, accountBalance, returningCustomer) {
        this.name = name;
        this.className = className;
        this.accountBalance = accountBalance;
        this.returningCustomer = returningCustomer;
    }
    Customer.prototype.addBalance = function (amountToAdd) {
        return this.accountBalance += amountToAdd;
    };
    Customer.prototype.becomeReturningCustomer = function () {
        if (this.returningCustomer == false) {
            document.querySelector("#registerAccount");
            this.returningCustomer = true;
            this.accountBalance -= 10;
        }
        else {
            console.log("You already have returning customer status!");
        }
    };
    Customer.prototype.displayCustomerDetails = function () {
        console.table({
            "Full name": this.name,
            "Class": this.className,
            "Account balance": this.accountBalance,
            "Customer status": this.returningCustomer
        });
    };
    return Customer;
}());
var mage1 = new Customer("Merlin", "mage", 10, true);
mage1.displayCustomerDetails();
mage1.addBalance(20);
mage1.displayCustomerDetails();
var Potion = /** @class */ (function () {
    function Potion(type, size, price) {
        this.type = type;
        this.size = size;
        this.price = price;
    }
    Potion.getPotionPrice = function (size) {
        if (size == "small") {
            return 10;
        }
        else if (size == "medium") {
            return 20;
        }
        else {
            return 30;
        }
    };
    return Potion;
}());
var HealthPotion = /** @class */ (function (_super) {
    __extends(HealthPotion, _super);
    function HealthPotion(size) {
        return _super.call(this, "health", size, HealthPotion.getPotionPrice(size)) || this;
    }
    return HealthPotion;
}(Potion));
var ManaPotion = /** @class */ (function (_super) {
    __extends(ManaPotion, _super);
    function ManaPotion(size) {
        return _super.call(this, "mana", size, ManaPotion.getPotionPrice(size)) || this;
    }
    return ManaPotion;
}(Potion));
var StaminaPotion = /** @class */ (function (_super) {
    __extends(StaminaPotion, _super);
    function StaminaPotion(size) {
        return _super.call(this, "stamina", size, StaminaPotion.getPotionPrice(size)) || this;
    }
    return StaminaPotion;
}(Potion));
var smallHP = new HealthPotion("small");
console.log("This potion costs ".concat(smallHP.price, " gold."));
var Cart = /** @class */ (function () {
    function Cart() {
        this.items = [];
    }
    Cart.prototype.addItem = function (potion, quantity) {
        this.items.push({ potion: potion, quantity: quantity });
    };
    Cart.prototype.removeItem = function (potion) {
        this.items = this.items.filter(function (item) { return !(item.potion.type == potion.type && item.potion.size == potion.size); });
    };
    Cart.prototype.displayCart = function () {
        console.log(this.items);
    };
    Cart.prototype.finalizePurchase = function (customer) {
        var totalCost = 0;
        for (var i = 0; i < this.items.length; i++) {
            totalCost += this.items[i].potion.price * this.items[i].quantity;
        }
        console.log("The total price is: ".concat(totalCost));
        if (customer.accountBalance >= totalCost) {
            console.log("Purchase finalized. Thank you for shopping!");
            customer.accountBalance -= totalCost;
            this.items = [];
        }
        else {
            console.log("You do not have enough balance to complete the purchase. Remove items from the cart or add more balance to your account.");
        }
    };
    return Cart;
}());
var cart1 = new Cart();
cart1.displayCart();
cart1.addItem(smallHP, 1);
cart1.displayCart();
cart1.finalizePurchase(mage1);
mage1.displayCustomerDetails();
cart1.displayCart();
