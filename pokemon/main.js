const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        showData(data)
    }
}

function showData(data) {
    for (let i = 0; i < data.objects[0].pokemon.length; i++) {
        const h1 = document.createElement("h1")
        h1.textContent = data.objects[0].pokemon[i].name
        document.body.appendChild(h1)
        let datasheet = data.objects[0].pokemon[i].resource_uri
        let p = document.createElement("p")
        p.textContent = `API location: ${datasheet}`
        document.body.appendChild(p)
    }
}