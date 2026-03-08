const cf=document.getElementById("cf");
const fc=document.getElementById("fc");
const result = document.getElementById("result");
let temp;
function convert(){
    let unit = document.getElementById("temp").value;
    unit = Number(unit);
    console.log(unit);
    if(isNaN(unit)){
      result.textContent=`temperature contain letters`;
    }
    else{
        if(cf.checked){
      temp = ((unit*1.8)+32).toFixed(0);;
      result.textContent=`The Temperatue in °F is ${temp}`;
    }
    else if(fc.checked){
        temp = ((unit-32)*(5/9)).toFixed(0);;
        result.textContent=`The Temperatue in °C is ${temp}`;
    }
    else{
        result.textContent=`Select a option`;
    }
    }
}