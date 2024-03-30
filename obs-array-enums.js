"use strict";
//Object Types
const Player = {
    name: "Barfi", //Defining the actual object
    gold: 40,
    alive: false,
    tupleArr: [2, 'Siddiqui'] //Tuple, if this whould have been an array, it could have taken both number or string values at any places.
};
let favActivity = ["Scuba Diving", "Swimming", "Cycling", "Music"]; //Only strings allowed
for (let i = 0; i < favActivity.length; i++) {
    console.log(favActivity[i].toUpperCase()); //Type Inference will allow all the string operations for 
    //this array as its values types is also string.
}
let game = [1, "sana", true]; //Free to fill array with any type value
console.log(game, favActivity);
console.log(Player.gold);
console.log(Player.alive);
// Player.tupleArr[1] = 10 Gives error because we have fixed the that tupleArr[1] can only be a string
Player.tupleArr[1] = 'Sana';
console.log(Player.tupleArr); //Output: 2 [2, 'Sana]
Player.tupleArr.push('Admin'); //push will work, it is an exception which can add more values to tuple, although we said that it has fixed length.
// Player.tupleArr = [3, 'Sana', 'Siddiqui'] Adding other value like like will throw error.
//** Enums **//
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["ROLL"] = 1] = "ROLL";
    Role[Role["SCHOOL"] = 2] = "SCHOOL";
})(Role || (Role = {})); //ADMIN takes 0, ROLL takes 1, SCHOOL takes 2 and now it can be used anywhere in the code
console.log(Role.ADMIN); //OUTPUT: 0
//Can assign any values instead 0 1 2. 
var Role2;
(function (Role2) {
    Role2[Role2["APPLE"] = 5] = "APPLE";
    Role2["BANANA"] = "banana";
})(Role2 || (Role2 = {}));
var Role3;
(function (Role3) {
    Role3[Role3["ORANGE"] = 10] = "ORANGE";
    Role3[Role3["KIWI"] = 11] = "KIWI";
})(Role3 || (Role3 = {})); //kIWI will by default get value 11 now, since its previous key has value 10
console.log(Role3.KIWI);
//any type: The variable can hold any type of value. Always avoid this
let thiscanbeanything;
thiscanbeanything = 'Sana';
console.log(thiscanbeanything);
thiscanbeanything = false;
console.log(thiscanbeanything);
