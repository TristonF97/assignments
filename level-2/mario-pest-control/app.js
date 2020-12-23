document.addEventListener("submit", event => {
    event.preventDefault()

    const form1 = document.goombaForm
    const form2 = document["bob-omb-form"]
    const form3 = document["cheep-cheep-form"]

    const goombaValue = form1.goombaNumber.value
    const bobOmbValue = form2.bobOmbNumber.value
    const cheepCheepValue = form3.cheepCheepNumber.value

    const goombaTotal = goombaValue * 5
    const bobOmbTotal = bobOmbValue * 7
    const cheepCheepTotal = cheepCheepValue * 11

    const total = +goombaTotal + +bobOmbTotal + +cheepCheepTotal + " Coins"

    document.getElementById("total").append(total)
})