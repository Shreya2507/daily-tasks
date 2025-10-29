var studentsData = [];

var button = document.querySelector("button")

//DISPLAY ALL RECORDS IN ARRAY FROM LOCALSTORAGE
    if(localStorage.getItem("student-data")){
        var data = JSON.parse(localStorage.getItem("student-data"));
        var recordsDiv = document.querySelector("#records");
    
    var records = data.map((student, index) => 
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

    }
    

button.addEventListener("click", function(){
    //TAKE INPUT FROM USER
    var name = prompt("Enter your name");
    //VALIDATE INPUT
    while(name.length === 0){
        alert("Please enter your name");
        var name = prompt("Enter your name");
        if(name.length !== 0){
            break;
        }
    }

    var s1 = validate(s1);
    var s2 = Number(prompt("Enter marks of subject 2 out of 100"));
    var s2 = validate(s2);
    var s3 = Number(prompt("Enter marks of subject 3 out of 100"));
    var s3 = validate(s3);
    var s4 = Number(prompt("Enter marks of subject 4 out of 100"));
    var s4 = validate(s4);
    var s5 = Number(prompt("Enter marks of subject 5 out of 100"));
    var s5 = validate(s5);
    

    //CALCULATE TOTAL AND AVERAGE
    var total = s1 + s2 + s3 + s4 + s5;
    var avg = total / 5;

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

    //ADD NEW ARRAY TO LOCALSTORAGE
    localStorage.setItem("student-data", JSON.stringify(studentsData));

    
    
});

function validate(value){
    var val = Number(prompt(`Enter marks of subject ${value} out of 100`));
    while(value < 0 || value > 100){
        console.log("here");
        alert("Please enter a value between 1 and 100");
        var val = Number(prompt(`Enter marks of subject ${value} out of 100`));
        if(value > 0 && value < 100){
            break;
        }

    }

    return val;
}
