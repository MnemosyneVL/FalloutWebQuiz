window.addEventListener('load', init);

var scoreBoard;
var score = null;
var submitButton;
var continueButton; 
var answer1;
var answer2;
var answer3;
var answer4;
var question;
var rightAnswer;
var questionNumber;
var answerChoise;


var questionsList = [
	{quest : 'What is the main reason why Enclave created vaults?',
	answ : ['For fun', 'To put experiments on people during World War', 'To protect people from the bombs','Because of paranoia'],
	right : 2
	},
	{quest : 'Why was vault 11 created?',
	answ : ['To test how people can sacrifice oneself for others', 'To test how is it to live in utopia', 'To protect people from the bombs','This vault was created as a Disneyland'],
	right : 1
	},
	{quest : 'Why was vault 114 created?',
	answ : ['To test how people can construct planes in vaults', 'To test how 100 men can survive with one woman', 'To test the stress of living in impoverished, disenfranchised conditions','To protect the gouverment'],
	right : 3
	},
	{quest : 'What happens in vault 112?',
	answ : ['Party never stops at vault 112', 'Nothing. It is the only normal vault', 'All residents are ghouls','All residents were placed in suspended animation and connected to a virtual reality simulator'],
	right : 4
	},
	{quest : 'Who are supermutants?',
	answ : ['Mutated humans, products of infection by the Forced Evolutionary Virus (FEV).', 'Victims of high radiation', 'Very strong ghouls','Painted in green bodybuilders'],
	right : 1
	},
	{quest : 'Who are ghouls?',
	answ : ['Ghouls are decrepit, rotting, zombie-like mutants. They are recipients of intense and prolonged radiation sickness', 'Resurrected corpses', 'People with makeup','Thin supermutants'],
	right : 1
	},
	{quest : 'What is Enclave?',
	answ : ['Donation fund', 'The Enclave is a secretive political, scientific, and militaristic organization', 'Abbriviation for "East North Colledge Landscape AVE MARIA"','Small raider organization that appeared on wasteland '],
	right : 2
	},
	{quest : 'What is Brotherhood of Steel?',
	answ : ['A quasi-religious technological military order', 'A community of metals that come from the same place on earth', 'Raiders that rule the entire East Coast ','Name of an arms shop in Novac'],
	right : 1
	},
	{quest : 'What is NCR?',
	answ : ['Abbriviation for New California Republic', 'Random letters', 'It is the same as HIV, but a bit different','Who cares?!'],
	right : 1
	},
	{quest : 'What is Power Armor?',
	answ : ['The peak of armored infantry technology, initially developed in the West Tek Research Facility laboratories.', 'Armor with word "Power" on it', 'Metal armor plugged into a socket','Definitely not leather armor'],
	right : 1
	},
];


function init() {// init function starts when the page is loaded
	questionsList.sort(numberRandom);
	console.log(questionsList.length);
	console.log('initialization');
	console.log(questionsList);
	scoreBoard = document.getElementById('scoreBoard');
	question = document.getElementById('questionSpace');
	answer1 = document.getElementById('answerButton1');
	answer2 = document.getElementById('answerButton2');
	answer3 = document.getElementById('answerButton3');
	answer4 = document.getElementById('answerButton4');
	continueButton = document.getElementById('continueButton');
	continueButton.addEventListener('click', startQuiz);
}
/*here button "continue" changes to restart and and variables score and questionNumber changes to 0 so that it could be possibel to start over from here*/
function startQuiz () {
	console.log('"startQuiz" function');
	score = 0;
	questionNumber=0;
	continueButton.innerHTML = 'Restart';
	quiz ();
}

function quiz () {//main quiz function 
	console.log('"quiz" function');
	answerChoise = 0;//just in case)
	scoreBoard.innerHTML = score;//applying score
	question.innerHTML = questionsList[questionNumber].quest;
	answer1.innerHTML = questionsList[questionNumber].answ[0];
	answer2.innerHTML = questionsList[questionNumber].answ[1];
	answer3.innerHTML = questionsList[questionNumber].answ[2];
	answer4.innerHTML = questionsList[questionNumber].answ[3];
	rightAnswer = questionsList[questionNumber].right;
	answer1.addEventListener('click',nextQuestion);//on click starts the nextQuestion function
	answer2.addEventListener('click',nextQuestion);
	answer3.addEventListener('click',nextQuestion);
	answer4.addEventListener('click',nextQuestion);
}
function nextQuestion (event) {

	console.log('"nextQuestion" function');
	var a;
	switch(event.target.id){//here program checks what button was clicked by it's id
		case "answerButton1":
		a=1;
		break;
		case "answerButton2":
		a=2;
		break;
		case "answerButton3":
		a=3;
		break;
		case "answerButton4":
		a=4;
		break;
	}
	answerChoise = a;
	if (answerChoise === rightAnswer ) {//here program checkes whether answer was right and if so it adds scores
		score = score + 1;}

		if (questionNumber < questionsList.length-1) {
			questionNumber = questionNumber + 1;
			console.log(questionNumber);
			quiz ();
		}
		else {
			scoreBoard.innerHTML = score;
			endQuiz ();
		}
}

function endQuiz () {//This function ends the quiz with short message
	console.log('"endQuiz" function');
	question.innerHTML = 'Thank you for playing this Fallout quiz. Hope you enjoyed.'
	answer1.innerHTML = '[EMPTY]';
	answer2.innerHTML = '[EMPTY]';
	answer3.innerHTML = '[EMPTY]';
	answer4.innerHTML = '[EMPTY]';
}
function numberRandom(a, b) {//random number function
	return Math.random() - 0.5;
  }
  
  
