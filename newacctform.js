checkInput();

const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const email = document.getElementById('email');
const password2 = document.getElementById('password2');

form.addEventListener('submit' , (e) => {
    e.preventDefault();

    checkInput();
});

function checkInputs() {
    //get the values from the input
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
    } else {
        setSuccessFor(username);
    }

    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if(isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSeccessFor(email);
    }
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');

    // add error message inside small
    small.innerText = message;

    // add error class
    formControl.className = 'form-control error';
}

function setSeccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {

}