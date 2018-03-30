   var question = [
       {
           question      :   "What is Homer Simpson's middle name?",
           number         :   "1",
           image         :   "assets/images/mural.jpg",
           choices       :   [
                                   "James",
                                   "Jojo",
                                   "Jay",
                                   "Jerry"
                               ],
           correctChoice       :   "Jay",
          answerImage  :  "assets/images/homerjay.gif",
           explanation   :   "Say goodbye to Homer J. Simpson and say hello to Homer Jay Simpson",
       },

       {
           question      :   "Who is the Plow King?",
           number         :   "2",
           image         :   "assets/images/plowking.jpg",
           choices       :   [
                                   "Homer Simpson",
                                   "Duffman",
                                   "Moe Szyslak",
                                   "Barney Gumble"
                               ],
           correctChoice       :   "Barney Gumble",
           answerImage  :  "assets/images/plowking.gif",
           explanation   :   "Mr. Plow is a loser and I think that he's a boozer.",
       },
       {
           question      :   "To whom might this skull belong?",
           number         :   "3",
           image         :   "assets/images/isthis.jpg",
           choices       :   [
                                   "Ralph",
                                   "Milhouse",
                                   "Uter",
                                   "Wendell"
                               ],
           correctChoice       :   "Uter",
           answerImage  :  "assets/images/thisis.jpg",
           explanation   :   "The poor German exchange student couldn't run because he was full of chocolate",
       },
       {
           question      :   "What is Comic Book Guy's real name?",
           number         :   "4",
           image         :   "assets/images/comic.jpg",
           choices       :   [
                                   "Hans Moleman",
                                   "Jeff Albertson",
                                   "Gil Gunderson",
                                   "Matt Groening"
                               ],
           correctChoice       :   "Jeff Albertson",
           answerImage  :  "assets/images/comic.gif",
           explanation   :   "Worst. Character. Ever.",
       },
       {
           question      :   "Which one of these towns did the monorail not put on the map?",
           number         :   "5",
           image         :   "assets/images/monorail.gif",
           choices       :   [
                                   "Ogdenville",
                                   "Brockway",
                                   "North Haverbrook",
                                   "Shelbyville"
                               ],
           correctChoice       :   "Shelbyville",
           answerImage  :  "assets/images/map.jpg",
           explanation   :   "Even if it was more of a Shelbyville idea, Springfield voted for it first.",
       },
       {
           question      :   "What is Selma Bouvier's pet iguana named?",
           number         :   "6",
           image         :   "assets/images/jubjub.jpg",
           choices       :   [
                                   "Jub Jub",
                                   "Stampy",
                                   "Mojo",
                                   "Homer"
                               ],
           correctChoice       :   "Jub Jub",
           answerImage  :  "assets/images/jubjub.gif",
           explanation   :   "The name is one of Conan O'Brien's favorite words to the point that J.J. Abrams snuck it into Star Wars: The Force Awakens. <a href='https://youtu.be/UBJlToFZVHM'>https://youtu.be/UBJlToFZVHM</a>",
       },
       {
           question      :   "Hank Scorpio is the CEO of what organization?",
           number         :   "7",
           image         :   "assets/images/scorpio.jpeg",
           choices       :   [
                                   "Krusty Burger",
                                   "Stonecutters",
                                   "Globex Corporation",
                                   "Mapple"
                               ],
           correctChoice       :   "Globex Corporation",
                answerImage  :  "assets/images/scorpio.gif",
           explanation   :   "He'll sting you with his dreams of power and wealth.",
       },
       {
           question      :   "What is the name of the substitute teacher that Lisa falls in love with?",
           number         :   "8",
           image         :   "assets/images/lisaletter.jpg",
           choices       :   [
                                   "Ms. Krabappel",
                                   "Mr. Bergstrom",
                                   "Mrs. Hoover",
                                   "Mr. Largo"
                               ],
           correctChoice       :   "Mr. Bergstrom",
                answerImage  :  "assets/images/bergstrom.gif",
           explanation   :   "Feel free to make fun of his name if you want. Two suggestions are Mr. Nerdstrom and Mr. Boogerstrom.",
       },
       {
           question      :   "Who does the city of Springfield bring in to enforce prohibition?",
           number         :   "9",
           image         :   "assets/images/beerbaron.jpg",
           choices       :   [
                                   "Chief Wiggum",
                                   "Sergeant Scraps",
                                   "McBain",
                                   "Rex Banner"
                               ],
           correctChoice       :   "Rex Banner",
                answerImage  :  "assets/images/banner.gif",
           explanation   :   "It went great until he was kicked out of town via catapult.",
       },
       {
           question      :   "Who is Radioactive Man's sidekick?",
           number         :   "10",
           image         :   "assets/images/radioactive.gif",
           choices       :   [
                                   "Brain Baby",
                                   "Nuclear Lad",
                                   "Fallout Boy",
                                   "Pie Man"
                               ],
           correctChoice       :   "Fallout Boy",
            answerImage  :  "assets/images/fallout.gif",
           explanation   :   "If Bart had been just one inch taller he could've been the star of a major motion picture",
       }
   ];



   var game = {


   	correctScore: 0,
   	incorrectScore: 0,
   	results: ["Woohoo!", "D'Oh!"],


   	start: function() {

   		$('#quiz').html('<button class="btn btn-large start" id="start">START</button>');
   		$('#start').unbind().click(function() {
   		$('#start').remove();

   			game.askQuestion();
   		})
   	},


   	askQuestion: function() {

   		$('#answers').append("<div> <button class='btn option' id ='choiceOne'></button></div>");
   		$('#answers').append("<div> <button class='btn option' id ='choiceTwo'></button></div>");
   		$('#answers').append("<div> <button class='btn option' id ='choiceThree'</button></div>");
   		$('#answers').append("<div> <button class='btn option' id ='choiceFour'</button></div>");

   	$('#image').append('<img src="'+ question[0].image +'" height="200"/>');
   		$('#quiz').html(question[0].question);

   		//Set each answer to a variable
   		var choiceOne = question[0].choices[0];
   		$('#choiceOne').html(choiceOne);

   		var choiceTwo = question[0].choices[1];
   		$('#choiceTwo').html(choiceTwo);

   		var choiceThree = question[0].choices[2];
   		$('#choiceThree').html(choiceThree);

   		var choiceFour = question[0].choices[3];
   		$('#choiceFour').html(choiceFour);

   		//Set correct answer
   		var correct = question[0].correctChoice;

   		//Take user guess
   		$('#choiceOne').unbind().click(function() {


   			userGuess = choiceOne;
   			game.checkGuess(userGuess, correct);
   		})

   		$('#choiceTwo').unbind().click(function() {


   			userGuess = choiceTwo;
   			game.checkGuess(userGuess, correct);
   		})

   		$('#choiceThree').unbind().click(function() {


   			userGuess = choiceThree;
   			game.checkGuess(userGuess, correct);
   		})

   		$('#choiceFour').unbind().click(function() {


   			userGuess = choiceFour;
   			game.checkGuess(userGuess, correct);
   		})

   	},

   	checkGuess: function(userGuess,correct) {


   		if (userGuess === correct){

   			$('#quiz').html(game.results[0]);
        $('#explanation').html(question[0].explanation);

   			$('#choiceOne').remove();
   			$('#choiceTwo').remove();
   			$('#choiceThree').remove();
   			$('#choiceFour').remove();

   			var correctImg = '<img src='+ question[0].answerImage +' height="200"/>';
   			$('#image').html(correctImg);

   			game.correctScore++;
        $('#results').html("Score: " + game.correctScore + " / " + question[0].number);
   			game.pause();

   		}

   		else {

   			$('#quiz').html(game.results[1]);
      $('#explanation').html(question[0].explanation);

   			$('#choiceOne').remove();
   			$('#choiceTwo').remove();
   			$('#choiceThree').remove();
   			$('#choiceFour').remove();

   			$('#answers').html("The correct answer was " + correct);

   			var correctImg = '<img src='+ question[0].answerImage +' height="200"/>';
   			$('#image').html(correctImg);

   			game.incorrectScore++;

        $('#results').html("Score: " + game.correctScore + " / " + question[0].number);

   			game.pause();
   		}
   	},

   	pause: function() {


   		setTimeout(function(){ game.nextQuestion(); }, 4500);
   	},

   	nextQuestion: function() {

   		console.log("In nextQuestion");

   		$('#answers').empty();

   		$('#image').empty();

   		$('#results').empty();

      $('#explanation').empty();

   		question.shift();

   		if(question.length === 0) {

   			game.finished();
   		}
   		else {

   			game.askQuestion();
   		}

   	},

   	finished: function() {
      if(game.correctScore == 10) {
        $('#quiz').html("A perfect score? You get the greatest gift of all.");
        var finishImg = '<img src="assets/images/greatest.gif" height="200"/>';
        $('#image').html(finishImg);
        $('#answers').html("<p>You scored " + game.correctScore + "/10 points</p>")
}

if(game.correctScore >= 8 && game.correctScore <= 9) {
  $('#quiz').html("I for one welcome our new Simpsons trivia overlord.");
  var finishImg = '<img src="assets/images/goreyes.gif" height="200"/>';
  $('#image').html(finishImg);
  $('#answers').html("<p>You scored " + game.correctScore + "/10 points</p>")
}

else if(game.correctScore >= 4 && game.correctScore <= 7) {
   		$('#quiz').html("So close, yet so far away.");
      var finishImg = '<img src="assets/images/bartno.gif" height="200"/>';
      $('#image').html(finishImg);
      $('#answers').html("<p>You scored " + game.correctScore + "/10 points</p>")
}

else if(game.correctScore >= 0 && game.correctScore <= 5) {
      $('#quiz').html("You tried, and we all know what that leads to ...");
      var finishImg = '<img src="assets/images/failno.gif" height="200"/>';
      $('#image').html(finishImg);
      $('#answers').html("<p>You scored " + game.correctScore + "/10 points</p>")
               }





   		$('#results').html('<button id="reset">RESET</button>');

   		//When Reset clicked
   		$('#reset').unbind().click(function() {

   			//Remove the button
   			$('#reset').remove();

   			//Go to game.reset()
   			game.reset();

   		})
   	},

   	reset: function() {

   		console.log("In reset");

   		//Reset page
   		location.reload();
   	},

   };

   //Start the game
   game.start();
