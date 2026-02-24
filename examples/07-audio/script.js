//1
const soundButton= document.querySelector('#play-sound-btn');

soundButton.addEventListener('click',()=>{
    const audioClip = new Audio('sounds/click.mp3');
    audioClip.play();

    console.log('Sound Played')
});

//2
const soundButton1= document.querySelector('#sound-1');
const soundButton2= document.querySelector('#sound-2');
const soundButton3= document.querySelector('#sound-3');

const sound1 = new Audio('sounds/Galaxy_party.mp3');

const sound2 = new Audio('sounds/John_cena.mp3');

const sound3= new Audio('sounds/pop.mp3');


soundButton1.addEventListener('click',()=>{
    sound1.play();

    console.log('Sound Played')
});

soundButton2.addEventListener('click',()=>{
    sound2.play();

    console.log('Sound Played')
});


soundButton3.addEventListener('click',()=>{
    sound3.play();

    console.log('Sound Played')
});

//3

const play_btn= document.querySelector('#play-btn');
const pause_btn= document.querySelector('#pause-btn');
const stop_btn= document.querySelector('#stop-btn');

const music=new Audio('sounds/The_weekend_rizz.mp3')



play_btn.addEventListener('click',()=>{
    music.play();

});

pause_btn.addEventListener('click',()=>{
    music.pause();
    console.log(music.currentTime);
});

stop_btn.addEventListener('click',()=>{
    music.pause();
    music.currentTime=0;
});


