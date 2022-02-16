

const navigation = document.querySelector('nav');

window.addEventListener('scroll', () => {

    if (window.scrollY > 600) {
        navigation.classList.add('anim-nav');
    } else {
        navigation.classList.remove('anim-nav');
    }
})

/* It's possible, but this would block the following commands:
 * Right Click (entirely!)
 * F12
 * Ctrl + Shift + I
 * Ctrl + Shift + J
 * Ctrl + Shift + C
 * Ctrl + U
*/

// Keys
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


const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');
const icon = document.getElementById('toggleDark');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        icon.className = 'uil uil-sun icon'

    }
    else {        
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        icon.className = 'uil uil-moon icon'
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);
