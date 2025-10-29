// Q. Replace all occurrences of a number with another number

var arr = [1, 2, 3, 2, 4, 2];

var newArr = arr.map((element, index), function(){
    if(element == 2){
        return 10;
    }
    else{
        return element;
    }
});

console.log(newArr);