
// Side navigation
function w3_open() {
  var x = document.getElementById("mySidebar");
  x.style.width = "100%";
  x.style.fontSize = "40px";
  x.style.paddingTop = "10%";
  x.style.display = "block";
}
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}


function donotclick() {
  var elem = document.getElementById("donotclickbutton");
  if (getClickCount() < 10) {
     handleClick()
     return elem.textContent = "Please";
  }
    elem.setAttribute("disabled", "disabled");
    elem.textContent = "You can't press me";
    elem.classList.value = "w3-btn w3-xlarge w3-dark";

}

function handleClick() {
    // Save the click event to local storage
    localStorage.setItem('buttonClickCount', getClickCount() + 1);

    // You can also perform other actions related to the button click here.
    // For example, you might want to update the UI or trigger other events.
}

function getClickCount() {
    let clickCount = localStorage.getItem('buttonClickCount');
    return clickCount ? parseInt(clickCount) : 0;
}

document.addEventListener("DOMContentLoaded", function() {
  IncreaseSpeed(1)
  Resume()
  resetTime()
  // initial call
  updateTime();
  setVolume(25)

  // interval to update time
  setInterval(updateTime, getSpeed()*1000);
  if (getClickCount() >= 10) {
    var elem = document.getElementById("donotclickbutton");
    elem.setAttribute("disabled", "disabled");
    elem.textContent = "I TOLD YOU";
    elem.classList.value = "w3-btn w3-xlarge w3-dark";
  }
  if (getClickCount() >= 11) {
    var elem = document.getElementById("donotclickbutton");
    elem.setAttribute("disabled", "disabled");
    elem.textContent = "NASTY HACKER";
    elem.classList.value = "w3-btn w3-xlarge w3-dark";
  }

});
function getTime() {
    let clickCount = localStorage.getItem('TimePlayed');
    return clickCount ? parseInt(clickCount) : 0;
}

function getState() {
    let Paused = localStorage.getItem('Paused');
    return Paused ? parseInt(Paused) : 0;
}

function getSpeed() {
    let clickCount = localStorage.getItem('Speed');
    return clickCount || 1;
}

const updateTime = () => {
  elem = document.getElementById("VolumePercentage")
  elem.textContent = `${getVolume()}%`
  if (getState()) {
    return
  }
  current = getTime();
  localStorage.setItem('TimePlayed', current + 1);
  time = 212

  if (current >= time) {
  localStorage.setItem('TimePlayed', 0);
  }
  // set CSS variable
  elem = document.getElementById("LoadingBar");
  elem2 = document.getElementById("LoadingBarCounter")
  elem.style["width"] = `${(current / 212)*100}%`;
  sec = (current % 60).toString();
  if (sec.length < 2){
    sec = "0" + sec
  }
  minutes = (~~(current/60)).toString();
  if (minutes.length < 2){
    minutes = "0" + minutes
  }

  elem2.textContent = `${minutes}:${sec}`
};

function resetTime() {
    localStorage.setItem('TimePlayed', 0);
}

function Pause() {
  if (getState()) {
    return Resume()
  }
    elem = document.getElementById("PauseButton")
    elem.src = "https://cdn.discordapp.com/emojis/1088636844603879434.webp?size=128&quality=lossless"
    localStorage.setItem('Paused', 1);
}
function Resume() {
    elem = document.getElementById("PauseButton")
    elem.src = "https://cdn.discordapp.com/emojis/1088635662279905300.webp?size=128&quality=lossless"

    localStorage.setItem('Paused', 0);
}

function IncreaseSpeed(speed) {

  if (speed == 0.5) {
    if (speed == getSpeed()) {
      localStorage.setItem('Speed', 1);
      return document.getElementById("RabbitSpeed").style["background-color"] = "#4F545C"
    }
    localStorage.setItem('Speed', 0.5);
    document.getElementById("RabbitSpeed").style["background-color"] = "#2D7D46"
    return document.getElementById("TurtSpeed").style["background-color"] = "#4F545C"
  }
  if (speed == 1.5) {
    if (speed == getSpeed()) {
      localStorage.setItem('Speed', 1);
      return document.getElementById("TurtSpeed").style["background-color"] = "#4F545C"

    }
    localStorage.setItem('Speed', 1.5);
    document.getElementById("TurtSpeed").style["background-color"] = "#2D7D46"
    return document.getElementById("RabbitSpeed").style["background-color"] = "#4F545C"
  }

    // background-color:#4F545C
    // localStorage.setItem('Speed', speed);
}
function getVolume() {
    let clickCount = localStorage.getItem('Volume');
    return clickCount || 25;
}

function setVolume(vol) {
  if ((getVolume() + vol) > 125) {
    vol = 100
    return localStorage.setItem('Volume', vol)
  }
  if (parseInt(getVolume() + vol) <= 0) {
    vol = 0
    return localStorage.setItem('Volume', vol)
  } else {
    localStorage.setItem('Volume', parseInt(vol)+parseInt(getVolume()))

    return 
  }
}