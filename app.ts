
//Generics Type
const arr: Array<string> = ["Sana", "Pushpa", "Raj"];
const promise = new Promise<string>((resolve,reject) => {
    setTimeout(()=>{
        resolve("This is done");
    }, 2000);
})

function merge<T extends object,U extends object>(obj1: T, obj2: U){ //If we hadn't given <T,U>, then it would be infered as object. But an unknown object, so its values wouldn't be accessible from  obj1 and obj2..
}
//extends is used to restrict the type of object that can be passed to the function. So here we are restricting the type of object to Object type.

const mergedObj = merge({name: "Sana"}, {age: 30}); //Since we have addes constraints, we can't pass any other type of object to the function. T and U must be object only
console.log(mergedObj);


//Another Generic Function

interface Lengthy{
    length : number;
}

function countAndDescribe<T extends Lengthy>(n: T): [T, string]{ //Lengthy is an interface which has length property. So we are restricting the type of object that can be passed to the function.
    let descriptionText: string = "";
    if(n.length ===1){
        descriptionText = "Got 1 element";
    }
    if(n.length>1){
        descriptionText = "Got " + n.length + " elements";
    }
    return [n, descriptionText]
}
console.log(countAndDescribe("Hi there!")); //Argument can be of any type such that it should have the length property.

//keyof Contraint
//Generic class
class Datastorage<T extends string|number|boolean>{
    private data: T[] = []; //data is of an array of each value of type T
    getData(){
        return [...this.data];
    }
    setData(val: T){
        this.data.push(val);
    }
    removeData(val: T){
        this.data.splice(this.data.indexOf(val), 1);
    }
}

const textStorage = new Datastorage<string>(); //Setting the generic type to string  or any other as per need,
textStorage.setData("Sana");
textStorage.setData("Pushpa");

console.log(textStorage.getData());
