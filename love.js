 
// Music containers
const seventyAndAboveMusicContainer = [
  'Flavour_Black_Is_Beautiful',
  'P-Square-Beautiful-Onyinye',
  'Drake-Gods-Plan'
];

const deepLoveMusicContainer = [
  'Drake-Gods-Plan',
  'Melody-bry-slowly',
  'Joe-IWannaKnow'
];

const stagaringLoveMusicContainer = [
  'P-Square-Am-I-Still-That-Special-Man',
  'Rudeboy-Reason-With-Me',
  'Drake-Gods-Plan'
];

// DOM elements
const outPut = document.querySelector('.output');
const checkBtn = document.querySelector('.check');
const downloadBtn = document.querySelector('.download');
const fNameInput = document.querySelector('#f_name');
const crushNameInput = document.querySelector('#crush');
const refresh = document.querySelector('.refresh')

let playedMusic = ""; // Track last played music
let audio = null;  // to set the music track to empty 

checkBtn.addEventListener('click', function () {
  const yourName = fNameInput.value.trim();
  const crushName = crushNameInput.value.trim();

  if (!yourName || !crushName) {
    outPut.textContent = "Please enter your name and your crush name!";
    return;
  }

  // Generate a new random number for each attempt
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  // Pick random music from each category
  const music1 = seventyAndAboveMusicContainer[Math.floor(Math.random() * seventyAndAboveMusicContainer.length)];
  const music2 = deepLoveMusicContainer[Math.floor(Math.random() * deepLoveMusicContainer.length)];
  const music3 = stagaringLoveMusicContainer[Math.floor(Math.random() * stagaringLoveMusicContainer.length)];

  let message = "";
  let selectedMusic = "";

  if (randomNumber >= 70) {
    message = `${yourName}, your love for ${crushName} is sparkling like a diamond ❤️.`;
    selectedMusic = music1;
  } else if (randomNumber >= 30 && randomNumber <= 69) {
    message = `${yourName}, there's a meaningful connection between you and ${crushName}, but it needs regular attention. 💖`;
    selectedMusic = music2;
  } else {
    message = `${yourName}, it seems like there may be some discomfort or distance between you and ${crushName}. Take time to reflect on your journey together. 💔`;
    selectedMusic = music3;
  }

  outPut.textContent = message;
  playedMusic = selectedMusic;

  const audio = new Audio(`music/${playedMusic}.mp3`);
  audio.play();
});

downloadBtn.addEventListener('click', function () {
  if (!playedMusic) {
    outPut.textContent = "You need to check how much you partner loves you first before downloading the corresponding music.";
    return;
  }

  const link = document.createElement('a');
  link.href = `music/${playedMusic}.mp3`;
  link.download = `${playedMusic}.mp3`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});




refresh.addEventListener('click', function(){
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
        location.reload();
})

