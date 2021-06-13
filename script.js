var turn = 0 ,score = [0,0] ,globalScore = 0, dice = 1;


const start = document.querySelector("body > main > button.btn.btn--new");
start.addEventListener("click",gameStart);


function diceRoll(){
    dice = (Math.floor(Math.random()*6))+1;
    document.querySelector("body > main > img").src = 'dice-'+dice+'.png';
    if(dice!==1){
        globalScore = globalScore+dice;
        document.querySelector("#current--"+turn).innerHTML=globalScore;
    }else{
        globalScore = 0;
        document.querySelector("#current--"+turn).innerHTML=globalScore;
        document.querySelector("body > main > section.player.player--"+turn).classList.toggle("player--active");
        turn = 1 - turn;
        document.querySelector("body > main > section.player.player--"+turn).classList.toggle("player--active");
    }
    return dice;
}

function hold(){
    score[turn]=globalScore+score[turn];
    if(score[turn]>100){
        alert("player " + (turn+1) +" Won !!")
        gameStart();
    }
    document.querySelector("#score--"+turn).innerHTML=score[turn];
    globalScore = 0;
    document.querySelector("#current--"+turn).innerHTML=globalScore;
    document.querySelector("body > main > section.player.player--"+turn).classList.toggle("player--active")
    turn = 1 - turn;
    document.querySelector("body > main > section.player.player--"+turn).classList.toggle("player--active")
    
}

function gameStart(){

    turn = 0;
    score = [0,0];
    globalScore = 0;


    const rollbtn = document.querySelector("body > main > button.btn.btn--roll")
    rollbtn.addEventListener("click", diceRoll);
    const holdbtn = document.querySelector("body > main > button.btn.btn--hold")
    holdbtn.addEventListener("click", hold);

    document.querySelector("#score--0").innerHTML=0;
    document.querySelector("#score--1").innerHTML=0;
    document.querySelector("#current--0").innerHTML=0;
    document.querySelector("#current--1").innerHTML=0;


}