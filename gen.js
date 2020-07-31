function gen () {
  var pCount = document.getElementById('pincount').value
  var n, c
  try { // Check if you can turn the pincount into a number. If not, fail.
    n = Number(pCount)
  } catch (err) {
    return console.error('The number of numbers provided could not be converted into an integer.')
  }

  if (isNaN(n)) return console.error('The number of numbers provided is not a real integer.')
  if (n <= 0) return console.error('The number of numbers prvoided is equal to or less than 0.') // Check if provided number is less than 0. If not, succeed.
  if (!pCount) { // Check if you've provided the amount of digits for your PIN
    c = 6 // Default to 6 digits
  } else {
    c = pCount // Take the number of numbers you want
  }
  var i, num // Used for variable looping and defines array for passcode
  var elm = document.getElementById('passcode') // For easier calling of the passcode element later

  for (i = 0; i < c; i++) {
    num[i] = Math.floor(Math.random() * Math.floor(9)) // Generate one number
  }

  var pin = num.toString() // Turns array into string
  pin = pin.replace(/,/g, '') // Removes commas in array string

  document.getElementById('gen').style.display = 'block' // Makes passcode visible;
  noError() // Reports no issue occuring
  elm.innerHTML = `Your passcode is: ${pin}` // Brings PIN into document
  pin = null // Resets PIN variable to reduce some peeking
}

function noError () {
  document.getElementById('error').style.display = 'none'
} // If an error doesn't happen, this function simply hides the error elements.

function handlingError (msg, url, line) {
  console.error('Error logged locally for when announced to user.')
  var elm = document.getElementById('errorText')
  elm.innerHTML = (`An error has occured on line ${line} of ${url}. The following is what was captured: ${msg}`)
  document.getElementById('error').style.display = 'block'
  document.genElementById('gen').style.display = 'none'
}

window.onerror = (msg, url, line) => {
  handlingError(msg, url, line)
}

// TODO: Add function to button on DOMContentLoaded

window.addEventListener("DOMContentLoaded", (e) => {
  document.getElementById("genBTN").addEventListener('click', (e) => {
    gen()
  })
})