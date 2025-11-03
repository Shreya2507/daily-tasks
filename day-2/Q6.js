// Q. Replace all occurrences of a number with another number

var arr = [1, 2, 3, 2, 4, 2];

//1. By creating new array (using map)
var newArr = arr.map(function(element, index){
    if(element == 2){
        return 10;
    }
    else{
        return element;
    }
});

console.log(newArr);

//2. By changing in existing array
for(let i = 0; i < arr.length; i++){
    if(arr[i] == 2){
        arr[i] = 10;
    }
}
console.log(arr);