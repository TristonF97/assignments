const form1 = document.add

form1.addEventListener("submit", function(event){
    event.preventDefault();

    const addNum1 = form1.add1.value
    const addNum2 = form1.add2.value
    form1.add1.value = ""
    form1.add2.value = ""

    const addAnswer = document.createElement("h1")
    addAnswer.textContent = ("Addition: " + (+addNum1 + +addNum2))
    document.getElementById("answer").append(addAnswer)
})

const form2 = document.subtract

form2.addEventListener("submit", function(event){
    event.preventDefault()

    const subNum1 = form2.sub1.value
    const subNum2 = form2.sub2.value
    form2.sub1.value = ""
    form2.sub2.value = ""

    const subAnswer = document.createElement("h1")
    subAnswer.textContent = "Subtraction: " + (subNum1 - subNum2)
    document.getElementById("answer").append(subAnswer)
})

const form3 = document.multiply

form3.addEventListener("submit", function(event){
    event.preventDefault()

    const mulNum1 = form3.mul1.value
    const mulNum2 = form3.mul2.value
    form3.mul1.value = ""
    form3.mul2.value = ""

    const mulAnswer = document.createElement("h1")
    mulAnswer.textContent = "Multiplication: " + mulNum1 * mulNum2
    document.getElementById("answer").append(mulAnswer)
})