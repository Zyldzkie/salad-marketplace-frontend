const form = document.getElementById('form');
const email = document.getElementById('email');
const psw = document.getElementById('psw');
const erroremail = document.getElementById('erroremail');
const errorpsw = document.getElementById('errorpsw');
const errorDiv = document.getElementById('error');

// Example user pass
var usernamesample = 'jrandell12';
var passwordsample = 'randell12';

form.addEventListener('submit', (e) => {
    e.preventDefault();


    const messages = []
    const validUsernameRegex = /^[a-zA-Z0-9_]+$/;

    if (email.value.length < 6) {
        messages.push('Username must be at least 6 characters long.');}

    else if (!validUsernameRegex.test(email.value)) {
        messages.push('Invalid characters in the username. Please use only letters, numbers, and underscores.');}

    else if (email.value.length > 20) {
        messages.push('Username cannot exceed 20 characters.');}
        
    else if (email.value === usernamesample && passwordsample === psw.value) {
        alert('Login successful!');
        // Redirect to the home page
        window.location.href = 'home.html';}
    else {
        messages.push('Invalid username or password. Please try again.');
    }    
    if (messages.length > 0) {
        
        errorDiv.innerHTML = messages;
        errorDiv.style.display = "block";}

});





