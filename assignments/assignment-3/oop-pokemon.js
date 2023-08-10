function Pokemon(name, type, moves, level, hp) {
    this.name = name.toUpperCase();
    this.type = type.charAt(0).toUpperCase() + type.slice(1);
    this.level = level;
    this.moves = moves;
    this.hp = hp;
}

Pokemon.prototype.calculatePokemonHp = function () {
    if (this.level === undefined) {
        this.level = 5;
    }
    return (this.hp = Math.floor(2.25 * this.level));
};

Pokemon.prototype.levelUp = function () {
    this.level++;
    this.hp = this.calculatePokemonHp();
    return this;
};

Pokemon.prototype.faint = function () {
    if (this.hp <= 0) {
        return true;
    }
    return false;
};

Pokemon.prototype.revive = function () {
    this.hp = this.calculatePokemonHp();
    return this;
};

Pokemon.prototype.findSecondVowel = function () {
    const VOWELS = "AEIOUaeiou";
    let firstVowelIndex = -1;
    for (let i = 0; i < this.name.length; i++) {
        if (VOWELS.includes(this.name[i])) {
            if (firstVowelIndex === -1) {
                firstVowelIndex = i;
            } else {
                return i;
            }
        }
    }
    return firstVowelIndex; // Return the index of the first vowel if no second vowel found
};

Pokemon.prototype.getNickname = function () {
    const secondVowelIndex = this.findSecondVowel();
    if (secondVowelIndex === -1) {
        return this.name;
    } else {
        return this.name.substring(0, secondVowelIndex + 1);
    }
};

Pokemon.prototype.call = function () {
    const nickname = this.getNickname();
    return `${nickname}-${nickname}`;
};

let electricTypeMoves = [
    { name: "Tackle", damage: 3 },
    { name: "Thunder Shock", damage: 4 },
    { name: "Charge Beam", damage: 5 },
    { name: "Thunder Wave", damage: 5 },
    { name: "Spark", damage: 7 },
    { name: "Thunder Punch", damage: 8 },
    { name: "Shock Wave", damage: 10 },
    { name: "Thunder Bolt", damage: 15 },
    { name: "Thunder", damage: 20 },
    { name: "Zap Cannon", damage: 30 },
    { name: "Electric Beam", damage: 35 }
];

let leafTypeMoves = [
    { name: "Absorb", damage: 2 },
    { name: "Tackle", damage: 3 },
    { name: "Bullet Seed", damage: 4 },
    { name: "Mega Drain", damage: 6 },
    { name: "Vine Whip", damage: 8 },
    { name: "Razor Leaf", damage: 15 },
    { name: "Giga Drain", damage: 18 },
    { name: "Seed Bomb", damage: 22 },
    { name: "Petal Dance", damage: 25 },
    { name: "Solar Beam", damage: 35 }
];

let rockTypeMoves = [
    { name: "Tackle", damage: 3 },
    { name: "Rollout", damage: 6 },
    { name: "Rock Blast", damage: 4 },
    { name: "Smack Down", damage: 10 },
    { name: "Rock Throw", damage: 20 },
    { name: "Rock Slide", damage: 30 },
    { name: "Head Smash", damage: 40 },
    { name: "Rock Wrecker", damage: 50 }
];

Pokemon.prototype.availableMoves = function () {
    const maxLevel = 50;
    const levelFraction = this.level / maxLevel;
    const availableMovesCount = Math.ceil(this.moves.length * levelFraction);
    const movesToReturn = this.moves.slice(0, Math.max(availableMovesCount, 1));
    return movesToReturn;
};

Pokemon.prototype.attack = function (opponent, moveName) {
    let selectedMove = this.moves[0]; // By default, use the first move if moveName is not provided or found
    if (moveName) {
        // If moveName is provided, find the corresponding move
        selectedMove = this.moves.find((move) => move.name === moveName);
    }

    // If the move is not found, use the first move as a fallback
    if (!selectedMove) {
        selectedMove = this.moves[0];
    }

    const damage = selectedMove.damage;
    opponent.hp -= damage;

    console.log(`${this.name} attacked with ${selectedMove.name}!`);
    console.log(`Damage to ${opponent.name}: ${damage}`);
    console.log(`${this.name} hp: ${this.hp}`);
    console.log(`${opponent.name} hp: ${opponent.hp <= 0 ? 0 : opponent.hp}`);
};

let pikachu = new Pokemon("PIKACHU", "Electric", electricTypeMoves, 10);

pikachu.calculatePokemonHp();
pikachu.levelUp();
pikachu.faint();
pikachu.revive();

console.log(pikachu.call());
console.log(pikachu);

console.log(pikachu.availableMoves());

let bulbasaur = new Pokemon("bulbasaur", "leaf", leafTypeMoves, 11);
bulbasaur.calculatePokemonHp();
bulbasaur.levelUp();
bulbasaur.faint();
bulbasaur.revive();

console.log(bulbasaur.availableMoves());
console.log(bulbasaur);

console.log(bulbasaur.availableMoves());

let onyx = new Pokemon("onyx", "rock", rockTypeMoves);

onyx.calculatePokemonHp();
onyx.levelUp();
onyx.faint();
onyx.revive();

console.log(onyx.call());
console.log(onyx);

console.log(onyx.availableMoves());
onyx.attack(pikachu);

pikachu.attack(bulbasaur, "Tackle");
bulbasaur.attack(pikachu, "Absorb");
onyx.attack(pikachu);
