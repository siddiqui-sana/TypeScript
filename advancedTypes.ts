type Admin = {
    name :string;
    privilages: string[];
}

type Employee = {
    id: number;
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee; //Intersection type  so ElevetedEmployee will have all the properties of Admin and Employee.
type UnknownEmployee = Admin | Employee; //Union type so UnknownEmployee will have either Admin or Employee properties.

const Administrator: ElevatedEmployee = {
    name: "Sana",
    privilages: ["create-server"],
    id: 1,
    startDate: new Date()
}
console.log(Administrator);

const Pushpa: UnknownEmployee = {
    name: "Pushpa",
    id: 2,
    startDate: new Date()
}

//console.log(Pushpa.privilages); //Error because privilages is not a property of Employee type. So we will check first
if('privilages' in Pushpa){
    console.log(Pushpa.privilages);
}


//Discriminated union
interface Bird{
    type: "bird"; //Discriminated Union helps in describing and identifying the type of object.
    flyingSpeed: number;
}

interface Horse{
    type: "horse"
    runningSpeed: number;
}

type Animal = Bird | Horse;
function movingSpeed(animal: Animal){
    let speed;
    switch(animal.type){
        case 'bird':
            console.log(animal.flyingSpeed);
            break;
        case "horse":
            console.log(animal.runningSpeed);
            break;
    }
}
movingSpeed({type: "bird", flyingSpeed: 10});
movingSpeed({type: "horse", runningSpeed: 20});


//Index Properties
//Example: Suppose you want to perform input validation of the input fields. You can use index properties to do so.
//We will create an interface that will hold object, whetre key will be the input type(Ex: email, username etc) and value will be the corresponding error message that we want to display to user if input in that feild does not get validated
//But we want to create this interface flexible so it can work for any input validation in the app and not just specifically give theinput types.
//So we will use index properties to create this interface.
interface ErrorContainer{//{email: "Invalid email", username: "Username must start with a character"}
[key: string]: string; //Index property specifies that the key is of string type and value is also of string type.
}
//So we don't need to create separate properties for email and username. We can use this interface to create error messages for any input type in the form

const emailError: ErrorContainer = {
    email: "Not a valid email"
    //key can be of anytype that can be converted to string. So we can use number as key as well. bUt value will always be string because we have specified it in the interface.
}

const usernameError: ErrorContainer = {
    username: "Username must start with a character"
}

//Function overloads
type combinable = string | number;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;

function add(a:combinable, b: combinable){
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() +" "+ b.toString();
    }
    return a+b;
}

const result = add(5,5);
console.log(result);
const result1 = add("Sana", "Khan");
result1.split('')
console.log(result1);

//Optional chaining
const api={
    data: {
        discount: 10,
        name: "Milk",
        price: 70,
    }
}
// console.log(api?.data?.asd); //If data is not present in api object, it will not throw error. It will return undefined.

//NUllish Coalescing
const userInput = '';
const storedData = userInput || "Default"; //If userInput is null, it will return Default. But if userInput is 0, it will also return Default. So to avoid this, we can use nullish coalescing operator
const storedData1 = userInput ?? "Default"; //If userInput is null or undefined, it will return Default. But if userInput is 0, it will return 0. So it will only return default value if userInput is null or undefined.
console.log(storedData); // Default gets printed
console.log(storedData1); // '' gets printed