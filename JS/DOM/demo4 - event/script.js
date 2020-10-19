$(document).ready(function() {

    const btn = document.querySelector('#btnAlert');

    const form = document.querySelector('#loginForm');

    // btn.addEventListener('click', function() {
    //     alert('Warning JS')
    //     console.log('click')

    // })

    // $('#btnAlert').click(function() {
    //     alert('Warning JQ')
    //     console.log('click jq')

    // })

    // btn.addEventListener('dblclick', function() {
    //     alert('Warning')
    // })

    // btn.addEventListener('mousedown', function() {
    //     alert('Warning')
    // })

    // btn.addEventListener('mouseup', function() {
    //     alert('Warning')
    //     console.log('mouseup')
    // })

    // btn.addEventListener('mouseenter', function() {
    //     alert('Warning')
    // })

    // btn.addEventListener('mouseleave', function() {
    //     alert('Warning')
    // })


    // form['firstName'].addEventListener('keyup', (event) => {
    //     console.log(event.key);
    // })

    // form['firstName'].addEventListener('keydown', (event) => {
    //     console.log(event.key);
    // })

    form['firstName'].addEventListener('focus', function() {
        console.log('input är i focus')
        this.classList.add('focus');
    })
    form['firstName'].addEventListener('blur', function() {
        console.log('gick bort från input')
        this.classList.remove('focus');
    })


    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Här vill vi validera formuläret och se till att allt fungerar
        console.log('validerar formulär');
        console.log('validering klar! skickar till databasen');
    })



})
