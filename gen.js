// Developed in 16:43.67 by doamatto
// Licensed under GPL v3
/*
/* This was built to make a random restrictions
/* passcode for my iPad out of bordem.
*/

function gen() {
  var elm = document.getElementById("passcode");
  var pin = Math.floor(Math.random() * Math.floor(max)); // This makes a random number that gets the loop number appended
                                                        // to the variable. I need to find an eval() alternative
  elm.innerHTML = `Your passcode is: ${pin}`;
  console.log("We have lift off.");
}
