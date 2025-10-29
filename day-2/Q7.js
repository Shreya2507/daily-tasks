// Q7.Sort the array in ascending order(without using sort())

//using bubble sort here
var arr = [6, 8, 3, 9, 10, 2];

for(var i = 0; i < n - 1; i++){             //outer loop - no. of passes
    for(var j = 0; j < n - i - 1; j++){     //inner loop - going through array checking each element
        if(arr[j] > arr[j+1]){  //if element is greater than its next element
            var temp = arr[j];  //switch them using temp variable
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}

console.log(arr);


//dry run
//iteration 1 - 6, 3, 8, 9, 2, 10
//iteration 2 - 3, 6, 8, 2, 9, 10
//iteration 3 - 3, 6, 2, 8, 9, 10
//iteration 4 - 3, 2, 6, 8, 9, 10
//iteration 5 - 2, 3, 6, 8, 9, 10