function gen () {
  const pCount = (<HTMLInputElement>document.getElementById('pincount')).value
  let c: number
  let num = []

  // Check if value isn't blank
  if (pCount === '' || pCount === undefined || pCount === null) {
    c = 6 // Default to a six-digit pin
  } else {
    c = parseFloat(pCount) // Pass-forward
  }

  // Check if value is a usable number (negative numbers)
  if (c <= 0) { return console.error('The number of numbers prvoided is equal to or less than 0.') }

  // Ensures number is a whole number by rounding
  c = Math.round(c)

  // Generate numbers and ensures each is a whole number
  for (let i:number = 0; i < c; i++) {
    num[i] = Math.floor(Math.random() * Math.floor(9))
  }

  // Converts numbers generated into a usable string
  let pin:string = num.toString().replace(/,/g, '') // Removes commas from old array

  // Put passcode into document
  document.getElementById('gen').style.display = 'block'
  document.getElementById('passcode').innerHTML = `Your passcode is: ${pin}`

  // Wipe variables used in math
  c = null
  num = null
  pin = null
}

function handlingError (msg: string | Event, url: string, line: number) {
  console.error('Error logged locally for when announced to user.')
  const elm = document.getElementById('error')
  elm.innerHTML = (`An error has occured on line ${line} of ${url}. The following is what was captured: ${msg}`)
  elm.style.display = 'block'
  document.getElementById('passcode').style.display = 'none'
}

window.onerror = (msg, url, line) => {
  handlingError(msg, url, line)
}

window.addEventListener('DOMContentLoaded', () => {
  var applet = Array.from(document.getElementsByClassName('applet') as HTMLCollectionOf<HTMLElement>)
  applet[0].style.display = 'block'
  document.getElementById('genBTN').addEventListener('click', () => { gen() })
})
