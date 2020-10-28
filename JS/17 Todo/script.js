/*
OM ni vill:
    -   gör så att man kan klarmarkera en todo och visa det i webbläsaren
    -   skapa en filtreringsfunktion med en select där man kan välja om det ska visas de som är klara, inte klara eller alla

*/


let todos = [
    {
        id: '1',
        title: "todo One",
        completed: false
    },
    {
        id: '2',
        title: "todo Two",
        completed: false
    },
    {
        id: '3',
        title: "todo Three",
        completed: false
    }
]

// console.log(todos);
// console.log(JSON.stringify(todos))

const form = document.querySelector('#todoForm');
const input = document.querySelector('#todoInput');
const addBtn = document.querySelector('#addTodo');
const output = document.querySelector('#todos');

fetch('https://jsonplaceholder.typicode.com/todos?_start=1&_limit=10')
.then(res => res.json())
.then(data => {
    todos = data;
    listTodos();
})

const listTodos = () => {
    output.innerHTML = '';
    todos.forEach(todo => {
        output.innerHTML += 
        `
        <div id="${todo.id}" class="border rounded bg-white d-flex justify-content-between align-items-center mt-1 p-2">${todo.title} <button class="btn btn-danger px-3">X</button></div>
        
        `
    })
    localStorage.setItem("todos", JSON.stringify(todos));
}

let old = JSON.parse(localStorage.getItem("todos"));
// console.log(old)
if(old != null) {
    todos = old
}

listTodos();

input.addEventListener('keyup', () => {
    input.classList.remove('is-invalid');
})

form.addEventListener('submit', (e) => {
    e.preventDefault();




    if(input.value !== '') {
        input.classList.remove('is-invalid');



        // let title = input.value;

        // fetch('https://jsonplaceholder.typicode.com/todos', {
        //     method: 'POST',
        //     headers: {
        //         'Content-type': 'application/json; charset=UTF-8'
        //     },
        //     body: JSON.stringify({
        //         title: title,
        //         completed: false
        //     })
        // })
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data);
        //     todos.push(data)
        //     listTodos();
        //     input.value = '';
        // })




        let todo = {
            id: Date.now(),
            title: input.value,
            completed: false
        }
        todos.push(todo);
        listTodos();
        input.value = '';

    } else {
        input.classList.add('is-invalid');
        setTimeout(() => {
            input.classList.remove('is-invalid');
        },3000)
    }
})

output.addEventListener('click', (e) => {
    // console.log(e.target.parentNode.id)
    todos = todos.filter(t => t.id != e.target.parentNode.id);

    listTodos();

})