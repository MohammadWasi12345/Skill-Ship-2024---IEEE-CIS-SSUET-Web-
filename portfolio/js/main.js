// FORM VALIDATION

// constants
const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('emailaddress');
const subject = document.getElementById('subject');
const message = document.getElementById('message');


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInput();
    
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}
const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const successDisplay = inputControl.querySelector('.success');

    successDisplay.innerText = 'Success';
    inputControl.classList.remove('error');
    inputControl.classList.add('success');
};
const isValidEmail = (email) => {
    let validateEmail = /^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$)/;
    return validateEmail.test(String(email).toLowerCase());
}

const validateInput = () => {

    const userVal = userName.value.trim();
    const emailVal = email.value.trim();
    const subjectVal = subject.value.trim();
    const messageVal = message.value.trim();

    if (userVal === '') {
        setError(userName, 'username is required');

    } else {
        setSuccess(userName);
    }
    if (emailVal === '') {
        setError(email, 'email required')
    } else if (!isValidEmail(emailVal)) {
        setError(email, 'provide a valid email')
    } else {
        setSuccess(email)
    }

    if (subjectVal === '') {
        setError(subject, 'this field is required')
    } else {
        setSuccess(subject)
    }

    if (messageVal === '') {
        setError(message, 'this field is required')
    } else {
        setSuccess(message)
    }
};


// sending email to gmail

const sendEmail = ()=>{
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "was123@gmail.com",
        Password : "67D76E91FA49775C5073BD0413CCF1FD4C26",
        To : 'wasimohammad679@gmail.com',
        From : "was123@gmail.com",
        Subject : subject,
        Body : message
    }).then(
      message => alert(message)
    );
}