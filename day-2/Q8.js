// Q8. Reverse the array.(without using reverse())

var arr = [1, 2, 3, 4, 5];
var reversedArr = [];

for(var i = arr.length + 1; i >= 0; i++){
    reversedArr.push(arr[i]);
}

console.log(reversedArr);