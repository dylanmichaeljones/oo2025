type potionSize = "small" | "medium" | "large";

abstract class Potion {
    constructor(size: potionSize, price: number) {}
}

abstract class HealthPotion extends Potion {
    constructor(type: string, ) {
        super();
    }
}

abstract class ManaPotion extends Potion {

}

abstract class StaminaPotion extends Potion {

}

class SmallHealthPotion extends HealthPotion {
    price = 10;
}

