/*
    1 - Build a function mergeSort that takes in an array and returns a sorted array, using 
        a recursive merge sort methodology. An input of [3, 2, 1, 13, 8, 5, 0, 1] should 
        return [0, 1, 1, 2, 3, 5, 8, 13], and an input of [105, 79, 100, 110] should 
        return [79, 100, 105, 110].

        Tips:
        Think about what the base case is and what behavior is happening again and again and can
        actually be delegated to someone else (e.g. that same function!).
        It may be helpful to check out the background videos again if you don’t quite understand 
        what should be going on.
*/


function mergeSort ( ar ) {

    //if the array has 1 or 0 elements
    if ( ar.length <= 1 ) {
        return ar;
    }

    //if the array has more than 1 elements
    //first divide the array in little parts
    let subAr1, subAr2 = [];
    subAr1 = mergeSort(ar.slice(0, Math.round(ar.length/2)));
    subAr2 = mergeSort(ar.slice(Math.round(ar.length/2), ar.length));

    //start to merge the ordered and separated parts and start ordering them
    return merge(subAr1, subAr2);
};

//the merge function
function merge ( left, right ) {
    let mergedArray = [];

    while ( left.length > 0 && right.length > 0 ){
        if ( left[0] > right[0] ) {
            mergedArray.push(right[0]);
            right.shift();
        }else {
            mergedArray.push(left[0]);
            left.shift();
        }
    };

    while ( left.length > 0 ){
        mergedArray.push(left[0]);
        left.shift();
    };

    while ( right.length > 0 ){
        mergedArray.push(right[0]);
        right.shift();
    };

    return mergedArray;
};

console.log(mergeSort([5,3,2,7,8,1]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));