// Q1. 
let add = (a,b) => a + b;
console.log(add(2,3));


// Q2. 
let greet = (name, message = "Welcome !") => {
    console.log(message + " " + name);
}
greet("Shreya");
greet("Abc", "Hello");

//Q3.
let formatString = (name, age) => {
    return `Hello, my name is ${name} and I am ${age} years old.`;
}
console.log(formatString("Shreya", 12));

// Q4.
const person = {
    name: 'Alice',
    age: '25',
    address: {
        city: 'New York',
        country: 'NY'
    }
}

let getSentence = () => {
    console.log(`${person.name} lives in ${person.address.city}`);
    console.log(JSON.stringify(person.address));
}

getSentence();

//Q5.
let sumAll = (...args) => {
    let sum = 0;
    for(let arg of args){
        sum = sum + arg;
    }    

    return sum;
}
console.log(sumAll(1,2,3,4,5));


const arr = [1,2,3,4,5,6]; // common array for Q6, Q7

// Q6.
let filterEvens = (arr) => {
    return arr.filter((element) => element % 2 === 0)
}

const evenArr = filterEvens(arr);
console.log(evenArr);

//Q7.
let doubleValues = (arr) => {
    return arr.map((elem) => elem*2);
}

const doubleArray = doubleValues(arr);
console.log(doubleArray);

//Q8.
let findMax = (arr) => {
    return Math.max(...arr);

}
console.log(findMax([3, 5, 7, 2, 8]));

//Q9.
const data =[
  {
    name: "Bob",
    age: 24
  },
  {
    name: "Alice",
    age: 21
  }
]
let extractAndDisplay = () => {
    const name = data[1].name;
    const age = data[0].age;

    return `${name}'s age is ${age}`;
}
console.log(extractAndDisplay());

//Q10.
const objArr = [
    {
        // "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    }
]

//USING hasOwn() ---
// const getSelectedKeys = (arr) => {
//     const selectedKeys = arr.map((obj) => {
//         return {
//          "id": Object.hasOwn(obj, "id") ? obj.id : undefined,
//          "title": Object.hasOwn(obj, "title") ? obj.title : undefined,
//          "rate": obj.rating.rate, 
//          "count": obj.rating.count
//         }
//     });

//     return selectedKeys;
// }

//USING destructuring 
const getSelectedKeys = (arr) => {
    const selectedKeys = arr.map(({id, title, rating}) => {
        return {
         "id": id,
         "title": title,
         "rate": rating?.rate, 
         "count": rating?.count
        }
    });

    return selectedKeys;
}

console.log(getSelectedKeys(objArr));

//Q11.
// empty string is falsy value
 const fun = (name = "abc") => {
        if (name) {
          console.log("if", name);
        } else {
          console.log("else", name);
        }
};
	  
fun(""); 
//output: else

//Q12.
const obj = { a: 1, b: { c: 2 } };

//using JSON.parse() and JSON.stringify()
// const obj2 = JSON.parse(JSON.stringify(obj));


//using custom method
function getDeepClone(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  let clone = {};
  for (let key in obj) {
    clone[key] = getDeepClone(obj[key]);
  }

  return clone;
}

const deepClone = getDeepClone(obj);

console.log("Original - " + JSON.stringify(obj));
console.log("Clone - " + JSON.stringify(deepClone));
deepClone.a = 10;
deepClone.b.c = 20
console.log('After change :');
console.log("Original - " + JSON.stringify(obj));
console.log("Clone - " + JSON.stringify(deepClone));


//Q13.
let flattenArray = (inputArray) => {
    let outputArray = [];

    recursion(inputArray, outputArray, 0);
    
    return outputArray;
}

let recursion = (inputArray, outputArray, index) => {
    //base condition -- only run until index reaches end of array
    if(index >= inputArray.length) {
        return;
    }

    const elem = inputArray[index];

    //if the element at index, is array
    if(Array.isArray(elem)){
        recursion(elem, outputArray, 0); //send elem(array) to be processed
    }
    else{
        outputArray.push(elem); //if the element is single value, push directly
    }

    //send next element for processing
    recursion(inputArray, outputArray, index+1);
}

const nestedArr = [1, [2, [3, [4, 5]]]];
console.log(flattenArray(nestedArr));






