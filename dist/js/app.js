
let form = document.getElementById('form')
let email = document.getElementById('email')
let fullName = document.getElementById('name')
let password = document.getElementById('password')
let checkbox = document.getElementById('check')
let errorMsg = document.querySelectorAll('.error')

let btn = document.querySelector('.btn')



let validator = (input, index, message) => {
    if (input.value.trim() == '' ) {
        errorMsg[index].innerHTML = message
    } 
    else {
        errorMsg[index].innerHTML = ''
    }

}

// function checkIn () {
//     if (checkbox.checked == false) {
//         errorMsg[3].innerHTML = 'Check'
//     }

//     else {
//         errorMsg[3].innerHTML = ''
//     }
// }


form.addEventListener('submit', (e)=> {
    e.preventDefault()

    validator(email, 0, 'Email field cannot be empty')
    validator(fullName, 1, 'Name field cannot be empty')
    validator(password, 2, 'Password field cannot be empty')

    // checkIn()

})

