  var readlineSync= require('readline-sync');
  var score=0;
  var userName= readlineSync.question("HEY!!! Whats Your Name:) ");
  console.log("WELCOME "+userName+"!!!");

  function highscore(){
    console.log("SUSMIT: 7");
    console.log("ARIJIT: 5");
  }

  function play(question,answer){
    var userAns= readlineSync.question(question);
    
    if(userAns.toUpperCase()===answer.toUpperCase()){
      console.log("Yes you are RIGHT!!!!");
      score = score + 1;

    }
    else{
      console.log("Sorry you are WRONG!!!");
      score = score - 1;
      
    }
    console.log("Your Current Score is: "+score);
    console.log("------------------------");
  
    
    
  }

  var Questions=[{
    questions:"Where do I live?? ",
    answer:"Kolkata",
  },
  {

    questions:"What is my fav food? ", 
    answer:"Momos",
    },
    {
    questions:"Who's is my fav football player? ",
    answer:"Messi",
  },
  {
    questions:"What's my favourite movie? ",
    answer:"Tamasha",
  },
  {
    questions:"Which game helped me to survive the lockdown? ",
    answer:"Chess",
  },
  {questions:"Which is my dream destination to vist? ",
  answer:"North Korea",},
  {
    questions:"Do I have any siblings? ",
    answer:"No",
  },];

    

    for(var i=0;i<Questions.length;i++){
      var gameQues=Questions[i];
      play(gameQues.questions,gameQues.answer);
    }
    console.log("Well Played!!! "+userName.toUpperCase()+" you scored "+score);
    console.log("Check out the high scores, if you make it to the leaderboard, then ping me and I'll update it");
    console.log(highscore());