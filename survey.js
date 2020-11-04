const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (nameAns) => {
  rl.question("What are your hobbies? ", (hobbyAns) => {
    rl.question("What are your favorite songs? ", (songAns) => {
      rl.question("Which meal is your favorite? (eg: dinner, brunch, etc) ", (mealTimeAns) => {
        rl.question("What is your favorite thing to eat for that meal? ", (mealAns) => {
          rl.question("What is your favorite sport? ", (sportAns) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superAns) => {
              console.log(`${nameAns} loves listening to ${songAns} while doing his favorite hobby: ${hobbyAns}. He enjoys ${mealTimeAns} the most, and loves to eat ${mealAns} for ${mealTimeAns}. ${nameAns} enjoys playing ${sportAns}, and ${nameAns}'s superpower is "${superAns}"!`);
              rl.close();
            });
          });
        });
      });
    });
  });
});


/*
What's your name? Nicknames are also acceptable :)
What's an activity you like doing?
What do you listen to while doing that?
Which meal is your favourite (eg: dinner, brunch, etc.)
What's your favourite thing to eat for that meal?
Which sport is your absolute favourite?
What is your superpower? In a few words, tell us what you are amazing at!
*/