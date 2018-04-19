var questions = [
  'Hey! I\'m ZUBE. What\'s your name?',
  'Where are you from?',
  'What\'s your age?',
  'What is your favorite movie?',
  'It was nice talking you :)'
];

var waitTimeInMilliseconds = 2300;
var totalQuestions = questions.length - 1;
var num = 0;

var inputBox = document.querySelector('#answer');
var output = document.querySelector('#result');

output.innerHTML = questions[num];

function showResponse() {
  var input = inputBox.value;
  if (inputBox.value !== '') {
    let response = '';
    switch (num) {
      case 1:
        response = `${input} is a nice place. According to Google Maps, ${input} is 34 minutes away from here. `;
        break;
      case 2:
        response = `So, you were born in ${2018 - input}! That's was a great year.`;
        break;
      case 3:
        response = `${input} is a great movie! It's playing @ AMC Palace 3 miles away`;
        break;
      default:
        response = `Hello, ${input}!`;
    }
    
    output.innerHTML = response;
    inputBox.value = '';
    inputBox.setAttribute('placeholder', `Thinking...`);
    inputBox.setAttribute('disabled', true);
    ++num;
    setTimeout(changeQuestion, waitTimeInMilliseconds);
  }
}

function changeQuestion() {
  inputBox.setAttribute('placeholder', 'Enter your response...');
  inputBox.removeAttribute('disabled');
  $('#answer').focus();
  output.innerHTML = questions[num];
  
  if (num === totalQuestions) {
    inputBox.style.visibility = 'hidden';
  }
}

function timeInSeconds(milliseconds) {
  return (milliseconds / 1000);
}

$(document).on('keypress', function(event) {
  if (event.which === 13) {
    showResponse();
  }
})

$('#answer').focus();