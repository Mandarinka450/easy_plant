<template>
    <div class="container-start">
      <div class="container-main">
        <div class="container-login">
             <h1 class="container-login__title">Вход</h1>
             <form class="form-login" action="">
                <div class="form-login__wrapper">
                   <input class="form-login__email" type="email" placeholder="E-mail">
                   <img class="form-login__icon-login" src="~assets/images/icons/mail.png" alt="#">
                </div>
                <div class="form-login__wrapper">
                   <input class="form-login__password" type="password" placeholder="Пароль">
                   <img class="form-login__icon-password" src="~assets/images/icons/key.png" alt="#">
                   <img class="form-login__icon-eye" src="~assets/images/icons/eye.png" alt="#">
                </div>
                <button class="form-login__button">Войти</button>
             </form>
             <p class="container-login__subtitle">Нет аккаунта? <NuxtLink to="/registration" style="color: #8FB277;">Регистрация</NuxtLink></p>

        </div>
      </div>
      <div class="container-picture">
        <img class="container-picture__image" src="~assets/images/plant.png" alt="#">
      </div>
    </div>
</template>

<script>
export default {
  name: 'LoginMain'
}
</script>

<style scoped>
.form-login__icon-eye{
    position: absolute;
    right: 14px;
    top: 24px;
}
.form-login__icon-password{
    position: absolute;
    left: 14px;
    top: 26px;
}
.form-login__icon-login{
    position: absolute;
    left: 14px;
    top: 14px;
}
.form-login__wrapper{
    width: 40%;
    position: relative;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.container-login__subtitle{
    margin-top: 20px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 110%;
    text-align: center; 
    letter-spacing: -1px;
    color: #7C7C7C;
}

.form-login__button{
    width: 36%;
    height: 40px;
    transition: all 0.5s;
    background: #8FB377;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 99.5%;
    letter-spacing: 0.4px;
    border: none;
    margin-top: 45px;
    color: #FFFFFF;
}

.form-login__button:hover{
    background: #768A68;
    transition: all 0.5s;
}
.form-login{
    position: relative;
    margin-top: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}



.form-login__email{
    position: relative;
    box-sizing: border-box;
    height: 43px;
    width: 100%;
    background: white;
    padding-left: 49px;
    border: 0.2px solid #9D9D9D;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.05);
    border-radius: 15px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    font-family: 'Montserrat';
    line-height: 110%;
    letter-spacing: -1px;
    color: #CDCDCD;
}
.form-login__password{
    width: 100%;
    margin-top: 10px;
    box-sizing: border-box;
    height: 43px;
    background: #FFFFFF;
    border: 0.2px solid #9D9D9D;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.05);
    border-radius: 15px;
    font-style: normal;
    font-weight: 400;
    padding-left: 49px;
    font-size: 14px;
    font-family: 'Montserrat';
    line-height: 110%;
    letter-spacing: -1px;
    color: #CDCDCD;
}

.form-login__email:focus, .form-login__password:focus{
    outline: 0.4px solid #9D9D9D;
}
.container-login{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}
.container-login__title{
    font-size: 24px;
    line-height: 99.5%;
    letter-spacing: 0.4px;
    color: #000000;
}
.container-start{
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #E0F0D5;
}
.container-main{
  width: 49%;
  height: 100%;
}
.container-picture{
  width: 51%;
  height: 100%;
}
.container-picture__image{
  object-fit: cover;
  width: 100%;
  height: 100%;
}


@media (max-width: 1220px) {
  .form-login__wrapper{
    width: 55%;
  } 
  .form-login__button{
    width: 51%;
  } 
}

@media (max-width: 850px) {
  .container-start{
    flex-direction: column-reverse;
  }
  .container-main, .container-picture{
    width: 100%;
    height: 50%;
  }
}

@media (max-width: 480px) {
    .form-login__wrapper{
      width: 80%;
    }
  .form-login__email, .form-login__password{
    width: 100%;
  }
  .form-login__button{
    width: 76%;
  }
}

</style>