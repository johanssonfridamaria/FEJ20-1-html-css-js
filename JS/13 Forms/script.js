const regForm = document.querySelector('#regForm');

regForm.addEventListener('submit', function(e) {
    e.preventDefault()


    if(!(e.currentTarget['toc'].checked)){
        alert('you must accept the terms and conditions')
        return false
    }

    // let variabel = 'address'

    let firstName = e.currentTarget[0].value;
    // console.log(firstName)
    let lastName = e.currentTarget.lastName.value;
    // console.log(lastName)
    let address = e.currentTarget['address'].value;
    // console.log(firstName, lastName, address)


    let user = {
        firstName: e.currentTarget.firstName.value,
        lastName: e.currentTarget.lastName.value,
        address: e.currentTarget.address.value,
        role: e.currentTarget.role.value,
    }

    console.log(user);
})