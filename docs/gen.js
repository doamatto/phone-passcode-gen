function gen () {
  const pCount = document.getElementById('pincount').value
  let c
  let num = []

  // Check if value isn't blank
  if (pCount === '' || pCount === undefined || pCount === null) {
    c = 6 // Default to a six-digit pin
  } else {
    c = pCount // Pass-forward
  }

  // Check if value is a number
  try {
    const n = Number(c)
    if (isNaN(n)) { return console.error('Placeholder to throw error') }
  } catch (e) {
    return console.error('The number of numbers provided couldn\'t be converted to or isn\'t a real number')
  }

  // Check if value is a usable number (negative numbers)
  if (c <= 0) { return console.error('The number of numbers prvoided is equal to or less than 0.') }

  // Ensures number is a whole number by rounding
  c = Math.round(c)

  // Generate numbers and ensures each is a whole number
  for (let i = 0; i < c; i++) {
    num[i] = Math.floor(Math.random() * Math.floor(9))
  }

  // Converts numbers generated into a usable string
  let pin = num.toString().replace(/,/g, '') // Removes commas from old array

  // Put passcode into document
  document.getElementById('gen').style.display = 'block'
  document.getElementById('passcode').innerHTML = `Your passcode is: ${pin}`

  // Wipe variables used in math
  c = null
  num = null
  pin = null
}

function handlingError (msg, url, line) {
  console.error('Error logged locally for when announced to user.')
  const elm = document.getElementById('error')
  elm.innerHTML = (`An error has occured on line ${line} of ${url}. The following is what was captured: ${msg}`)
  elm.style.display = 'block'
  document.getElementById('passcode').style.display = 'none'
}

window.onerror = (msg, url, line) => {
  handlingError(msg, url, line)
}

window.addEventListener('DOMContentLoaded', (e) => {
  document.getElementsByClassName('applet')[0].style.display = 'block'
  document.getElementById('genBTN').addEventListener('click', (e) => {
    gen()
  })
})
