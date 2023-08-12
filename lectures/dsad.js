sellGood(id, quantity) {
    for (let i = 0; i < this.goods.length; i++) {
        const item = this.goods[i];
        if (item.id === id) {
            if (item.quantity < quantity) {
                throw new Error("Not enough quantity in stock.");
            }
            item.quantity -= quantity;
            return {
                id: id,
                name: item.name,
                sold: quantity,
                remaining: item.quantity
            };
        }
    }
    throw new Error("Good not found in inventory.");
}