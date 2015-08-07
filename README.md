+### My Guessing Game
+
+If you know me, you know I love sports and my favorite sport is 
+basketball! And who better to make a guessing game after none other
+than the legendary Michael Jordan! The game starts out by alerting
+the user that a guessing game is about to commence based on Michael
+Jordan's championship rings. The user is then prompted to enter a
+number between 1-10 and see if they can guess the right amount of
+hardware Michael Jordan posseses. The answer to the question is 6
+championship rings. If the user's guess is equal to 6, the message
+that appears is "Wow you got it!". If they guess wrong, the message
+"Nope! Sorry!" comes up. That simple.

Added functionality to ask users their name and then use that information in question,
program now also asks if they want to try again if they answer incorrectly, if they say
yes they can answer again or they can say no and exit. The program still ends if they
get the answer right on the first try.




8/5/15 Bella
After I cloned Ruben's game, I realized the directory contained the README and a sub-directory(guessing_game) which contained game.html
Asked Dale about it to make sure I was going to avoid some other weird gituation, and he advised moving game.html up one directory and removing the sub-directory, then pushing it back and creating a pull request. Did that, and Ruben confirmed and merged.

Opened and ran the game, and noticed that after I played and lost several times and answered "n" instead of "y" to "Do you want to play again?" that the alert continues to pop up asking me to guess a number even though I said no. Cancel does not close alert window. Window will close after I win, though.

Discussed errors with Ruben - they are definitely errors, so we adjusted the code to reflect back to his original game enough to get the code working again.

Refactoring game to contruct functions that represents variables as properties, and adding method.

Got game to open and alert, if not fucntion completely.
Made some more changes, game stopped opening. 
Made even more changes, game opens again, but alert does not repeat if answer wrong. Also tells you you're wrong even if you guess right.

Got it to return correct alert if answer is correct!

Struggled with getting this to loop if you get the answer wrong, for a while, but Emre helped to refactor the code to improve, then to add a while loop that works!

8/7/15 Ruben
Added html content to my guessing with a button that starts the game using an onclick html add in function.