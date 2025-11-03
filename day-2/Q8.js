// Q8. Reverse the array.(without using reverse())

var arr = [1, 2, 3, 4, 5];

//1. By creating new array
var reversedArr = [];

for(var i = arr.length + 1; i >= 0; i--){
    reversedArr.push(arr[i]);
}

console.log(reversedArr);

// 2. Reversing in place
function reverseArrayInPlace(arr) {
  for (var i = 0; i <= (arr.length / 2); i++) {
      let el = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = el;
  }
}

reverseArrayInPlace(arr);
console.log(arr);