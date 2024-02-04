const username = document.getElementById('username')
const email = document.getElementById('email')
const psw = document.getElementById('psw')
const cpsw = document.getElementById('cpsw')
const form = document.getElementById('form')
const errorUsername = document.getElementById('errorUsername')
const errorEmail = document.getElementById('errorEmail')
const errorPsw = document.getElementById('errorpsw')
const errorCpsw = document.getElementById('errorcpsw')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    const messages = []
    if (errorUsername.value === '' || errorUsername.value === null) {
        messages.push("Username is required.")
        errorUsername.innerHTML = "<h3>Username is required.</h3>"
        if (errorUsername.style.display === "none") {
            errorUsername.style.display = "block";
        } else {
            errorUsername.style.display = "none";
        }
    }

    if (username.value.length <6) {
        messages.push("Username is too short. Minimum of 6 characters")
        errorUsername.innerHTML = "<h3>Username is too short.</h3>"
        if (errorUsername.style.display === "none") {
            errorUsername.style.display = "block";
        } else {
            errorUsername.style.display = "none";
        }
    }

    if (username.value.length >20) {
        messages.push("Username is too long. Maximum of 20 characters.")
        errorUsername.innerHTML = "<h3>Username is too long. Maximum of 20 characters.</h3>"
        if (errorUsername.style.display === "none") {
            errorUsername.style.display = "block";
        } else {
            errorUsername.style.display = "none";
        }
    }

    if (psw.value.length <= 6) {
        messages.push("Password too short. Minimum of 8-19 characters.")
        errorPsw.innerHTML = "<h3>Password too short. Minimum of 8-19 characters.</h3>"
        if (errorPsw.style.display === "none") {
            errorPsw.style.display = "block";
        } else {
            errorPsw.style.display = "none";
        }
    }
    if (psw.value.length >= 20) {
        messages.push("Password too long. Minimum of 8-19 characters.")
        errorPsw.innerHTML = "<h3>Password too long. Minimum of 8-19 characters.</h3>"
        if (errorPsw.style.display === "none") {
            errorPsw.style.display = "block";
        } else {
            errorPsw.style.display = "none";
        }
    }
    if (psw.value !== cpsw.value) {
        messages.push("Password is not the same.")
        errorCpsw.innerHTML = "<h3>Password is not the same.</h3>"

        if (errorCpsw.style.display === "none") {
            errorCpsw.style.display = "block";
        } else {
            errorCpsw.style.display = "none";
        }
    }
    if (messages.length > 0) {
        e.preventDefault()
    }
})
