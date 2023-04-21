

const form = document.getElementById('form-login');
const username = document.getElementById('name');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const password1 = document.getElementById('first-password');
const password2 = document.getElementById('second-password');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();

});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('invalid');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('invalid');
    inputControl.classList.remove('error');
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const nameValue = username.value.trim();
    const surnameValue = surname.value.trim();
    const emailValue = email.value.trim();
    const password1Value = password1.value.trim();
    const password2Value = password2.value.trim();

    if (nameValue === ''){
        setError(username, 'Поле обязательно для заполнения');
    } else{
        setSuccess(username);
    }

    if (surnameValue === ''){
        setError(surname, 'Поле обязательно для заполнения');
    } else{
        setSuccess(surname);
    }

    if (emailValue === ''){
        setError(email, 'Поле обязательно для заполнения');
    }else if (!isValidEmail(emailValue)) {
        setError(email, 'Неккоретный адрес электронной почты');
    }else {
        setSuccess(email);
    }

    if (password1Value === ''){
        setError(password1, 'Поле обязательно для заполнения');
    }else if (password1Value.length < 8 ) {
        setError(password1, 'Пароль должен состоять из не менее 8 символов')
    } else {
        setSuccess(password1);
    }

    if(password2Value === '') {
        setError(password2, 'Подтвердите пароль');
    } else if (password2Value !== password1Value) {
        setError(password2, 'Пароль не подтвержден');
    } else {
        setSuccess(password2);
    }

};