// 1
var alertBtn = document.querySelector('#alert-btn');

alertBtn.addEventListener('click', function() {
  alert('Hello from JavaScript!');
});


// 2
var doubleClickCount = 0;

var dblclickBox = document.querySelector('#dblclick-box');
var dblclickOutput = document.querySelector('#dblclick-output');

dblclickBox.addEventListener('dblclick', function() {
  doubleClickCount = doubleClickCount + 1;
  dblclickOutput.textContent = 'Double-click count: ' + doubleClickCount;
});


// 3
var charInput = document.querySelector('#char-input');
var charOutput = document.querySelector('#char-output');

charInput.addEventListener('keyup', function() {
  var length = charInput.value.length;

  if (length === 0) {
    charOutput.textContent = '0 characters';
  }
  else if (length === 1) {
    charOutput.textContent = '1 character';
  }
  else {
    charOutput.textContent = length + ' characters';
  }
});


// 4
var toggleBtn = document.querySelector('#toggle-btn');
var toggleText = document.querySelector('#toggle-text');

toggleBtn.addEventListener('click', function() {

  if (toggleText.style.display === 'none') {
    toggleText.style.display = 'block';
    toggleBtn.textContent = 'Hide Text';
  }
  else {
    toggleText.style.display = 'none';
    toggleBtn.textContent = 'Show Text';
  }

});


// 5
var numberInput = document.querySelector('#number-input');
var validNotification = document.querySelector('#valid-notification');

numberInput.addEventListener('blur', function() {

  var value = Number(numberInput.value);

  if (value >= 1 && value <= 100) {
    validNotification.style.display = 'block';
  }
  else {
    validNotification.style.display = 'none';
  }

});

//bonus

var emojiDisplay = document.getElementById("emoji-display");

var catBtn = document.getElementById("emoji-cat");
var dogBtn = document.getElementById("emoji-dog");
var rocketBtn = document.getElementById("emoji-rocket");
var pizzaBtn = document.getElementById("emoji-pizza");


catBtn.addEventListener("click", function() {
  emojiDisplay.textContent = "🐱";
});

dogBtn.addEventListener("click", function() {
  emojiDisplay.textContent = "🐶";
});

rocketBtn.addEventListener("click", function() {
  emojiDisplay.textContent = "🚀";
});

pizzaBtn.addEventListener("click", function() {
  emojiDisplay.textContent = "🍕";
});