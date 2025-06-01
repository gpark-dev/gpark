let textBase = "";
let repeatText = ["illustrator", "web developer", "designer"];
let index = 0; 
let i = 0; 
let deleting = false; 
let typeText = $("#typing-text"); 

function typeWrite() {
  console.log("running?!");
  var textJitter = Math.floor(Math.random()*(70-45) + 45); 
  if (deleting) {
    if (typeText.html().length > textBase.length) {
      typeText.html(typeText.html().slice(0, -1));
      setTimeout(typeWrite, textJitter); 
      console.log(typeText);
    }
    else {
      index = (index+1)%2; 
      deleting = false; 
      setTimeout(typeWrite, 1000); 
      console.log(deleting);
    }
  }

  else {
    if (i === (textBase + repeatText[index]).length) {
      i = textBase.length; 
      deleting = true;
      setTimeout(typeWrite, 2500);
      console.log(i); 
    }
    else {
      if (i < (textBase + repeatText[index]).length) {
        typeText.html(typeText.html() + (textBase + repeatText[index])).charAt(i); 
        i++; 
        setTimeout(typeWrite, textJitter);
      }
      console.log(i); 
    }
  }
}
typeWrite(); 