var button = document.querySelector("button")

//DISPLAY ALL RECORDS IN ARRAY FROM LOCALSTORAGE
if(localStorage.getItem("student-data")){
    var studentsData = JSON.parse(localStorage.getItem("student-data"));
    var recordsDiv = document.querySelector("#records");
    
    var records = studentsData.map((student, index) => 
        `
        <tr>
                    <td>${student.name}</td>
                    <td>${student.s1}</td>
                    <td>${student.s2}</td>
                    <td>${student.s3}</td>
                    <td>${student.s4}</td>
                    <td>${student.s5}</td>
                    <td>${student.total}</td>
                    <td>${student.avg}</td>
        </tr>
        `
    );
    recordsDiv.innerHTML = records.join('');

}else{
    var studentsData = [];
}
    

button.addEventListener("click", function(){
    //TAKE NAME INPUT FROM USER
    var name = prompt("Enter your name");
    //VALIDATE NAME INPUT
    while(name.length === 0){
        alert("Please enter your name");
        var name = prompt("Enter your name");
        if(name.length !== 0){
            break;
        }
    }

    //TAKE ALL SUBJECT INPUTS AND VALIDATE
    var s1 = takeInputAndValidate(1);
    var s2 = takeInputAndValidate(2);
    var s3 = takeInputAndValidate(3);
    var s4 = takeInputAndValidate(4);
    var s5 = takeInputAndValidate(5);
    

    //CALCULATE TOTAL AND AVERAGE
    var total = s1 + s2 + s3 + s4 + s5;
    var avg = (total / 5).toFixed(2);

    //PUSH STUDENT OBJECT INTO ARRAY
    studentsData.push({
        name: name,
        s1: s1,
        s2: s2,
        s3: s3,
        s4: s4,
        s5: s5,
        total: total,
        avg: avg
    })

    console.log(studentsData);

    //ADD UPDATED ARRAY TO LOCALSTORAGE
    localStorage.setItem("student-data", JSON.stringify(studentsData));

    
    //DISPLAY ALL RECORDS WITH THE ADDED NEW STUDENT
    var recordsDiv = document.querySelector("#records");
    
    var records = studentsData.map((student, index) => 
        `
        <tr>
                    <td>${student.name}</td>
                    <td>${student.s1}</td>
                    <td>${student.s2}</td>
                    <td>${student.s3}</td>
                    <td>${student.s4}</td>
                    <td>${student.s5}</td>
                    <td>${student.total}</td>
                    <td>${student.avg}</td>
        </tr>
        `
    );
    recordsDiv.innerHTML = records.join('');
    
});

function takeInputAndValidate(value){
    var val = Number(prompt(`Enter marks of subject ${value} out of 100`));
    while(isNaN(val) || val < 0 || val > 100){ //PROMPT REPEATEDLY UNTIL VALID VALUE IS ENTERED
        alert("Please enter a value between 1 and 100");
        val = Number(prompt(`Enter marks of subject ${value} out of 100`));
    }

    return val;
}


