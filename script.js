const result = document.getElementById("result");
const PI=3.14;

function FindCircumference(){
    let radius = document.getElementById("radius").value;
    console.log(radius);
    radius=Number(radius);
   let circumference = 2*PI*radius;
   result.textContent=`The Circumference of the Circle with radius ${radius} is ${circumference}`;

}