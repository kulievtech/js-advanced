class Good {
    constructor(id, name, quantity, price) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}

class Inventory {
    constructor() {
        this.goods = [];
    }

    addGood(good) {
        for (let i = 0; i < this.goods.length; i++) {
            const singleGood = this.goods[i];

            if (singleGood.id === good.id) {
                throw new Error("Good already exists in the inventory.");
            }
        }
        this.goods.push(good);
    }

    removeGood(id) {
        for (let i = 0; i < this.goods.length; i++) {
            const singleGood = this.goods[i];

            if (singleGood.id !== id) {
                throw new Error("Good not found in the inventory.");
            }
        }
        this.goods.splice(i, 1);
    }

    updateGood(id, updatedGood) {
        for (let i = 0; i < this.goods.length; i++) {
            const singleGood = this.goods[i];

            if (singleGood.id !== id) {
                throw new Error("Good not found in the inventory.");
            }
        }
        singleGood = updatedGood;
    }
}
