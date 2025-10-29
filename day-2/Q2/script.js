var button = document.querySelector(".myButton");

button.style.backgroundColor = "burlywood";

button.addEventListener("mouseover", function(){
    button.style.backgroundColor = "crimson";
});

button.addEventListener("mouseout", function(){
    button.style.backgroundColor = "burlywood";
});