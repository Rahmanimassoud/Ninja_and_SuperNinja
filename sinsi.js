class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log('the Ninja Name is ' + this.name);
    };
    showStats() {
        console.log('Name: ' + this.name + ', Health: ' + this.health + ', Strength: ' + this.strength + ', Speed: ' + this.speed);
    };
    drinkSake() {
        this.health += 10;
    };
}
const ninja1 = new Ninja("Sam")
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

console.log("=============Sensi Class================");

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.strength = 10;
        this.speed = 10;
        this.wisdom = 10;
    }
    speakWisdom() {
        const drink = super.drinkSake();
        drink;
        console.log("Wisdom: " + this.wisdom + ", Practice makes perfect")
        return this;
    }
    showStatsWis() {
        const stats = super.showStats();
        stats;
        console.log("Wisdom: " + this.wisdom);
        return this;
    }
}

const SuperNinja = new Sensei("Master Splinter");
SuperNinja.speakWisdom();
SuperNinja.showStatsWis();
