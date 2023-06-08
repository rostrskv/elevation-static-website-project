"use strict";
const coffeeShop = {
    beans: 40,

    drinkRequirements: {
        latte: { beanRequirement: 10, price: 5 },
        americano: { beanRequirement: 5, price: 4 },
        doubleShot: { beanRequirement: 15, price: 10 },
        frenchPress: { beanRequirement: 12, price: 10 }
    },

    money: 1000,

    beanPrice: 10,

    makeDrink: function (drinkType) {
        if (!this.drinkRequirements[drinkType]) {
            console.log("Sorry, we don't make ", drinkType);
            return;
        }
        if (this.drinkRequirements[drinkType].beanRequirement > this.beans) {
            console.log("Sorry, we’re all out of beans!");
            return;
        }
        this.beans -= this.drinkRequirements[drinkType].beanRequirement;
        console.log("Here's your", drinkType);
    },
    buyDrink: function (drinkType) {
        if (!this.drinkRequirements[drinkType]) {
            console.log("Sorry, we don't make ", drinkType);
            return;
        }
        this.money += this.drinkRequirements[drinkType].price;
        this.makeDrink(drinkType);
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

coffeeShop.buyDrink("latte");
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.buyDrink("doubleShot");
coffeeShop.buyDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
coffeeShop.buyBeans(200);
coffeeShop.buyBeans(20);
coffeeShop.buyDrink("frenchPress");
