
let count = 0

window.addEventListener("click", function() {
    count ++
    document.getElementById("form").innerHTML = count;
    form.style.fontSize = "60px"
    form.style.textAlign = "center"

    localStorage.setItem("count", count)


})

window.onload = () => {
    count = localStorage.getItem("count")
}

const display = document.getElementById("form")
    display.textContent = localStorage.getItem("count")
    display.style.fontSize = "60px"
    display.style.textAlign = "center"