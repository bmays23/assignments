
const form = document["addition"]

form.addEventListener("submit", function(event) {
    event.preventDefault()

    const firstNum = form.firstNum.value;
    const secondNum = form.secondNum.value;

    const result = parseInt(firstNum) + parseInt(secondNum);

    const input = document.createElement("div")
    input.textContent = result
    document.getElementsByName("result")[0].append(input)
})


const subForm = document["subtraction"]

subForm.addEventListener("submit", function(event) {
    event.preventDefault()

    const firstNumSub = subForm.firstNumSub.value;
    const secondNumSub = subForm.secondNumSub.value;

    const subResult = parseInt(firstNumSub) - parseInt(secondNumSub);

    const input = document.createElement("div")
    input.textContent = subResult
    document.getElementsByName("subResult")[0].append(input)
})

const mulForm = document["multiplication"]

mulForm.addEventListener("submit", function(event) {
    event.preventDefault()

    const firstNumMul = mulForm.firstNumMul.value;
    const secondNumMul = mulForm.secondNumMul.value;

    const mulResult = parseInt(firstNumMul) * parseInt(secondNumMul);

    const input = document.createElement("div")
    input.textContent = mulResult
    document.getElementsByName("mulResult")[0].append(input)
})

