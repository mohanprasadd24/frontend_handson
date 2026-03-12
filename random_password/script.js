const length=12;
const includelowercase = true;
const includeuppercase = true;
const includenumbers = true;
const includesymbols = false;

function ranPass(length, includelowercase, includeuppercase, includenumbers, includesymbols){
    const lowercasechars = "abcdefghijklmnopqrstuvwxyz";
    const uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberschars = "0123456789";
    const symbolschars = "@#$%^&*";
    
    let password= "";
    let allowedchar = "";

    allowedchar += includelowercase ? lowercasechars : "";
    allowedchar += includeuppercase ? uppercasechars : "";
    allowedchar += includenumbers ? numberschars : "";
    allowedchar += includesymbols ? symbolschars : "";

    if(length <= 0){
        return `length must be atleast 1`;
    }
    if(allowedchar.length === 0){
        return `Select atleast 1 set of character sets`;
    }
    for(let i=0; i<length;i++){
        let random = Math.floor((Math.random()*allowedchar.length)+1);
        password += allowedchar[random];
    }
    return password;
}

let pass = ranPass(length, includelowercase, includeuppercase, includenumbers, includesymbols);
console.log(pass);