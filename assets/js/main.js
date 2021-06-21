document.onkeydown = function(e) {
    if(event.keyCode == 123) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
       return false;
    }
  }

var audio = new Audio('./assets/audio/Элджей - Рваные джинсы.mp3');

var toggleM = true;

function toggleMenu(x) {
   x.classList.toggle("change");
   if (toggleM == true) {
         document.getElementById("navbar").style.transition = "0.5s";
         document.getElementById("navbar").style.opacity = "0.8";
         toggleM = false;
   } else {
         document.getElementById("navbar").style.transition = "0.5s";
         document.getElementById("navbar").style.opacity = "0";
         toggleM = true;
   }
}

var toggleMu = 1;

function toggleMusic() {
   if (toggleMu == 1) {
         audio.play();
         audio.volume = 0.6;
         audio.muted = false;
         document.getElementById("music1").style.display = "none";
         document.getElementById("music2").style.display = "inline";
         toggleMu = 2;
   } else if(toggleMu == 2) {
         audio.volume = 1;
         document.getElementById("music2").style.display = "none";
         document.getElementById("music3").style.display = "inline";
         toggleMu = 3;
   } else {
         audio.muted = true;
         document.getElementById("music3").style.display = "none";
         document.getElementById("music1").style.display = "inline";
         toggleMu = 1;
   }
}