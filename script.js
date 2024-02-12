// State variables
let noCount = 0;
let yesPressed = false;
const phrases = [
    "No :(", "Are you sure?", "Really? :(", "I will be really sad", "I'm going to cry", "Please ;-;", "Don't do this!!!", "AAAAHHHHHHHSUHH", "You are going to break my heart", "NKDNKNSDKNSKDNKSDNKWQND"
];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
});

function setupEventListeners() {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');

    yesButton.addEventListener('click', function() {
        handleYesClick();
    });

    noButton.addEventListener('click', function() {
        handleNoClick();
    });
}

function handleYesClick() {
    yesPressed = true;
    updateUI();
}

function handleNoClick() {
  noCount++;
  moveNoButton();
  updateUI();

  document.getElementById("question").textContent = phrases[Math.min(noCount, phrases.length - 1)];
  // document.getElementById("question").textContent = 
  // "Wait wat ;-;";
  document.getElementById("name").style.display = "none";
}


function moveNoButton() {
    const noButton = document.getElementById('noButton');
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
}

function updateUI() {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const question = document.getElementById('question');
    const image = document.getElementsByClassName('image')[0];

    if (yesPressed) {
        // Update for Yes response
        question.textContent = 'YEAAAYYYYYY😘😘';
        image.src = 'images/200w.gif';
        yesButton.style.display = 'none';
        noButton.style.display = 'none';
    } else {
        // Update for No response
        yesButton.style.fontSize = (noCount * 20 + 15) + 'px';
        // noButton.textContent = phrases[Math.min(noCount, phrases.length - 1)];
    }
}
document.getElementById('codeSubmitButton').addEventListener('click', function() {
  var secretCode = 'HulaHoops'; // Your secret code
  var userInput = document.getElementById('secretCodeInput').value;
  
  if(userInput === secretCode) {
      hideAllExceptSecretMessage();
  } else {
      alert('Wrong code, try again!');
  }
});

function hideAllExceptSecretMessage() {
  // Hide the main container
  
  // Display only the secret message
  document.getElementById('secret-message').style.display = 'block';
  document.querySelector('.container').style.display = 'hidden';

  // Optionally, adjust the style of the secret message or body if needed
  document.getElementById('secret-message').style.textAlign = 'center'; // Example: center align the text
}

function hideAllExceptSecretMessage() {
  // Hide elements inside the container, but not the container itself
  var elementsToHide = document.querySelectorAll('.Mainprompt > *:not(#secret-message)');
  
  // Loop through and hide each element
  elementsToHide.forEach(function(element) {
      element.style.display = 'none';
  });

  // Display only the secret message
  document.getElementById('secret-message').style.display = 'block';
  document.getElementById('secret-message').style.textAlign = 'center'; // Center align the text
}

