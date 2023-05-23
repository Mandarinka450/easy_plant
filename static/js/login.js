var btnPass = document.querySelector('.form-login__icon-eye'), 
    inputPass = document.querySelector('.form-login__password');

btnPass.onclick = function () {
    if(inputPass.getAttribute('type') === 'password') {
        inputPass.setAttribute('type', 'text');
        btnPass.classList.add('active');
    } else{
        inputPass.setAttribute('type', 'password');
        btnPass.classList.remove('active');

    }
}
