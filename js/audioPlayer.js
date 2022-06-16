"use strict"



const ulElement = document.querySelector('.play-list');
const playPrev = document.querySelector('.play-prev');
const play = document.querySelector('.play');
const playNext = document.querySelector('.play-next');
const liElement = document.querySelector('.li');



const soundsArr = ['Aqua Caelestis', 'Ennio Morricone', 'River Flows In You', 'Summer Wind'];
soundsArr.map(i => {
    const li = `<li class="sound__el">${i}</li>`;

    liElement.insertAdjacentHTML('beforebegin', li);
    
})
const soundEl = document.querySelectorAll('.sound__el');


function checkSound () {
    for (let item of soundEl) {
        if (item.outerText === soundsArr[trek]) {
            item.style.opacity = "0.7"
        } else {
            item.style.opacity = "1"
        }
    }
};

let trek = 0;
let audioEl = new Audio(`../assets/sounds/${soundsArr[trek]}.mp3`);

play.addEventListener ('click', (e) => {
    audioEl.play();
    if (play.classList.contains('pause')) {
        play.classList.remove('pause');
        audioEl.pause();

    } else {
        play.classList.add('pause');
        audioEl.play();

    }
    
})

audioEl.onended = function(){
    trek ++;
    if (trek >= 0 && trek <= soundsArr.length - 1) {

    } else if(trek <= 0) {
        trek = soundsArr.length-1;

    } else if (trek === soundsArr.length){
        trek = 0;   

    }
    
    this.src = `../assets/sounds/${soundsArr[trek]}.mp3`;
    this.play();
    checkSound ()
}

playPrev.addEventListener('click', () => {
    trek--;
    if (trek >= 0 && trek <= soundsArr.length) {

    } else if(trek <= 0) {
        trek = soundsArr.length-1;

    } 
    audioEl.src = `../assets/sounds/${soundsArr[trek]}.mp3`;
    audioEl.play();
    checkSound ()
})

playNext.addEventListener('click', () => {
    trek++;

    if (trek >= 0 && trek <= soundsArr.length - 1) {

    } else if (trek === soundsArr.length){
        trek = 0;   

    }
    
    audioEl.src = `../assets/sounds/${soundsArr[trek]}.mp3`;
    audioEl.play();
    checkSound ()
})

checkSound ()

// audio.currentTime = 0;
