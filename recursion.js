/*  
    1 - Using iteration, write a function fibs which takes a number and returns an array
        containing that many numbers from the Fibonacci sequence. Using an example 
        input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].
    2 - Now write another function fibsRec which solves the same problem recursively.
    3 - Test both versions of your functions by passing in various lengths as arguments.
*/

//Using iteration
function fibs ( amount ) {
    let fibArray = [];
    for(let i = 0; i < amount; i++){
        if(i == 0){
            fibArray[i] = 0;
        }else if(i == 1){
            fibArray[i] = 1;
        }else{
            fibArray[i] = fibArray[i-1] + fibArray[i-2]
        };
    };
    return fibArray;
};

console.log(fibs(8));

//Using recursion
function fibsRec ( amount = 2, fibArray = [ 0, 1 ] ) {
    
    console.log("This was printed recursively");

    if ( fibArray.length == 2 && amount == 3 ) {
        fibArray[2] = fibArray[0] + fibArray[1];
        return fibArray;
    }else if ( fibArray.length == 2 && amount == 2 ) {
        return fibArray;
    }else if ( fibArray.length == 2 && amount == 1 ) {
        fibArray = [0];
        return fibArray;
    }else if ( fibArray.length == 2 && amount <= 0 ) {
        fibArray = [];
        console.log("Invalid Value");
        return fibArray;
    }else if ( amount == 1 && fibArray.length != 2 ) {
        fibArray[fibArray.length] = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2];
        return fibArray;
    }else if ( fibArray.length == 2 && amount > 3) {
        fibArray[2] = fibArray[0] + fibArray[1];
        return fibsRec ( amount - 3, fibArray );
    }else {
        fibArray[fibArray.length] = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2];
        return fibsRec ( amount - 1, fibArray );
    };

};

console.log(fibsRec(3));
console.log(fibsRec(2));
console.log(fibsRec(1));
console.log(fibsRec(0));
console.log(fibsRec(6));
console.log(fibsRec(8));