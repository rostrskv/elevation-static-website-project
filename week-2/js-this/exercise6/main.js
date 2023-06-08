"use strict";
const coffeeShop = {
    beans: 40,

    drinkRequirements: {
        latte: 10,
        americano: 5,
        doubleShot: 15,
        frenchPress: 12
    },

    money: 1000,

    beanPrice: 10,

    makeDrink: function (drinkType) {
        if (!this.drinkRequirements[drinkType]) {
            console.log("Sorry, we don't make ", drinkType);
            return;
        }
        if (this.drinkRequirements[drinkType] > this.beans) {
            console.log("Sorry, we’re all out of beans!");
            return;
        }
        this.beans -= this.drinkRequirements[drinkType];
        console.log("Here's your", drinkType);
    },
    buyBeans: function (numBeans) {
        const totalPrice = numBeans * this.beanPrice;
        if (totalPrice > this.money) {
            console.log(`We only have ${this.money}, not enough to buy ${this.beans} beans`);
            return;
        }
        this.money -= totalPrice;
        this.beans += numBeans;
        console.log(`Bought ${numBeans} beans, now we have ${this.beans} beans`);
    }
}

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
coffeeShop.buyBeans(200);
coffeeShop.buyBeans(20);
coffeeShop.makeDrink("frenchPress");
