let users = [
    {
        name: "Kelly",
        age: 40,
        email: "kelly@example.com"
    },
    {
        name: "Victor",
        age: 23,
        email: "victor@example.com"
    },
    {
        name: "Julia",
        age: 29,
        email: "julia@example.com"
    },
    {
        name: "Marcelo",
        age: 30,
        email: "marcelo@example.com"
    },
    {
        name: "Julia",
        age: 49,
        email: "juuuuhh@example.com"
    }
];

searchUsers(users, "julia")

function searchUsers(listOfUsers, searchValue){
    findUser(listOfUsers, searchValue)
        .then(userFounded => showUser(userFounded))
        .catch(error => showError(error));
}


function findUser(users, searchValue) {
    return new Promise((resolve, reject) => {
        if(!searchValue){
            reject(new Error("Valor de busca inválido"));
        }
        const searchValueUpper = searchValue.toUpperCase();
        const matchedUsers = users.find(user => 
                user.name.toUpperCase() == searchValueUpper || 
                user.age == searchValueUpper || 
                user.email.toUpperCase() == searchValueUpper
            );
        if (matchedUsers) {
            resolve(matchedUsers);
        } else {
            reject(new Error("Usuário não encontrado"));
        }
    });
}

function showUser(user){
    console.log("Usuário Encontrado");
    console.log("Nome: " + user.name);
    console.log("Idade: " + user.age);
    console.log("E-mail: " + user.email);
}

function showError(error){
    console.log(error.message);
}