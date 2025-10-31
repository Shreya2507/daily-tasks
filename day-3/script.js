class Product {
    constructor(name, category, price){
        this.name = name;
        this.category = category;
        this.price = price;
    }
}

(function(){

const productList = [];    

const page = document.createElement("div");
const heading = document.createElement("div");
const productGrid = document.createElement("div");
const title = document.createElement("div");
const costliestProduct = document.createElement("div");


//Basic page layout
document.body.appendChild(page);

page.appendChild(heading);
page.appendChild(productGrid);

heading.appendChild(title);
heading.appendChild(costliestProduct);

title.textContent = "Product Page";

costliestProduct.textContent = "Costliest product is"
costliestProduct.id = "costliest-product";

productGrid.id = "product-grid";
page.id = "page";
heading.id = "heading";
title.id = "title";
costliestProduct.id = "costliest-product";


Product.prototype.getDiscountedPrice = function (percent) {
    return this.price - ((percent/100) * this.price);

}

//create product objects
const product1 = new Product("TV", "Electronic appliance", 20000);
const product2 = new Product("Laptop", "Electronic appliance", 10000);
const product3 = new Product("Tshirt", "Clothing", 1000);
const product4 = new Product("Coat", "Clothing", 500);
const product5 = new Product("Pan", "Kitchen utencil", 200);

//add all to product array
productList.push(product1);
productList.push(product2);
productList.push(product3);
productList.push(product4);
productList.push(product5);

// console.log(productList)


for(let index in productList){
    let product = productList[index];

    //card layout elements
    const card = document.createElement("div");
    const name = document.createElement("div");
    const category = document.createElement("div");
    const pricesContainer = document.createElement("div");
    const price = document.createElement("div");
    const discountedPrice = document.createElement("div");

    name.textContent = product.name;
    name.id = "name";
    price.textContent = product.price;
    price.id = "price"
    category.textContent = product.category;
    category.id = "category";
    discountedPrice.textContent =  product.getDiscountedPrice(10);
    discountedPrice.id = "discountedPrice";
    pricesContainer.id = "pricesContainer";

    card.appendChild(category);
    card.appendChild(name);

    pricesContainer.appendChild(discountedPrice);
    pricesContainer.appendChild(price);

    card.appendChild(pricesContainer);    

    card.classList.add("card");


    productGrid.appendChild(card);
}

var cards = document.querySelectorAll(".card");
    cards.forEach(element => {
        element.addEventListener("mouseover", () => {
            element.classList.add("hovering");
        })
        element.addEventListener("mouseout", () => {
            element.classList.remove("hovering");
        })
});

function findCostliest(){

    let max = productList[0];
    console.log(max);

    for(let index in productList){
        let product = productList[index];

        // max = getMax.call(product, max);
        if(product.price > max.price){
            max = product;
        }
    }

    return max;
}

// function getMax(max){
//     if(this.price > max.price){
//         max = this;
//         return max;
//     }else{
//         return this;
//     }
// }

const max = findCostliest.apply(productList);
const maxName = max.name;
const maxPrice = max.price;

costliestProduct.textContent = `Costliest product is ${maxName} with price ${maxPrice}`;
})();