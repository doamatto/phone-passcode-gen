// Developed in 16:43.67 by doamatto
// Licensed under GPL v3
/*
/* This was built to make a random restrictions
/* passcode for my iPad out of bordem.
*/

function gen() {
  var elm = document.getElementById("passcode");
  var p = p; // This is for each password in the future. A number will get appended.
  for(let n = 1; n <= 4; n++) {
    eval("var p" + n + " = Math.floor((Math.random() * 9));"); // This makes a random number that gets the loop number appended to the variable. I need to find an eval() alternative.
  }
  elm.innerHTML = `Your passcode is: ${p1}${p2}${p3}${p4}`;
  console.log("We have lift off.");
}