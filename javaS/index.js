let player={
    name:"Player Have",
    chips:200
}
let cards=[];
let sum=0;
let hasBlackJack=false;
let isAlive=false;
let message ="";
let messageEL=document.getElementById("message_el");
let sumEL=document.getElementById("sum-el");
let cardEL=document.getElementById("cards-el");
let playerEL=document.getElementById("player-el");

function randomNumber(){
    let randomValue=Math.floor(Math.random()*13 +1);
    if(randomValue==1){
        return 11;
    }
    else if(randomValue>10){
        return 10;
    }
    else{
    return randomValue;
    }
}
function startGame(){
    hasBlackJack=false;
    isAlive=true;
    let firstCard =randomNumber();
    let secondCard=randomNumber();
    cards=[firstCard,secondCard];
    sum=cards[0]+cards[1];
    renderGame();
}

function renderGame(){
    cardEL.textContent="CARDS: "
    for(let i=0;i<cards.length;i++){
    cardEL.textContent+=cards[i]+" ";
}
sumEL.textContent="SUM : "+sum;
if(sum<21){
    message="Do you want to Draw a new card,🙂";
    playerEL.textContent=player.name + ": $" +player.chips;
}
else if(sum===21){
    message="Woohoo! You got a black jack,🥳";
    hasBlackJack=true;
    player.chips+=20;
    playerEL.textContent=player.name + ": $" +player.chips;
}
else{
    message="You're OUT of the game,😭 start again"
    player.chips=player.chips-20;
    isAlive=false;
    playerEL.textContent=player.name + ": $" +player.chips;
    
}
messageEL.textContent=message;
}

function newCard(){
    if (isAlive==true && hasBlackJack==false){
    let card=randomNumber();
    sum+=card;
    cards.push(card);
    renderGame();
    }
}
