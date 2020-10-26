// HTTP
// GET - när vi vill hämta saker
// POST - när vi vill skapa saker
// PUT - när vi vill uppdatera saker
// PATCH - när vi vill uppdatera delar av en sak
// DELETE - när vi vill ta bort en sak

const btn = document.querySelector('#btn');
const textOutput = document.querySelector('#text-output');
const jsonBtn = document.querySelector('#btn2');
const jsonOutput = document.querySelector('#json-output');

let posts = [];

const getJsonAsync = async () => {

    try {
        const res = await fetch('json.json')
        const data = await res.json()
        posts = data;
        jsonOutput.innerHTML = '';
        posts.forEach(post => {
            jsonOutput.innerHTML +=
            `
            <div class="card">
                <div class="card-body">
                    <h3 class="card-title">${post.title}</h3>
                    <p class="card-text">${post.body}</p>
                </div>
            </div>
            `
        })
    }
    catch(err) {
        console.log(err);
    }

}



const getJson = () => {

    fetch('json.json')
    .then(res => res.json())
    .then(data => {
        posts = data;
        // console.log(posts);

        jsonOutput.innerHTML = '';
        posts.forEach(post => {
            jsonOutput.innerHTML +=
            `
            <div class="card">
                <div class="card-body">
                    <h3 class="card-title">${post.title}</h3>
                    <p class="card-text">${post.body}</p>
                </div>
            </div>
            `
        })
    })
    .catch(error => {
        console.log('fel! ' + error);
    })
}



btn.addEventListener('click', function() {


    fetch('text.txt')
    .then(function(res) {
        // console.log(res.text());
        return res.text()
    })
    .then(function(data) {
        // console.log(data)
        textOutput.innerText = data;
    })

})

jsonBtn.addEventListener('click', getJsonAsync);



const promise = function() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(
                {
                    status: 200,
                    obj() {
                        return {
                            title: "blog post 3",
                            body: "det här är en blog post"
                        }
                    }
                    // post: {
                    //     title: "blog post 3",
                    //     body: "det här är en blog post"
                    // }
                }
            )
            // reject(new Error('could not get data'))
        }, 2000)
    })
}


promise()
.then(res => res.obj())
.then(post => console.log(post))
.catch(err => console.log(err))