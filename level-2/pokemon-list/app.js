const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        const JSONdata = xhr.responseText;
        const data = JSON.parse(JSONdata);
        pokemon(data.objects[0].pokemon)
    }
}

function pokemon(pokeList) {
    for (let i = 0; i < pokeList.length; i++) {
        const names = document.createElement("h2");
        names.textContent = pokeList[i].name;
        document.body.appendChild(names)
    }
}