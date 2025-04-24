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
var _a;
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
        document.getElementById("#customerDetails");
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
        if (size == "Small") {
            return 10;
        }
        else if (size == "Medium") {
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
        return _super.call(this, "Health", size, HealthPotion.getPotionPrice(size)) || this;
    }
    return HealthPotion;
}(Potion));
var ManaPotion = /** @class */ (function (_super) {
    __extends(ManaPotion, _super);
    function ManaPotion(size) {
        return _super.call(this, "Mana", size, ManaPotion.getPotionPrice(size)) || this;
    }
    return ManaPotion;
}(Potion));
var StaminaPotion = /** @class */ (function (_super) {
    __extends(StaminaPotion, _super);
    function StaminaPotion(size) {
        return _super.call(this, "Stamina", size, StaminaPotion.getPotionPrice(size)) || this;
    }
    return StaminaPotion;
}(Potion));
var potions = [
    new HealthPotion("Small"),
    new HealthPotion("Medium"),
    new HealthPotion("Large"),
    new ManaPotion("Small"),
    new ManaPotion("Medium"),
    new ManaPotion("Large"),
    new StaminaPotion("Small"),
    new StaminaPotion("Medium"),
    new StaminaPotion("Large"),
];
var cart = new Cart();
function potionList() {
    var potionStock = document.getElementById("potionStock");
    for (var i = 0; i < potions.length; i++) {
        var potionSlot = document.createElement("div");
        potionSlot.innerHTML = "\n            <h3>".concat(potions[i].size, " ").concat(potions[i].type, " Potion</h3>\n            <p>Price: ").concat(potions[i].price, " gold</p>\n            <button class=\"add-to-cart\" data-index=\"").concat(i, "\">Add to cart</button>\n        ");
        potionStock === null || potionStock === void 0 ? void 0 : potionStock.appendChild(potionSlot);
    }
    // Add event listeners to "Add to cart" buttons
    var addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            var index = event.target.getAttribute("data-index");
            if (index) {
                var potion = potions[parseInt(index)];
                cart.addItem(potion, 1); // Add 1 potion to cart (modify quantity as needed)
                updateCartDisplay();
                updateCartTotal();
            }
        });
    });
}
function updateCartDisplay() {
    var cartContainer = document.getElementById("cartTotal");
    if (!cartContainer)
        return;
    cartContainer.innerHTML = ""; // Clear the current cart display
    if (cart.items.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }
    var cartList = document.createElement("ul");
    cart.items.forEach(function (item) {
        var listItem = document.createElement("li");
        listItem.textContent = "".concat(item.quantity, " x ").concat(item.potion.size, " ").concat(item.potion.type, " Potion - ").concat(item.potion.price * item.quantity, " gold");
        cartList.appendChild(listItem);
    });
    cartContainer.appendChild(cartList);
}
function updateCartTotal() {
    var totalCost = 0;
    cart.items.forEach(function (item) {
        totalCost += item.potion.price * item.quantity;
    });
    var totalElement = document.getElementById("cartTotal");
    if (totalElement) {
        totalElement.innerHTML += "<p>Total: ".concat(totalCost, " gold</p>");
    }
}
(_a = document.getElementById("purchaseBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    cart.finalizePurchase(mage1); // Use the appropriate customer (like mage1)
    updateCartDisplay();
    updateCartTotal();
});
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
// Initialize potion display
potionList();
