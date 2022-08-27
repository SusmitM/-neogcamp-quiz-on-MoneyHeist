var readlineSync = require('readline-sync');
const chalk = require('chalk');
var score = 0;
var userName = readlineSync.question(chalk.rgb(255, 255, 0)("HEY!!! Whats Your Name:) "));

console.log(chalk.cyan.italic("WELCOME " + userName) + "!!!");

function highscore() {
  console.log(chalk.hex('#40E0D0')(("SUSMIT: 7")));
  console.log(chalk.hex('#40E0D0')(("ARIJIT: 5")));
}

function play(question, answer) {
  var userAns = readlineSync.question(question);

  if (userAns.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.rgb(64, 255, 64)("Yes you are RIGHT!!!!"));
    score = score + 1;

  }
  else {
    console.log(chalk.rgb(192, 00, 00)("Sorry you are WRONG!!!"));
    score = score - 1;

  }
  console.log("Your Current Score is: " + chalk.rgb(199, 21, 133).bold(score));
  console.log("------------------------");



}

var Questions = [{
  questions: "The Professor’s first name is eventually revealed. What is it? ",
  answer: "Sergio",
},
{

  questions: "Before giving up on society and turning to a life of crime, what was Moscow’s occupation? ",
  answer: "Miner",
},
{
  questions: "Who did Gandia lock up in the Bank’s panic room? ",
  answer: "Tokyo",
},
{
  questions: "How were The Professor and Berlin related to each other? ",
  answer: "Brothers",
},
{
  questions: "Where did the first Heist take place? ",
  answer: "Royal Mint of Spain ",
},
{
  questions: "Where did Raquel find The Professor after the first heist? ",
  answer: "Philippines",
},
{
  questions: "How many heists had the character Berlin performed before money heist's events? ",
  answer: "27",
},
{
  questions: "Which character is going to have a individual show on himself in 2023 ",
  answer: "Berlin",
},

{
  questions: "Which is the favorite sport of Professor",
  answer: "Chess",
},
{
  questions: " What is the title of the Italian protest song which is played throughout the series?",
  answer: "bella ciao",
},

];



for (var i = 0; i < Questions.length; i++) {
  var gameQues = Questions[i];
  play(gameQues.questions, gameQues.answer);
}
console.log(chalk.hex('#FF6040')("Well Played!!! " + userName.toUpperCase() + " you scored ") + chalk.rgb(199, 21, 133).bold(score));
console.log(chalk.hex('#D0B090')("Check out the high scores, if you make it to the leaderboard, then ping me and I'll update it."));
console.log(highscore());