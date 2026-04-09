function calculate() {
    var n = document.getElementById("sub").value;

    var total = 0;

    for (var i = 1; i <= n; i++) {
        var marks = prompt("Enter marks for subject " + i);
        total = total + Number(marks);
    }

    var average = total / n;

    var grade;
    var result;

    if (average >= 90) {
        grade = "A";
        result = "Pass";
    }
    else if (average >= 50) {
        grade = "B";
        result = "Pass";
    }
    else {
        grade = "F";
        result = "Fail";
    }

    document.getElementById("output").innerHTML =
        "Total = " + total + "<br>" +
        "Average = " + average + "<br>" +
        "Grade = " + grade + "<br>" +
        "Result = " + result;
}