const mainForm = document['main-todo']

//PART 1- GET

axios.get("https://api.vschool.io/brittanymays/todo")
.then(Response => {
    for (let i = 0; i < Response.data.length; i++) {
        let data = (Response.data[i])
        
        getTodo(data)

      
    }
})
.catch(error => console.log(error))


//PART 2- POST

mainForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const newTodo = {
        title: mainForm['main-title'].value,
        description: mainForm['main-disc'].value,
        price: mainForm['main-price'].value,
    }
    
    axios.post("https://api.vschool.io/brittanymays/todo", newTodo)
    .then(Response => {
        getTodo (Response.data)
    })
    
})

function getTodo (data){
    const newDiv = document.createElement("div")
    const newTitleDiv = document.createElement("h1")
    const newDiscDiv = document.createElement("h3")
    const newPriceDiv = document.createElement("h2")
    const newEditButton = document.createElement("button")
    const newDeleteButton = document.createElement("button")
    const newcheckboxDiv = document.createElement("input");
    newcheckboxDiv.setAttribute("type", "checkbox");
    
    newTitleDiv.textContent = data.title
    newDiscDiv.textContent = data.description
    newPriceDiv.textContent = data.price
    newDeleteButton.textContent = "Delete"
    newEditButton.textContent = "Edit"
    newDiv.style.border = "5px dashed olive"
    newDiv.style.margin = "10px"
    newDiv.style.padding = "10px"
    
    document.body.append(newDiv)
    newDiv.appendChild(newTitleDiv)
    newDiv.appendChild(newDiscDiv)
    newDiv.appendChild(newPriceDiv)
    newDiv.appendChild(newDeleteButton)
    newDiv.appendChild(newEditButton)
    newDiv.appendChild(newcheckboxDiv)

    if (data.completed){
        lineThrough (newTitleDiv, newDiscDiv, newPriceDiv, newcheckboxDiv)
    }

    //PART 3- PUT PART 1
    newcheckboxDiv.addEventListener("change", (event) =>{
        if (event.target.checked) {
            axios.put("https://api.vschool.io/brittanymays/todo/"+data._id, completedTrue)
            .catch(error => console.log(error))

            lineThrough (newTitleDiv, newDiscDiv, newPriceDiv, newcheckboxDiv)
          } else {
            axios.put("https://api.vschool.io/brittanymays/todo/"+data._id, completedfalse)

            undoLine(newTitleDiv, newDiscDiv, newPriceDiv, newcheckboxDiv)
        }
    })

    function lineThrough(title, disc, price, checkBox) {
        title.style.textDecorationLine = "line-through";
        disc.style.textDecorationLine = "line-through";
        price.style.textDecorationLine = "line-through"
        checkBox.checked = true;
    }
    
    function undoLine (title, disc, price, checkBox) {
        title.style.textDecorationLine = null;
        disc.style.textDecorationLine = null;
        price.style.textDecorationLine = null
        checkBox.checked = false;
    }

     //PART 4- DELETE
     newDeleteButton.addEventListener("click",() =>{
        newDiv.remove();
            axios.delete("https://api.vschool.io/brittanymays/todo/"+data._id)
        })
    
        const completedTrue = {
            completed: "true"
        }
    
        const completedfalse = {
            completed: "false"
        }
    

    //PART 5- EDIT (EXTRA CREDIT)
    newEditButton.addEventListener("click", () =>{
        const editItemTitle = document.createElement("input")
        editItemTitle.value = newTitleDiv.textContent
        editItemTitle.setAttribute("type", "text");
        newDiv.append(editItemTitle)

        const editItemDisc = document.createElement("input")
        editItemDisc.value = newDiscDiv.textContent
        editItemDisc.setAttribute("type", "text");
        newDiv.append(editItemDisc)

        const editItemPrice = document.createElement("input")
        editItemPrice.value = newPriceDiv.textContent
        editItemPrice.setAttribute("type", "number");
        newDiv.append(editItemPrice)

        var submit = document.createElement("button")
        submit.textContent = "Submit"
        newDiv.append(submit)
        submit.addEventListener("click", function() {
            //console.log("edit was submitted")
            //console.log(editItem.value)
            newTitleDiv.textContent = editItemTitle.value
            newDiscDiv.textContent = editItemDisc.value
            newPriceDiv.textContent = editItemPrice.value
            submit.remove()
            editItemTitle.remove()
            editItemDisc.remove()
            editItemPrice.remove()
        })
    })

    
    
}


