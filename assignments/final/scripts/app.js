//local storage 

window.addEventListener("DOMContentLoaded", function(){

  nameInput.value = localStorage.getItem("name") || "";
  birthdayInput.value = localStorage.getItem("birthday") || "";

});

//Click sound for button

var audioClip = new Audio('assets/sounds/pop.mp3');
audioClip.preload = "auto";

var soundButtons = document.querySelectorAll('.click-sound-btn');

soundButtons.forEach(function(button) {
  button.addEventListener('click', function() {

    audioClip.currentTime = 0;

    audioClip.play();

  });
});



//start button

var startBtn = document.querySelector(".start-btn");
var hero = document.querySelector(".hero");
var birthdayInfo = document.querySelector(".birthday-info");

startBtn.addEventListener("click", function() {
  hero.style.display = "none";
  birthdayInfo.style.display = "flex";
});



//clear button
var clearSound = new Audio('assets/sounds/Pen_click.mp3');
clearSound.preload = "auto";
clearSound.load();

var clearBtn = document.querySelector(".clear-btn");

clearBtn.addEventListener("click", function(){

  localStorage.clear();

  nameInput.value = "";
  birthdayInput.value = "";

  clearSound.currentTime = 0;
  clearSound.play();


});


//help section


var helpSound = new Audio('assets/sounds/Pen_click.mp3');
clearSound.preload = "auto";
clearSound.load();
var closeSound = new Audio('assets/sounds/Pen_click.mp3');
clearSound.preload = "auto";
clearSound.load();


var helpBtn = document.getElementById("helpBtn");
var helpModal = document.querySelector(".help-modal");
var helpOverlay = document.querySelector(".help-overlay");
var closeHelp = document.querySelector(".close-help");

// Open modal
helpBtn.addEventListener("click", function() {
  helpModal.style.display = "block";
  helpSound.currentTime = 0;
    helpSound.play();
});

// Close modal when clicking overlay
helpOverlay.addEventListener("click", function() {
  helpModal.style.display = "none";
  backSound.currentTime = 0;
    backSound.play();
});

// Close modal when clicking close button
closeHelp.addEventListener("click", function() {
  helpModal.style.display = "none";
  closeSound.currentTime = 0;
    closeSound.play();
});



//back button

// preload back sound once
var backSound = new Audio('assets/sounds/Pen_click.mp3');
backSound.preload = "auto";
backSound.load();

// select ALL back buttons
var backButtons = document.querySelectorAll(".back-btn");

var hero = document.querySelector(".hero");
var zodiacInfo= document.querySelector(".zodiac");
var viewAllDiv = document.querySelector(".view-all"); 

// add click event to each back button
backButtons.forEach(function(backBtn) {

  backBtn.addEventListener("click", function() {

    // play sound immediately
    backSound.currentTime = 0;
    backSound.play();

    document.querySelectorAll(".zod").forEach(function(z) {
      z.classList.remove("show");
    });


    // show hero, hide birthday info
    birthdayInfo.style.display = "none";
    viewAllDiv.style.display = "none";
    zodiacInfo.style.display = "none";
    hero.style.display = "flex";
  

  });

});


//view all
var mode = "birthday"; 
var viewAllDiv = document.querySelector(".view-all");
var hero = document.querySelector(".hero");
var zodiacSection = document.querySelector(".zodiac");

var viewAllBtns = document.querySelectorAll(".view-all-btn");

viewAllBtns.forEach(function(btn){

  btn.addEventListener("click", function(){

    mode = "viewAll";

    document.querySelectorAll(".zod").forEach(function(z){
      z.classList.remove("show");
    });

    hero.style.display = "none";
    birthdayInfo.style.display = "none";
    if (zodiacSection) zodiacSection.style.display = "none";

    viewAllDiv.style.display = "flex";


    backSound.currentTime = 0;
    backSound.play();

  });

});

var characters = document.querySelectorAll(".character");
var modal = document.querySelector(".zodiac-modal");
var overlay = document.querySelector(".overlay");
var modalZodiac = document.querySelector(".modal-zodiac");
var currentSound = new Audio();

characters.forEach(function(character){

  character.addEventListener("click", function(){

    if(mode === "viewAll"){  

      var signNumber = character.getAttribute("data-sign");

      var zodiacCard = document.querySelector(".zod-" + signNumber);

      if(zodiacCard){

        modalZodiac.innerHTML = "";

        var clone = zodiacCard.cloneNode(true);

        var signInfo = clone.querySelector(".sign-info");
        if(signInfo){
          signInfo.remove();
        }

        clone.classList.add("show");

        modalZodiac.appendChild(clone);

        modal.style.display = "block";
        overlay.style.display = "block";


        var soundFile = zodiacSounds[signNumber];

        if(soundFile){
          currentSound.pause();
          currentSound.currentTime = 0;
          currentSound.src = soundFile;
          currentSound.play();
        }


      }

    }

  });

  
});

overlay.addEventListener("click", function(){

  modal.style.display = "none";
  overlay.style.display = "none";
  modalZodiac.innerHTML = "";

});



//get zodiac


