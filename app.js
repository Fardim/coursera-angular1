var student = {
    name : "",
    type : "student"
};

document.addEventListener("DOMContentLoaded", contentLoaded);

function contentLoaded(event){
    document.getElementById('name').addEventListener("keyup", keyup);
}

function keyup(event){
    calculateNumericOutput();
}

function calculateNumericOutput(event){
    student.name = document.getElementById('name').value;

    var totalnamevalue = 0;
    for(i=0; i<student.name.length; i++){
        totalnamevalue += student.name.charCodeAt(i);
    }

    var output = "total numeric value of the person name is" + totalnamevalue;
    document.getElementById('output').innerText=output;
}

