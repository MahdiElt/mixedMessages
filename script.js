const console = require("node:console");
const charGenerator = () => 
    {const charInfo = {                                            // Creating object that has all the components that will be generated into messsage
        charRace: ['Elf', 'Dwarf', 'Human', 'Gnome', 'Khajit', 'Dranei', 'Satyr', 'Werewolf' ],
        charClass: ['Mage', 'Warrior', 'Rogue', 'Hunter', 'Fighter', 'Warlock', 'Druid'],
        charWeapon: ['Sword', 'Great Hammer', 'Battleaxe', 'Bow and Arrow', 'Spear', 'Unarmed']
    }

    let createdChar = []; // Array to hold generated message

    const randNum = n => {           // Will use this function to randomly select components for generated message
        return Math.floor(Math.random()*n)    
        }

    for (let info in charInfo ) {
        createdChar.push(charInfo[info][randNum(charInfo[info].length)])   // add in each randomly selected property to empty array
    };

    return console.log( ' ' + `Your Race is: ${createdChar[0]} \n\ Your Class is: ${createdChar[1]} \n\ Your Weapon is: ${createdChar[2]}`)}
// format and log generated message

charGenerator()
charGenerator()
charGenerator()