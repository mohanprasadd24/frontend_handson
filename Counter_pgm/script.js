const result = document.getElementById("result");
let count = 0;

function increcounter(){
   
   count++;
   result.textContent=`${count}`;
}
function decrecounter(){
   
   count--;
   result.textContent=`${count}`;
}
function resetcounter(){
   
   count=0;
   result.textContent=`${count}`;
}