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
    function ManaPotion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ManaPotion;
}(Potion));
var StaminaPotion = /** @class */ (function (_super) {
    __extends(StaminaPotion, _super);
    function StaminaPotion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StaminaPotion;
}(Potion));
var smallHP = new HealthPotion("small");
console.log("This potion costs ".concat(smallHP.price, " gold."));
