// 1: Syntax
// const - object will be a constant variable so its data type cannot be changed
// myObject - name of the object
// {} - curly braces to contain all the properties and methods of the object
// property - includes a key and a value; the key can be used to access the property value using dot notation or bracket notation
// method - a function belonging to an object



// 2: Me
const me = {
    name: "Ariel",
    age: 34,
    email: "ariel@foo.com"
};

// 2.3
console.log(me.name);

// 2.4
me['age'] = 43;

// 2.5
console.log(me.age);

// 2.6
me['place of residence'] = 'Bronx, NY';

// 2.7
console.log(me['place of residence']);


// 3: Slimer
const monster = {
    name: "Slimer",
    color: "greenish",
    type: "plasm or ghost or something"
};

// 3.1
console.log(monster.name);

// 3.2
monster.type = 'creature';

// 3.3
monster.age = 6;

// 3.4
console.log(monster);

// 3.5
monster.introduce = function() {
    console.log(`Hello, my name is ${this.name}. I'm ${this.age} years old. I'm a relatively young ${this.type}, I know.`);
}

monster.introduce();



// 4: Ogres
// 2 objects: Ogre and Adventurer
// they automatically battle
// turns occur until one character wins
// each turn, each character attacks the other character once
// ogre attacks with random value (Math.random())
// adventurer attacks with same value each time
// if either character's hit points are <= 0, the other character wins

function Character(name, hitpoints, attackValue) {
    this.name = name;
    this.hitpoints = hitpoints;
    this.attackValue = attackValue || 20;

    this.attack = function(enemy, damage) {
        // update the opponent's health
        enemy.hitpoints -= damage;
        // show each attack, how many hit points the person 
        // being attacked loses, and the updated stats
        console.log(`${this.name} does ${damage} damage! ${enemy.name}'s health is now ${enemy.hitpoints}!`);
    };
};

const generateRandomDamage = () => {
    return Math.floor(Math.random() * 15);
}

// Ogre object
const Ogre = new Character('Ogrus the Ogreful', 100, generateRandomDamage());


// Adventurer object
const Adventurer = new Character('Alvin the Anvil', 50);

// game can play out in a loop
// at the start of each turn, check to see if either character's health is at or below zero
// if so, declare the other character the winner
// if not, go into the next turn

// keep track of:
// total number of turns

const playGame = (player1, player2) => {
    // keep a gameOver variable to track whether or not one player has won
    let gameOver = false;

    const endGame = (winningPlayer) => {
        console.log(`Game Over! ${winningPlayer.name} wins!`);
        gameOver = true;
    }

    // keep track of the number of turns
    let currentTurn = 1;

    
    
    while (gameOver === false) {
        // show the current turn
        console.log(`Turn ${currentTurn}: `)

        // first player attacks the second player if they still have health
        player1.hitpoints > 0 
            ? player1.attack(player2, player1.attackValue)
            : endGame(player2);

        // second player attacks the first player if they still have health
        player2.hitpoints > 0
            ? player2.attack(player1, player2.attackValue)
            : endGame(player1);
        


        // if (player1.hitpoints <= 0) {
        //     console.log(`It's over! Down goes ${player1.name}! ${player2.name} wins!`);
        //     gameOver = true;
        // } else if (player2.hitpoints <= 0) {
        //     console.log(`It's over! Down goes ${player2.name}! ${player1.name} wins!`);
        //     gameOver = true;
        // } else {
        //     currentTurn++;
        // }
    };
};

playGame(Adventurer, Ogre);
