//Custom Types/Alias
type Combinable = number | string;
type ConversionDescriptor = 'as-text' | 'as-number';
//So instead of specifiying the type as number|string  we can specify the type as 'Combinable' (See line 7)

function combine(input1: Combinable, input2: Combinable, resType: ConversionDescriptor ){ //The | specifies that the type of input can be either the number or the string
    if(typeof input1 == 'string' && typeof input2 == 'string' && resType == 'as-number'){
        console.log("Both are interger strings and there sum is: ", +input1 + +input2) //50
    }
    else(
    console.log(input1, input2))
}

combine('30', '20', 'as-number') //resType is example of literal Type