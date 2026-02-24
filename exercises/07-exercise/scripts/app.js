const hoverBtn = document.querySelector('.hover-button');
console.log(hoverBtn)
const hoverStatus = document.querySelector('#hover-status');

const hoverSound = new Audio('sounds/pop.mp3');

hoverBtn.addEventListener('mouseenter',()=>{
    hoverSound.play();

    console.log('Sound Played')
});


//2




const volumePlayButton = document.querySelector('#volume-play-btn');
const volumeSlider = document.querySelector('#volume-slider');
const volumeText = document.querySelector('#volume-display');
const volumeAudio = new Audio('sounds/John_cena.mp3');

volumeAudio.volume = 0.5; // 50%

volumePlayButton.addEventListener('click', () => {
  volumeAudio.play();
  console.log('Playing with volume:', volumeAudio.volume);
});

volumeSlider.addEventListener('input', () => {
  const volumeRangeValue = volumeSlider.value;
  const convertedValueToAudioFormat = volumeRangeValue / 100;

  volumeAudio.volume = convertedValueToAudioFormat;

  volumeText.textContent = `Volume: ${volumeRangeValue}%`
});
