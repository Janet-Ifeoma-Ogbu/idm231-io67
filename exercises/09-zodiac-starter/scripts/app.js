//1
const birthdayInput = document.getElementById('birthday2');
const rememberForm = document.getElementById('remember-form');
const rememberOutput = document.getElementById('remember-output');
const storageBadge = document.getElementById('storage-badge');


storageBadge.style.display = 'none';

const savedBirthday = localStorage.getItem('savedBirthday');

if (savedBirthday) {
  birthdayInput.value = savedBirthday;
  storageBadge.style.display = 'block';
}

// Function to get zodiac sign
function getZodiacSign(month, day) {
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Aquarius';
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return 'Pisces';
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Aries';
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Taurus';
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Gemini';
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Cancer';
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Leo';
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Virgo';
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Libra';
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Scorpio';
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Sagittarius';
  return 'Capricorn';
}

rememberForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const birthdayValue = birthdayInput.value;

  //  localStorage
  localStorage.setItem('savedBirthday', birthdayValue);

  const dateObj = new Date(birthdayValue);
  const month = dateObj.getUTCMonth() + 1;
  const day = dateObj.getUTCDate();

  const sign = getZodiacSign(month, day);

  rememberOutput.textContent = `Your zodiac sign is: ${sign}`;
});



//2

const timerForm = document.getElementById('timer-form');
const birthday3Input = document.getElementById('birthday3');
const timerNotification = document.getElementById('timer-notification');


timerNotification.textContent = "";
timerNotification.style.display = "none";

timerForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const date = new Date(birthday3Input.value);
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();

  const sign = getZodiacSign(month, day);

  // for the notification
  timerNotification.textContent = `Your zodiac sign is: ${sign}`;
  timerNotification.style.display = "block";

  setTimeout(function () {
    timerNotification.style.display = "none";
  }, 3000);
});





//3
const zodiacForm = document.getElementById('zodiac-form');
const zodiacInput = document.getElementById('birthday');
const zodiacOutput = document.getElementById('zodiac-output');
const zodiacSuccess = document.getElementById('zodiac-success');

zodiacSuccess.textContent = "";

zodiacForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const birthdayValue = zodiacInput.value;
  const dateObj = new Date(birthdayValue);

  const month = dateObj.getUTCMonth() + 1;
  const day = dateObj.getUTCDate();

  const sign = getZodiacSign(month, day);

  zodiacOutput.textContent = `Your zodiac sign is: ${sign}`;
  zodiacSuccess.textContent = "Success!";
});
