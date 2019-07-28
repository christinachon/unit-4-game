# unit-4-game




# Magic Mushies

# Description
This is my game for University of Washington Coding Bootcamp - Week 4. The game starts automatically when you load the page. A target number is randomly generated. Click one of the mushrooms to find out it's hidden value, you will see it add into "Your Score". Try to get your score the same as the target score to win! Be careful - if it goes over, then you lose! A new game starts automatically after each win and loss. Enjoy!

# Problems

A problem that I had was a new random number would be selected each time a mushroom was clicked instead of a consistent number throughout each game. I was able to reorganize the code so the function that selected a random value was called at the beginning of each game and the function was called for each individual mushroom. This prevented each mushroom having the same value.

# Technical Approach

This webpage used Bootstrap for the CSS and Adobe Photoshop.

I first started with the HTML & CSS of the page. I searched for four mushrooms and used Photoshop to make the background transparent. Start of game variables were set, such as the number of wins and losses. Using Math.random, a random number was generated for the target score. The same technique was used to generate a number from 1-12 for each of the mushrooms and added as a value.

When a mushroom is clicked, the value of the mushroom would be added to the user score with ParseInt. If the user's score is equal to the target score, then there is a win message and a new game function is called. If the user score is higher than the target score, a lose message is displayed and a new game function is called. For each win and loss, there is a variable/counter that increases by one and is displayed on the webpage.
