const div = document.querySelector('#div1');
let div2 = document.querySelector('#div2');
const btn = document.querySelector('#btn');

const changeText = () => {
    div.innerText = 'Här kan det stå vad som helst'
}

// Lyssna på eventet här istället för i .html filen
btn.addEventListener('click', () => {
    div2.style.backgroundColor = '#cecece';
    div2.innerHTML = 
    `
    <ul>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
    </ul>
    `
})