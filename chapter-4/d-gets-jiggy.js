function dGetJiggy(str){
    if(typeof str == 'string'){
        let lastLetter = str[0];
        let rest = "";
        for(let i = 1; i < str.length; i++){
            if(i == 1) rest += str[i].toUpperCase();
            else rest += str[i];
        }
        return `${rest} to the ${lastLetter}!`;
    }
}

console.log(dGetJiggy('Dylan'))