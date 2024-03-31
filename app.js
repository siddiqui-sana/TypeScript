var Administrator = {
    name: "Sana",
    privilages: ["create-server"],
    id: 1,
    startDate: new Date()
};
console.log(Administrator);
var Pushpa = {
    name: "Pushpa",
    id: 2,
    startDate: new Date()
};
//console.log(Pushpa.privilages); //Error because privilages is not a property of Employee type. So we will check first
if ('privilages' in Pushpa) {
    console.log(Pushpa.privilages);
}
function movingSpeed(animal) {
    var speed;
    switch (animal.type) {
        case 'bird':
            console.log(animal.flyingSpeed);
            break;
        case "horse":
            console.log(animal.runningSpeed);
            break;
    }
}
movingSpeed({ type: "bird", flyingSpeed: 10 });
movingSpeed({ type: "horse", runningSpeed: 20 });
//So we don't need to create separate properties for email and username. We can use this interface to create error messages for any input type in the form
var emailError = {
    email: "Not a valid email"
    //key can be of anytype that can be converted to string. So we can use number as key as well. bUt value will always be string because we have specified it in the interface.
};
var usernameError = {
    username: "Username must start with a character"
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + " " + b.toString();
    }
    return a + b;
}
var result = add(5, 5);
console.log(result);
var result1 = add("Sana", "Khan");
result1.split('');
console.log(result1);
//Optional chaining
var api = {
    data: {
        discount: 10,
        name: "Milk",
        price: 70,
    }
};
// console.log(api?.data?.asd); //If data is not present in api object, it will not throw error. It will return undefined.
//NUllish Coalescing
var userInput = null;
var storedData = userInput || "Default"; //If userInput is null, it will return Default. But if userInput is 0, it will also return Default. So to avoid this, we can use nullish coalescing operator
console.log(storedData);
