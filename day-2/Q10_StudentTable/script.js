var button = document.querySelector("button")

var studentsData = [];

//DISPLAY ALL RECORDS IN ARRAY FROM LOCALSTORAGE
if(localStorage.getItem("student-data")){
    console.log("Data exists");
    
    var studentsData = JSON.parse(localStorage.getItem("student-data"));

    var recordsDiv = document.querySelector("#records");
    
    var records = studentsData.map(function (student, index) {
        return `
        <tr>
                    <td>${student.name}</td>
                    ${
                        student.marks.map(function (mark, ind){
                            return `
                            <td>${mark}</td>
                            `
                        }).join('')
                    }
                    <td>${student.total}</td>
                    <td>${student.avg}</td>
        </tr>
        `
    }
    );
    recordsDiv.innerHTML = records.join('');

}
    

button.addEventListener("click", function(){
    //TAKE NAME INPUT FROM USER
    var name = prompt("Enter your name");
    //VALIDATE NAME INPUT
    while(name.length === 0){
        alert("Please enter your name");
        var name = prompt("Enter your name");
    }

    if(name !== null){
        //TAKE ALL SUBJECT INPUTS AND VALIDATE
        var marks = [];
        for(var i = 1; i < 6; i++){
            var val = Number(prompt(`Enter marks of subject ${i} out of 100`));
            while(isNaN(val) || val < 0 || val > 100 || val === null){ //PROMPT REPEATEDLY UNTIL VALID VALUE IS ENTERED
                alert("Please enter a value between 1 and 100");
                val = Number(prompt(`Enter marks of subject ${i} out of 100`));
            }

            marks.push(val);
            
        }
        
    }

    
    // var s1 = takeInputAndValidate(1);
    // marks.push(s1);
    // var s2 = takeInputAndValidate(2);
    // marks.push(s2);
    // var s3 = takeInputAndValidate(3);
    // marks.push(s3);
    // var s4 = takeInputAndValidate(4);
    // marks.push(s4);
    // var s5 = takeInputAndValidate(5);
    // marks.push(s5);
    

    //CALCULATE TOTAL AND AVERAGE
    // var total = s1 + s2 + s3 + s4 + s5;
    const total = marks.reduce(function (acc, currentMark){
        return acc + currentMark;
    }, 0)

    var avg = (total / marks.length).toFixed(2);

    //PUSH STUDENT OBJECT INTO ARRAY
    studentsData.push({
        name: name,
        marks: marks,
        total: total,
        avg: avg
    })

    console.log(studentsData);

    //ADD UPDATED ARRAY TO LOCALSTORAGE
    localStorage.setItem("student-data", JSON.stringify(studentsData));

    
    //DISPLAY ALL RECORDS WITH THE ADDED NEW STUDENT
    var recordsDiv = document.querySelector("#records");
    
    var records = studentsData.map(function(student, index){
        return `
        <tr>
                    <td>${student.name}</td>
                    ${
                        student.marks.map(function (mark, ind){
                            return `
                            <td>${mark}</td>
                            `
                        }).join('')
                    }
                    <td>${student.total}</td>
                    <td>${student.avg}</td>
        </tr>
        `
    });
    recordsDiv.innerHTML = records.join('');
    
});

// function takeInputAndValidate(value){
//     var val = Number(prompt(`Enter marks of subject ${value} out of 100`));
//     while(isNaN(val) || val < 0 || val > 100){ //PROMPT REPEATEDLY UNTIL VALID VALUE IS ENTERED
//         alert("Please enter a value between 1 and 100");
//         val = Number(prompt(`Enter marks of subject ${value} out of 100`));
//     }

//     return val;
// }


