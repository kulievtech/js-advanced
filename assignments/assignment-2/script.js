function Pet(name, hunger, happiness) {
    this.name = name;
    this.hunger = hunger;
    this.happiness = happiness;
}

Pet.prototype.eat = function () {
    this.happiness++;
    if (this.hunger - 1 >= 0) {
        this.hunger--;
    }
};

Pet.prototype.play = function () {
    this.happiness += 2;
    this.hunger += 1;
};

Pet.prototype.sleep = function () {
    this.hunger++;
};

Pet.prototype.status = function () {
    if (this.hunger < 3) {
        return `${this.name} is really hungry`;
    }
    return `${this.name} is feeling great`;
};

Pet.prototype.getOlder = function () {
    this.happiness--;
    this.hunger++;
};

Pet.prototype.introduce = function () {
    return `Hey my name is ${this.name}, my hunger level is ${this.hunger} and my happiness level is ${this.happiness}`;
};

Pet.prototype.timeout = function () {
    const initialHappiness = this.happiness;
    this.happiness = 0;
    return `My happiness level was ${initialHappiness}, but now it is ${this.happiness}`;
};

const pet1 = new Pet("Bobik", 0, 10);

pet1.eat();
pet1.play();
pet1.sleep();

console.log(pet1.status()); // "Bobik is feeling great!"
pet1.getOlder();
console.log(pet1.status()); // "Bobik is feeling okay."

console.log(pet1.introduce()); // output: "Hey my name is Bobik, my hunger level is 3 and my happiness level is 12"
console.log(pet1.timeout()); // output: "My happiness level was 12, but now it is 0"
