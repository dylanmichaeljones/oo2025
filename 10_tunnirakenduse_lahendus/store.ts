class Customer {
    name: string;
    className: string;
    accountBalance: number;
    returningCustomer: boolean;

    constructor(name: string, className: string, accountBalance: number, returningCustomer: boolean) {
        this.name = name;
        this.className = className;
        this.accountBalance = accountBalance;
        this.returningCustomer = returningCustomer;
    }
    
    addBalance(amountToAdd: number): number {
        return this.accountBalance += amountToAdd;
    }

    becomeReturningCustomer(): void {
        if (this.returningCustomer == false) {
            document.querySelector("#registerAccount");
            this.returningCustomer = true;
            this.accountBalance -= 10;
        } else {
            console.log("You already have returning customer status!");
        }
    }

    displayCustomerDetails(): void {
        console.table({
            "Full name": this.name,
            "Class": this.className,
            "Account balance": this.accountBalance,
            "Customer status": this.returningCustomer
        });
    }
}

let mage1: Customer = new Customer("Merlin", "mage", 10, true);
mage1.displayCustomerDetails();
mage1.addBalance(20)
mage1.displayCustomerDetails();



type potionSize = "small" | "medium" | "large";

abstract class Potion {
    type: string;
    size: potionSize;
    price: number;
    constructor(type:string, size: potionSize, price: number) {
        this.type = type;
        this.size = size;
        this.price = price;
    }

    static getPotionPrice(size: potionSize): number {
        if (size == "small") {
            return 10;
        } else if (size == "medium") {
            return 20;
        } else {
            return 30;
        }
    }
}

class HealthPotion extends Potion {
    constructor(size: potionSize) {
        super("health", size, HealthPotion.getPotionPrice(size));
    }
}

class ManaPotion extends Potion {
    constructor(size: potionSize) {
        super("mana", size, ManaPotion.getPotionPrice(size));
    }
}

class StaminaPotion extends Potion {
    constructor(size: potionSize) {
        super("stamina", size, StaminaPotion.getPotionPrice(size));
    }
}

let smallHP = new HealthPotion("small"); 

console.log(`This potion costs ${smallHP.price} gold.`);

class Cart {
    items: {potion: Potion, quantity: number}[] = []
    
    addItem(potion: Potion, quantity: number) {
        this.items.push({potion, quantity});
    }
    removeItem(potion: Potion): void {
        this.items = this.items.filter(
            item => !(item.potion.type == potion.type && item.potion.size == potion.size)
        );
    }

    displayCart() {
        console.log(this.items);
    }

    finalizePurchase(customer: Customer) {
        let totalCost = 0;
        for(let i=0; i<this.items.length; i++) {
            totalCost += this.items[i].potion.price * this.items[i].quantity;
        }
        console.log(`The total price is: ${totalCost}`);

        if (customer.accountBalance >= totalCost) {
            console.log("Purchase finalized. Thank you for shopping!");
            customer.accountBalance -= totalCost;
            this.items = [];
        } else {
            console.log("You do not have enough balance to complete the purchase. Remove items from the cart or add more balance to your account.")
        }
    }
}

let cart1 = new Cart();
cart1.displayCart();
cart1.addItem(smallHP, 1);
cart1.displayCart();

cart1.finalizePurchase(mage1);
mage1.displayCustomerDetails();
cart1.displayCart();