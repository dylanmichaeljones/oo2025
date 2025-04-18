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

    static getPotionPrice(size): number {
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

