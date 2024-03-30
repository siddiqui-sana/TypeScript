//Object Types

const Player: {
    name: string; //Defining the Object Type here in curly braces. This won't create some object, it is just for Ts to understand what value types need to be put in the actual object. 
    gold: number;
    alive: boolean;
    tupleArr: [number, string] //Tuple now fixed to have two values only, first one of number type nad second of string type.
} = {
    name: "Barfi", //Defining the actual object
    gold: 40,
    alive: false,
    tupleArr: [2, 'Siddiqui'] //Tuple, if this whould have been an array, it could have taken both number or string values at any places.
}

let favActivity: string[] = ["Scuba Diving", "Swimming", "Cycling", "Music"]; //Only strings allowed
for(let i=0; i<favActivity.length; i ++){
    console.log(favActivity[i].toUpperCase()) //Type Inference will allow all the string operations for 
                                                //this array as its values types is also string.
}

let game: any[] = [1, "sana", true] //Free to fill array with any type value
console.log(game, favActivity)
console.log(Player.gold)
console.log(Player.alive)

// Player.tupleArr[1] = 10 Gives error because we have fixed the that tupleArr[1] can only be a string
Player.tupleArr[1] = 'Sana'
console.log(Player.tupleArr) //Output: 2 [2, 'Sana]

Player.tupleArr.push('Admin') //push will work, it is an exception which can add more values to tuple, although we said that it has fixed length.
// Player.tupleArr = [3, 'Sana', 'Siddiqui'] Adding other value like like will throw error.

//** Enums **//
enum Role {ADMIN, ROLL, SCHOOL} //ADMIN takes 0, ROLL takes 1, SCHOOL takes 2 and now it can be used anywhere in the code
console.log(Role.ADMIN) //OUTPUT: 0

//Can assign any values instead 0 1 2. 
enum Role2 {APPLE=5, BANANA='banana'}

enum Role3 {ORANGE=10, KIWI} //kIWI will by default get value 11 now, since its previous key has value 10
console.log(Role3.KIWI)

//any type: The variable can hold any type of value. Always avoid this
let thiscanbeanything: any
thiscanbeanything='Sana'
console.log(thiscanbeanything)

thiscanbeanything= false
console.log(thiscanbeanything)
