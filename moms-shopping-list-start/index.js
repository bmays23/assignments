var form = document.addItem

form.addEventListener("submit", function(event) {
    event.preventDefault()
    var item = form.title.value
    form.title.value = ""

    var addToList = document.createElement("li")
    var text = document.createElement("p")
    text.textContent = item
    document.getElementById("list").append(addToList)
    addToList.append(text)

    var editButton = document.createElement("button")
   
    editButton.textContent = "edit"
    editButton.style.backgroundColor = "cornflowerblue"
    editButton.style.borderColor = "cornflowerblue"
    editButton.style.margin = "0px 0px 0px 3px"
    editButton.addEventListener("click", function() {
        // console.log(addToList.textContent)
        var editItem = document.createElement("input");
        editItem.value = text.textContent
        editItem.setAttribute("type", "text");
        addToList.append(editItem)
        var submit = document.createElement("button")
        submit.textContent = "Submit"
        addToList.append(submit)
        submit.addEventListener("click", function() {
            console.log("edit was submitted")
            console.log(editItem.value)
            text.textContent = editItem.value
            submit.remove()
            editItem.remove()
        })
    })

    addToList.append(editButton)

    var XButton = document.createElement("button")

    XButton.textContent = "X"
    XButton.style.backgroundColor = "crimson"
    XButton.style.borderColor = "crimson"
    XButton.style.margin = "3px"
    XButton.addEventListener("click", function() {
        addToList.remove();
        // XButton.remove();
        // editButton.remove();
    })
    addToList.append(XButton)

})




