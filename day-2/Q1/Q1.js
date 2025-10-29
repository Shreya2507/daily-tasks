var button = document.querySelector("button")
var error = document.querySelector("#error")

function validate(){
    var nameInput = document.querySelector("#nameInput")
    var ageInput = document.querySelector("#ageInput")
    var age = parseInt(ageInput.value, 10);

    if(nameInput.value.length === 0){
        error.textContent = "Please enter your full name";
        return false;
    }

    else if( age < 18 ){
        console.log(age);
        error.innerHTML = "Age should be greater than or equal to 18";
        return false;
    }

    return true;    
}

button.addEventListener("click", function(event) {
    const isValid = validate();
    if(isValid){
        console.log(isValid);
        alert("Form Submitted");
        nameInput.value = "";
        ageInput.value = "";
        error.textContent = "";
    }
});
