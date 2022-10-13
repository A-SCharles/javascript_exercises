let users = [{
    name: "Charles",
    email: "charles@gmail.com",
    password: "pass"
}]
let user = [{}]

// Register
const btnRegister = document.getElementById("btnRegister").onclick = (name, email, password) => {
    name = document.getElementById("newName").value
    email = document.getElementById("newEmail").value
    password = document.getElementById("newPassword").value

    users.push({
        name: name,
        email: email,
        password: password
    })
    alert("New user added")
    console.table(users)
}

// Login
const btnLogin = document.getElementById("btnlogin").onclick = (email, password) => {
    email = document.getElementById("email").value
    password = document.getElementById("password").value
    //  loops through users
    for (var i = 0; i < users.length; i++) {
        // validate
        if (email == users[i].email) {
            if (password == users[i].password) {
                alert("Welcome " + users[i].name)
            }
        }

    }
}