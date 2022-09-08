const form = document.form

form.addEventListener("submit", function(event) {
    event.preventDefault()

    const goom = form.amountOne.value
    const bomb = form.amountTwo.value

    const total = parseInt(goom * 5) + parseInt(bomb * 7)

    const input = document.createElement("div")
    input.textContent = total + " coins"
    input.style.fontSize = "50px"
    input.style.textAlign = "center"
    document.getElementsByName("body")[0].append(input)
})