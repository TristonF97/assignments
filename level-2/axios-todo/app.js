// Part 1 - GET
function getTodo() {
    axios.get("https://api.vschool.io/tristonf/todo")
        .then(response => createTodo(response.data))
        .catch(error => console.log(error))
}

// Part 2 - POST
// Submit Form
const form = document.form

form.addEventListener("submit", event => {   // eventListener says form is undefined
    event.preventDefault()

    const newTodo = {
        title: form.title.value,
        description: form.description.value,
        price: form.price.value,
        imgUrl: form.imgUrl.value
    }

    axios.post("https://api.vschool.io/tristonf/todo", newTodo)
        .then(response => createTodo(response.data))
        .catch(error => console.log(error))
})

// Form Divider
const formDiv = document.createElement("div");
formDiv.className = "formDivider";
form.appendChild(formDiv)

// The Post
function createTodo(data) {
    document.getElementById("madeTodos").textContent = ""

    for (let i = 0; i < data.length; i++) {

        const madeTodos = document.getElementById("madeTodos");

        // Title
        const listTitle = document.createElement("h1");
        listTitle.textContent = data[i].title;
        madeTodos.appendChild(listTitle);

        // Description
        const listDesc = document.createElement("h2")
        listDesc.textContent = `Description:  ${data[i].description}`
        madeTodos.appendChild(listDesc);

        // Price
        const listPrice = document.createElement("h2");
        listPrice.textContent = `Price: $${data[i].price}`
        madeTodos.appendChild(listPrice);

        // Image
        const image = document.createElement("img");
        image.src = data[i].imgUrl;
        image.style.height = "300px";
        image.style.width = "200px";
        madeTodos.appendChild(image);

        // Completed div
        const questionCheck = document.createElement("div");
        // questionCheck.className = "questionDiv";
        madeTodos.appendChild(questionCheck);

        // Question
        const question = document.createElement("h2");
        question.textContent = "Completed: ";
        questionCheck.appendChild(question);

        // Checkbox
        const checkbox = document.createElement("INPUT");
        checkbox.setAttribute("type", "checkbox");
        checkbox.style.height = "25px";
        checkbox.style.width = "25px";
        question.appendChild(checkbox);

        // Delete Button
        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Delete";
        deleteBtn.style.height = "50px";
        deleteBtn.style.width = "150px";
        madeTodos.appendChild(deleteBtn);

        // Divider
        const seperate = document.createElement("div");
        seperate.className = "divider";
        madeTodos.appendChild(seperate);

        // Part 3 - PUT
        const id = data[i]._id;

        checkbox.addEventListener("change", event => {
            const complete = {
                completed: true
            };
            const url = `https://api.vschool.io/tristonf/todo/${id}`;
            axios.put(url, complete).then(response => response.data)
                .catch(error => console.log(error));
        })

        if (data[i].completed === true) {
        listTitle.style.textDecoration = "line-through"
        }

        // Part 4 - DELETE
        deleteBtn.addEventListener("click", event => {
            event.preventDefault()
            axios.delete(`https://api.vschool.io/tristonf/todo/${id}`)
                .then(response => console.log(response.data))
                .catch(error => console.log(error))
        })

    }
}

getTodo()