'use strict';
const score0EL=document.querySelector('#score--0');
const score1EL=document.getElementById('score--1');
const diceEl=document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');
const diceImage=document.querySelector('.dice');
const current0EL=document.querySelector('#current--0');
const current1EL=document.querySelector('#current--1');



let scores=0

score0EL.textContent=0;
score1EL.textContent=0;
diceEl.classList.add('hidden');

btnRoll.addEventListener('click',function(){
    // 1. Generate a random dice roll
    const dice= Math.trunc(Math.random()*6)+1;
    // 2. Display the dice
    console.log(dice);
    diceEl.classList.remove('hidden');
    diceImage.src=`dice-${dice}.png`;
    // 3. Check for rolled 1: if true, switch to next player
    if(dice!==1){
        // Add dice to current score
        scores+=dice;
        console.log('Current Score:', scores);
        current0EL.textContent=scores;
    }else{
        // Switch to next player
        console.log('Switch Player');
    }
})