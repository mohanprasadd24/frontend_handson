const dicenum = document.getElementById("dicenum");
const diceimg = document.getElementById("diceImg");
let dnum = [];
let dimg = [];

function rolldice(){
    const input = document.getElementById("input").value;
     
    for (let i=0;i<input;i++){
        let random = Math.floor((Math.random()*6)+1);
        dnum.push(random);
        dimg.push(`<img src="images/${random}.png">`)
    }
    dicenum.textContent=`Dice rolls : ${dnum.join(",")}`;
    diceimg.innerHTML=dimg.join("");

}