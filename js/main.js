/* || Iniliaze Animate On Scroll (AOS) Library */
AOS.init();

/* || Open Menu On Small Screen */
const menuBtn = () => {
  const hamburger = document.querySelector('.hamburger');
  hamburger.onclick = function () { 
    navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('active');
  }
}

/* || Animate Close Button */
const closeBtn = () => {
  const menuBtn = document.querySelector('.hamburger');
  let menuOpen = false;
  menuBtn.addEventListener('click', function () {
  if(!menuOpen) {
      menuBtn.classList.add('open');
      menuOpen = true;
  } else {
      menuBtn.classList.remove('open');
      menuOpen = false;;
  }
});
}

/* || Show Back Button on Scroll */
const showBackBtn = () => {
  let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  
  scrollProgress.style.background = `conic-gradient(#215cff ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  };
  
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;
}

const enroll = () => {
  window.location.href = "http://enroll.catcollege.edu.ph/enrollment/";
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/* Detect if user is online or offline */
const isOnline = () => {
  const status = window.navigator.onLine;
  if(status) {
    online();
  } else {
    offline();
  }

  window.addEventListener('online', online);
  window.addEventListener('offline', offline);

  /* function to detect if user is online */
  function online(){
      document.getElementById('container').style.backgroundColor = '#22c55e';
      document.querySelector('span').textContent = `You're back online.`;
      document.getElementById('container').style.opacity = '1';
      setTimeout(function() {
        $('#container').fadeOut('slow');
      }, 3000);
  }

  /* function to detect if user is offline */
  function offline(){
      document.getElementById('container').style.backgroundColor = '#dc2626';
      document.querySelector('span').textContent = `You're offline. Please connect to the internet.`;
      document.getElementById('container').style.opacity = '1';
  }
}

/* || Function Calling */
showBackBtn();
closeBtn();
menuBtn();
isOnline();
isActive();
