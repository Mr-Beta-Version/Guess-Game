let key = 1456;

let userkey = prompt("Guess the number : ");

while(key!=userkey){
    if (userkey>key){
        userkey = prompt("You Enter A Big Number. Try Again");
    }else if (userkey<key){
        userkey = prompt("You Enter A Small Number. Try Again");
    }
    else{
        userkey = prompt("Guess a number fool");
    }
}

alert("Congratulations You Win The Game");
