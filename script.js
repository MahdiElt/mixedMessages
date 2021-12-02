const console = require("node:console");

const charInfo = {                                            // Creating object that has all the components that will be generated into messsage
    charRace: ['Elf', 'Dwarf', 'Human', 'Gnome', 'Khajit', 'Dranei', 'Satyr' ],
    charClass: ['Mage', 'Warrior', 'Rogue', 'Hunter'],
    charWeapon: ['Sword', 'Great Hammer', 'Battleaxe', 'Bow and Arrow', 'Spear']
}

let createdChar = []; // Array to hold generated message

const randNum = n => {           // Will use this function to randomly select components for generated message
    return Math.floor(Math.random()*n)    
}

for (let info in charInfo ) {
    createdChar.push(charInfo[info][randNum(charInfo[info].length)])
};

console.log(createdChar)