'use strict'

var user, guess, answer, hint1, message;

var MyGuessingGame = function() {
  	
    user = prompt('What is your name?');

    var answer = 6;

    var guess = prompt('Hey ' + user + '!' + ' Can you guess how many championship rings Michael Jordan has? Choose a number between 1-10.')

      if (guess > answer) {
    
    	hint1 = guess + ' is too high. Go Lower!';
  	} else {
    
    	hint1 = guess + ' is too low. Go Higher!';
  
  }
  
  console.log(hint1);
  addToHintList();

	while(guess != answer) {

    	guess = prompt('Nope sorry! Keep Guessing!');
    
	} 

	alert('You guessed it, you were right!');
   
    }

function addToHintList() {
  var hintListItem = document.createElement('li');
  var hintNode = document.createTextNode(hint1);
  hintListItem.appendChild(hintNode);
  document.getElementById('hint-list').appendChild(hintListItem);
}

