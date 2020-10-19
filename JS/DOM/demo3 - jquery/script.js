/*
    Javascript:
    let selectButtonId = document.getElementById('btn');
    let selectButtonTag = document.getElementsByTagName('button');
    let selectButtonClass = document.getElementsByClassName('btnClass');

    JQuery:
    let selectButtonId = $('#btn');
    let selectButtonTag = $('button');
    let selectButtonClass = $('.btnClass');

*/

// För att kunna skriva JQuery behöver vi först göra en selector på document och kolla så det har laddat klart.
// Sen gör vi en funktion som vi kör våran JQuery i


$(document).ready(function() {

    // Här i kan vi skriva JQuery

    // SKRIVA UT TEXT
    // document.querySelector('#div1').innerText = 'Detta är en text, skriven med Javascript';
    $('#div1').text('Detta är en text, skriven med Jquery');

    // SKRIVA UT HTML
    // document.querySelector('#div2').innerHTML = '<p>paragraf</p>';
    $('#div2').html('<p>paragraf</p>');

    // ÄNDRA CSS
    // document.getElementById('div1').style.color = '#ff0000';
    $('#div1').css('color', '#0000ff');

    // document.querySelector('#div2').style.fontSize = '2rem';
    $('#div2').css('font-size', '2rem');

    // document.querySelector('#div2').style.display = 'none';
    $('#div2').hide();

    // document.querySelector('#div2').style.display = '';
    $('#div2').show();



    // document.querySelector('#btn').addEventListener('click', () => {
    //     let div2 = document.querySelector('#div2');

    //     if(div2.style.display === 'none') {
    //         div2.style.display = '';

    //     } else {
    //         div2.style.display = 'none';
    //     }
    // })

    $('#btn').click(() => {
        $('#div2').toggle();
    })



})