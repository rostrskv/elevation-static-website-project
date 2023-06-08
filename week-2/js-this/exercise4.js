const tipJar = {
    coinCount: 20,
    tip: function () {
        this.coinCount += 1;
    },
    stealCoins: function (coins) {
        this.coinCount -= coins;
    }
};

tipJar.tip();
console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);

tipJar.stealCoins(3);
console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);

tipJar.stealCoins(10);
console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);