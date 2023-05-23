var btnPass = document.querySelectorAll('.form-register__icon-eye');

btnPass.forEach( function (btn){
    btn.onclick = function () {
        let target = this.getAttribute('data-target'),
           inputPass = document.querySelector(target);

        if(inputPass.getAttribute('type') === 'password') {
            inputPass.setAttribute('type', 'text');
            btn.classList.add('active');
        } else{
            inputPass.setAttribute('type', 'password');
            btn.classList.remove('active');
    
        }
    }
})