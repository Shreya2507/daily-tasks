var studentsData = [];

var button = document.querySelector("button")

button.addEventListener("click", function(){
    var name = prompt("Enter your name");
    var s1 = Number(prompt("Enter marks of subject 1 out of 100"));
    var s2 = Number(prompt("Enter marks of subject 2 out of 100"));
    var s3 = Number(prompt("Enter marks of subject 3 out of 100"));
    var s4 = Number(prompt("Enter marks of subject 4 out of 100"));
    var s5 = Number(prompt("Enter marks of subject 5 out of 100"));

    var total = s1 + s2 + s3 + s4 + s5;
    var avg = total / 5;

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

//on submit
localStorage.setItem("studentsData", studentsData);