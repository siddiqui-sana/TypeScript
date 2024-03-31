//Fucntion Types using tyoe keyword:
type AddFn = (a: number, b: number) => number;

//How to define interface of a function that works same as function type using type kyword
interface FunctionInterface {
    (a: number, b: number): number; //a, b: Input parameters, number: Return type
}

interface Name{
    readonly name: string; //Readonly property
    surname?: string; //Optional property which may or may not be present
}

interface Person extends Name {
    hobbies: string[];

    greet(value: string): void;
}

type PersonType = {
    name: string;
    hobbies: string[];

    greet(value: string): void;
}
//What is the difference between interface and type? Both showing same output
let person1: Person;

person1 = {
    name: "Sana",
    hobbies: ["Singing", "Cooking", "Table Tennis"],
    greet(value: string){
        console.log("Person greets you with " + value);
    }
}

person1.greet("Hello");

let person2: PersonType;

person2 = {
    name: "Sana",
    hobbies: ["Singing", "Cooking", "Table Tennis"],
    greet(value: string){
        console.log("Person greets you with " + value);
    }
}

person2.greet("Hello");

class PersonClass implements Person {
    name: string;
    surname?: string;
    hobbies: string[];
    age = 30; //Type inference

    constructor(name: string, hobbies: string[], surname?: string){
        this.name = name;
        this.hobbies = hobbies
        if(surname){
            this.surname =  surname;
        }
    }

    greet(value: string){
        console.log(value);
    }
}
let user1: Person; //Can be declared as both interfac or class that implements that interface type
user1 = new PersonClass("Sana", ["Cooking", "Table Tennis"]);
user1.greet("Hello");
console.log(user1);
//user1.name("Sana Siddiqui"); //Cannot assign to 'name' because it is a read-only property.

let fn: AddFn;
fn = (a: number, b: number) =>
{
    return a+b;
}

let fun: FunctionInterface = (a: number, b:number) => a+b;