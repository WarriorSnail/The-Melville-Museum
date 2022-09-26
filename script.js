const age = document.getElementById('age')//makes age variable
const form = document.getElementById('form')// makes form variable
const errorElement = document.getElementById('error')
const nage = Number(age)// converts age to number

form.addEventListener('submit', (e) => { //this code prevents (tries to) form from submitting with an empty age field or with an age under 18

  let messages = []
  if (age.value === '' || age.value == null) {
    messages.push("Age is required")
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }

  if (nage.valueOf < 18) {
    messages.push("You must be 18 or over")
  }
  
})