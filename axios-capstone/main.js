//PART 1- GET

const getTodo = axios.get("https://api.vschool.io/brittanymays/todo")
.then(response => {listTodo(response.data)})
.catch(error => {console.log(error)})



function listTodo(data) {


    for(let i = 0; i < data.length; i++){
            const h1 = document.createElement('h1')
            h1.textContent = data[i].title
            document.body.appendChild(h1)
        }

}


  

//PART 2- POST

const todoForm = document["todoform"]

todoForm.addEventListener("submit", function(e){
    e.preventDefault()
    
    const newTodo = {
        title: todoForm.title.value
    }
    
    todoForm.title.value = ""
    
    axios.post("https://api.vschool.io/brittanymays/todo", newTodo)
        .then(res => getStuff(data))
        .catch(err => console.log(err))
})

function getStuff(data){
    const newTitleDiv = document.createElement("h1")

    newTitleDiv.textContent = data.title.value

    document.body.appendChild(newTitleDiv)
    
}