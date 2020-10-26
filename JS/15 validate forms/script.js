const regForm = document.querySelector('#regForm');
const inputs = document.querySelectorAll('input');
const email = document.querySelector('#email');

const validate = function (id) {
    let input = document.querySelector(id);
    if(input.value === '' || input.value.length < 2) {
        input.classList.add('is-invalid');

        input.focus()
        return false

    } else {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');

        return true
    }
}

const validateEmail = function (email) {
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
        return true
    } else {
        email.classList.add('is-invalid');
        email.focus()
        return false
    }
}




// document.querySelector('#firstName').addEventListener('keyup', function(e) {
//     let id = '#' + e.currentTarget.id;
    
//     validate(id);
// })




inputs.forEach(input => {
    input.addEventListener('keyup', function(e) {
        let id = '#' + e.currentTarget.id;
        
        validate(id);
    })
})

email.addEventListener('keyup', function() {
    validateEmail(email)
})

regForm.addEventListener('submit', function(event) {
    event.preventDefault()

    // validate('#firstName');
    // validate('#lastName');

    for(let i = 0; i < event.currentTarget.length; i++) {

        if(event.currentTarget[i].type === 'text') {
            validate('#' + event.currentTarget[i].id)
        }

    }

    validateEmail(email);

    if(validate('#firstName') && validate('#lastName') && validateEmail(email)) {
        // skickar iväg till databasen
        console.log('Success!!!!! wohoooo');
        
        let user = {
            firstName: document.querySelector('#firstName').value,
            lastName: event.currentTarget.lastName.value,
            email: event.currentTarget.email.value
        }

        console.log(user);
        regForm.reset();

       
    } else {
        console.log('nope!');
    }
})