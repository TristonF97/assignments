const form = document.myForm

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const firstName = form.firstName.value
    const lastName = form.lastName.value
    const age = form.age.value
    const gender = form.gender.value
    const location = form.location.value
    let checkedDiets = []
    for (let i = 0; i < form.diet.length; i++){
        if (form.diet[i].checked) {
            checkedDiets.push(form.diet[i].value)
        }
    }
    alert("First name: " + firstName + "\nLast name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nLocation: " + location + "\nDietary restrictions: " + checkedDiets)
    "First name: " + firstName + "\nLast name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nLocation: " + location + "\nDietary restrictions: " + checkedDiets
})