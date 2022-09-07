/*You should collect the following information from the user:

- First name (text input)
- Last name (text input)
- Age (number input)
- Gender (radio buttons with 2 or more options)
- Location they're traveling to (select box with at least 3 options. You're an airline that doesn't fly to many places...)
- Whether they have any dietary restrictions (check boxes for vegetarian, kosher, lactose free, etc. Include at least 3 options)

Each element of the form should be given a `name` attribute so you can access the data in JavaScript and do stuff with it.
*/

const form = document.travelForm

form.addEventListener("submit", function(event) {
    event.preventDefault()
    

    const name = form.firstName.value + " " + form.lastName.value
    const age = form.age.value
    const gender = form.gender.value
    const location = form.city.value
    const dietary = []
    const other = []

    for(let i = 0; i < form.diet.length; i++) {
        if(form.diet[i].checked) {
            dietary.push(form.diet[i].value)
        }

    }

    other.push(form.otherDiet.value)

    alert(name + "\n" + age + "\n" + gender + "\n" + location + 
    "\n" + dietary + "\n" + other)

    form.firstName.value = ""
    form.lastName.value = ""
    form.age.value = ""
    form.otherDiet.value = ""


})