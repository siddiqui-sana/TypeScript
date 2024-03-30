function combinee(n1: number, n2: number): number { //number outside the parameters bracket specifies the return type of the function
    return n1+n2
}
console.log(combinee(8,7));

//** Function as Types **//
function addNums(n1: number, n2: number){
    return n1+n2
}

let holdsFunction: Function = addNums //Function as a type
console.log(holdsFunction(10, 20));
//But this holdFunction can be updated to hold any other function as well. So in order to 

//prevent that we use Function types, that describe the parameters an the return type of the function.

//This is how the Function types are defined:
let holdsSpecificTypeFunction: (a: string, b: string) => number; //After the arrow we specify the return type of the function that this variable can hold.
//In the () we specify the type of the parameters
//Now the varialbe holdsSpecificTypeFunctin can only hold a functin that takes two parameters of
// string type and returns a number. Other than that of tried, will give error

function combineStringReturnNumber(s1 :string, s2: string){ //Takes 2 string input
    return +s1 + +s2 //Returns number
}

holdsSpecificTypeFunction = combineStringReturnNumber
console.log(holdsSpecificTypeFunction('5', '5'));

//** Callbacks */
function giveSum(n1: number, n2: number, cb: (res: number)=>void){
    const res = n1+n2;
    cb(res);
}

function cb(res: number){
    console.log(res);
}
giveSum(10, 15, cb);

