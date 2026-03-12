const result=document.getElementById("result");
let min= 50;
let max= 100;
let random = Math.round((Math.random()*(max - min +1))+ min);

function check(){
    let input=window.prompt("guess the Number");
    input=Number(input);
    while(random !== input){
       if(random < input){
        input=Number(window.prompt("your guess is higher than ans"));
       }
       else if(random > input){
        input=Number(window.prompt("your guess is lower than ans"));
       }
    }
    if(random === input){
        result.textContent=`You Guessed correct`
    }
    
}
check();