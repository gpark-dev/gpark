function darkMode() {
    console.log("dark on");
  $('body').addClass("darkMode");
//   localStorage.setItem('theme', 'dark'); 
}

function lightMode() {
    console.log("light on");
  $('body').removeClass("darkMode");
//   localStorage.setItem('theme', 'light'); 
}

function detectColor(){
  let theme = 'dark'; 
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme'); 
  }
  else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		theme = 'dark';
	}
  theme === 'dark' ? darkMode() : lightMode();
}

$(document).ready(function() {
    var darkOn = false;
    console.log("ready"); 
    $('#darkModeButton').on("click", function() {
        console.log("click"); 
        //test code:
        darkOn ? darkMode() : lightMode(); 
        darkOn = !darkOn; 
        // localStorage.getItem('theme') === 'light' ? darkMode() : lightMode();
        });
});
// detectColor();