var findBtn = document.querySelector(".find-btn");

var nameInput = document.getElementById("name");
var birthdayInput = document.getElementById("birthday-input");
var birthdayDisplay = document.getElementById("birthday-display");


birthdayInput.addEventListener("input", function(){

  var birthday = birthdayInput.value;
  if(!birthday) return;

  localStorage.setItem("birthday", birthday);

  var parts = birthday.split("-");

  var year = parts[0];
  var month = parts[1];
  var day = parts[2];

  var months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  birthdayDisplay.textContent =
    months[month - 1] + " " + day + " " + year;

});



// restore saved birthday on page load
var savedBirthday = localStorage.getItem("birthday");

if(savedBirthday){
  birthdayInput.value = savedBirthday;

  var date = new Date(savedBirthday);

  var months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  birthdayDisplay.textContent =
    months[date.getMonth()] + " " +
    date.getDate() + ", " +
    date.getFullYear();
}


var zodiacSounds = {
  1: 'assets/sounds/courtney.m4a',
  2: 'assets/sounds/duncan.m4a', 
  3: 'assets/sounds/lindsay.m4a',
  4: 'assets/sounds/geoff.m4a',
  5: 'assets/sounds/leshawna.m4a',
  6: 'assets/sounds/justin.m4a',
  7: 'assets/sounds/beth.m4a',
  8: 'assets/sounds/chris.m4a',
  9: 'assets/sounds/owen.m4a',
  10: 'assets/sounds/heather.m4a',
  11: 'assets/sounds/harold.m4a',
  12: 'assets/sounds/gwen.m4a'
};


function getZodiac(month, day) {
  if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return 1; // Aries
  if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return 2; // Taurus
  if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return 3; // Gemini
  if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return 4; // Cancer
  if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return 5; // Leo
  if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return 6; // Virgo
  if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return 7; // Libra
  if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return 8; // Scorpio
  if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return 9; // Sagittarius
  if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) return 10; // Capricorn
  if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return 11; // Aquarius
  if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return 12; // Pisces
}


// button click event
findBtn.addEventListener("click", function(){

  var name = nameInput.value;
  var birthday = birthdayInput.value;

  if(!name || !birthday){
    alert("Please enter all fields");
    return;
  }

  var date = new Date(birthday);

  var month = date.getMonth() + 1;
  var day = date.getDate();

  var zodiacNumber = getZodiac(month, day);

  

  // hide birthday info
  birthdayInfo.style.display = "none";

  // show zodiac section
  zodiacSection.style.display = "flex";

  // hide all zodiac cards and remove show class
  var allZods = document.querySelectorAll('.zod');
  allZods.forEach(function(zod){
    zod.classList.remove('show');
  });
  var correctZod = document.querySelector(".zod-" + zodiacNumber);

if(correctZod){

  var nameSpan = correctZod.querySelector(".sign-info span");
  nameSpan.textContent = name + ",";

  correctZod.classList.add("show");


  
      // select all character images
    var characterImages = document.querySelectorAll(".character img");

    // object mapping zodiac numbers to hover images
    var hoverImages = {
      1: 'assets/images/IMG_3357.JPG',
      2: 'assets/images/IMG_3381.JPG', 
      3: 'assets/images/IMG_3370.JPG',
      4: 'assets/images/IMG_3378.JPG',
      5: 'assets/images/IMG_3377.JPG',
      6: 'assets/images/IMG_3372.JPG',
      7: 'assets/images/IMG_3385.JPG',
      8: 'assets/images/IMG_3350.JPG',
      9: 'assets/images/IMG_3354.JPG',
      10: 'assets/images/IMG_3358.JPG',
      11: 'assets/images/IMG_3366.JPG',
      12: 'assets/images/IMG_3361.JPG'
    };

    function attachHoverSwap(img, zodiacNum) {
  img.addEventListener("mouseenter", function(){
    // store original src
    if(!img.dataset.original) img.dataset.original = img.src;
    img.src = hoverImages[zodiacNum] || img.src;
  });
  img.addEventListener("mouseleave", function(){
    if(img.dataset.original){
      img.src = img.dataset.original; // restore original
    }
  });
}

// Apply to all "View All" images
document.querySelectorAll(".character").forEach(function(parent){
  var img = parent.querySelector("img");
  var zodiacNum = parent.getAttribute("data-sign");
  attachHoverSwap(img, zodiacNum);
});

// Apply to zodiac card images (after "Find My Zodiac")
document.querySelectorAll(".zod").forEach(function(zod){
  var img = zod.querySelector("img");
  var classes = Array.from(zod.classList);
  var zClass = classes.find(c => c.startsWith("zod-"));
  if(zClass){
    var zodiacNum = parseInt(zClass.split("-")[1]);
    attachHoverSwap(img, zodiacNum);
  }
});

  // play zodiac sound
  var soundFile = zodiacSounds[zodiacNumber];
  if (soundFile) {
    var audioClip = new Audio(soundFile);
    audioClip.play();
  }

}

localStorage.setItem("name", name);
localStorage.setItem("birthday", birthday);
});


