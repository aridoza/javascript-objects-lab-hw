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
