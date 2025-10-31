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
        "id": 1,
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

// const {"id", "title", "rate", "count"} = 

//Q11.
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
const obj2 = JSON.parse(JSON.stringify(obj));
console.log(obj2);






