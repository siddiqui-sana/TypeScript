var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Generics Type
var arr = ["Sana", "Pushpa", "Raj"];
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("This is done");
    }, 2000);
});
function merge(obj1, obj2) {
}
//extends is used to restrict the type of object that can be passed to the function. So here we are restricting the type of object to Object type.
var mergedObj = merge({ name: "Sana" }, { age: 30 }); //Since we have addes constraints, we can't pass any other type of object to the function. T and U must be object only
console.log(mergedObj);
function countAndDescribe(n) {
    var descriptionText = "";
    if (n.length === 1) {
        descriptionText = "Got 1 element";
    }
    if (n.length > 1) {
        descriptionText = "Got " + n.length + " elements";
    }
    return [n, descriptionText];
}
console.log(countAndDescribe("Hi there!")); //Argument can be of any type such that it should have the length property.
//keyof Contraint
//Generic class
var Datastorage = /** @class */ (function () {
    function Datastorage() {
        this.data = []; //data is of an array of each value of type T
    }
    Datastorage.prototype.getData = function () {
        return __spreadArray([], this.data, true);
    };
    Datastorage.prototype.setData = function (val) {
        this.data.push(val);
    };
    Datastorage.prototype.removeData = function (val) {
        this.data.splice(this.data.indexOf(val), 1);
    };
    return Datastorage;
}());
var textStorage = new Datastorage(); //Setting the generic type to string  or any other as per need,
textStorage.setData("Sana");
textStorage.setData("Pushpa");
console.log(textStorage.getData());
