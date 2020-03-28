// Developed in 16:43.67 by doamatto
// Licensed under GPL v3
/*
/* This was built to make a random restrictions
/* passcode for my iPad out of bordem.
*/

function gen() {
  var c = document.getElementById("pincount").value; // Take the number of numbers you want
  if(!c) {
    c = 6;
  }
  var i; // Used for variable looping
  var num = []]; // Defines array for passcode
  var elm = document.getElementById("passcode"); // For easier calling of the passcode element later

  for (i=0; i<c; i++) {
    num[i] = Math.floor(Math.random() * Math.floor(9)); // Generate one number
  }
  
  var pin = num.toString(); // Turns array into string
  var pin1 = pin.replace(/,/g,""); // Removes commas in array string

  document.getElementById("gen").style.display = "block"; // Makes passcode visible;
  noError(); // Reports no issue occuring
  elm.innerHTML = `Your passcode is: ${pin1}`; // Brings PIN into document
  console.log("We have lift off."); // Let's you know everything went a-okay.
  pin = null; // Resets PIN variable to reduce some peeking
}

function noError() {
  // If an error doesn't happen, this function simply hides the error elements.
  var elm = document.getElementById("error");
  elm.style.display = "none";
  return;
}

