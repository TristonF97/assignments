const form = document.addItem

form.addEventListener("submit", function(event){
    event.preventDefault()
    var newItem = document.createElement("li");
        var newDiv = document.createElement("div");
        newItem.textContent = title.value;
        newItem.style.textAlign = "center"
        newDiv.textContent = ""
        form.title.value = "";
        var shopList = document.getElementById("list");
        shopList.append(newItem);
        newItem.append(newDiv)

    var editBtn = document.createElement("button")
    editBtn.textContent = "edit";
    editBtn.style.margin = "2px";
    newDiv.append(editBtn);

    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.style.margin = "2px";
    newDiv.append(deleteBtn)

    deleteBtn.addEventListener("click", function(){
        newItem.remove();
    })
})