var form = document.addItem

form.addEventListener("submit", function(event) {
    event.preventDefault()
    var item = form.title.value
    form.title.value = ""

    var addToList = document.createElement("li")
    addToList.textContent = item
    document.getElementById("list").append(addToList)

    var editButton = document.createElement("button")
   
    editButton.textContent = "edit"
    editButton.style.backgroundColor = "cornflowerblue"
    editButton.style.borderColor = "cornflowerblue"
    editButton.addEventListener("click", function() {
        var editItem = document.createElement("input");
        editItem.setAttribute("type", "text");
    })

    addToList.append(editButton)

    var XButton = document.createElement("button")

    XButton.textContent = "X"
    XButton.style.backgroundColor = "crimson"
    XButton.style.borderColor = "crimson"
    XButton.addEventListener("click", function() {
        addToList.remove();
        XButton.remove();
        editButton.remove();
    })
    addToList.append(XButton)

})




