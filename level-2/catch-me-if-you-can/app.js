function sum(x, y){
    if(isNaN(x) || isNaN(y)){
        throw new Error("This is an error");
    } else 
    return x + y;
};

try {
    sum("1", "2")
}

catch(err){
    console.log(err)
}


const user = {username: "sam", password: "123abc"};

function login(username, password){
    if(username !== user.username && password !== user.password){
        throw new Error("Failed to login")
    } else
    console.log("Login successful");
}

try {
    login("sam", "123abc")
    login("mark", "12345")
}

catch(err){
    console.log(err)
}