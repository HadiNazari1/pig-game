'use strict';
const score0EL=document.querySelector('#score--0');
const score1EL=document.getElementById('score--1');
const player0EL=document.querySelector('.player--0');
const player1EL=document.querySelector('.player--1');
const diceEl=document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');
const diceImage=document.querySelector('.dice');
const current0EL=document.querySelector('#current--0');
const current1EL=document.querySelector('#current--1');


let scores, currentScores, activePlayer, playing;

const init = function(){
      score0EL.textContent=0;
            score1EL.textContent=0;
            current0EL.textContent=0;
            current1EL.textContent=0;
            diceEl.classList.add('hidden');
            player0EL.classList.remove('player--winner');
            player1EL.classList.remove('player--winner');
            player0EL.classList.add('player--active');
            player1EL.classList.remove('player--active');
            activePlayer=0;
            currentScores=0;
            scores=[0,0];
            playing=true;  
}
init();




const switchPlayer=function(){
     console.log('Switch Player');
        document.getElementById(`current--${activePlayer}`).textContent=0;
        activePlayer=activePlayer===0?1:0;
        player0EL.classList.toggle('player--active');
        player1EL.classList.toggle('player--active');
        currentScores=0; 
}

btnRoll.addEventListener('click',function(){
    // 1. Generate a random dice roll
    if(playing){
        const dice= Math.trunc(Math.random()*6)+1;
        // 2. Display the dice
        console.log(dice);
        diceEl.classList.remove('hidden');
        diceImage.src=`dice-${dice}.png`;
        
        // 3. Check for rolled 1: if true, switch to next player
        if(dice!==1){
            // Add dice to current score
            currentScores+=dice;
            document.getElementById(`current--${activePlayer}`).textContent=currentScores;
            console.log('Current Score:', currentScores);
            

        
        }else{
            // Switch to next player
            switchPlayer();
        
        }
}
})
btnHold.addEventListener('click',function(){
    // 1. Add current score to active player's score
    
    if (playing){
        scores[activePlayer]+=currentScores;
        currentScores=0;
        
        document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
        // 2. Check if player's score is >=100
        if (scores[activePlayer]>=100){
            playing=false;
            // Finish the game
            diceEl.classList.add('hidden');
            
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        
        }
        else
            switchPlayer();
    }
        });

        btnNew.addEventListener('click',init)

            // Reset all values to initial state
           
        