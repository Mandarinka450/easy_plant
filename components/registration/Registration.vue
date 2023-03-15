<template>
    <div class="container-start">
      <div class="container-main">
        <div class="block-start">
             <h1 class="block-start__title">Регистрация</h1>
             <form class="form-login" action="">
                <div class="form-login__wrapper">
                   <input class="form-login__name" type="text" placeholder="Имя">
                   <img class="form-login__icon-user" src="~assets/images/icons/user.png" alt="#">
                </div>
                <div class="form-login__wrapper">
                   <input class="form-login__surname" type="text" placeholder="Фамилия">
                   <img class="form-login__icon_sur" src="~assets/images/icons/user.png" alt="#">
                </div>
                <div class="form-login__wrapper">
                   <input class="form-login__email" type="email" placeholder="E-mail">
                   <img class="form-login__icon-email" src="~assets/images/icons/mail.png" alt="#">
                </div>
                <div class="form-login__wrapper">
                   <input class="form-login__password" type="password" placeholder="Пароль">
                   <img class="form-login__icon-password" src="~assets/images/icons/key.png" alt="#">
                   <img class="form-login__icon-eye" src="~assets/images/icons/eye.png" alt="#">
                </div>
                <div class="form-login__wrapper">
                   <input class="form-login__password" type="password" placeholder="Подтвердите пароль">
                   <img class="form-login__icon-password" src="~assets/images/icons/key.png" alt="#">
                   <img class="form-login__icon-eye" src="~assets/images/icons/eye.png" alt="#">
                </div>
                <button class="form-login__button">Зарегистрироваться</button>
             </form>
             <p class="block-start__text">Продолжая с использованием Email Вы соглашаетесь с Условиями использования и Политикой конфиденциальности.</p>
             <p class="block-start__subtitle">Уже зарегистрированы? <NuxtLink to="/login" style="color: #8FB277;">Войти</NuxtLink></p>

        </div>
      </div>
      <div class="container-picture">
        <img class="container-picture__image" src="~assets/images/plant.png" alt="#">
      </div>
    </div>
</template>

<script>
export default {
  name: 'Registration'
}
</script>

<style scoped>
.form-login__icon-email{
    position: absolute;
    left: 14px;
    top: 24px;
}
.form-login__icon_sur{
    position: absolute;
    left: 14px;
    top: 20px;
}
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
.form-login__icon-user{
    position: absolute;
    left: 14px;
    top: 11px;
}
.form-login__wrapper{
    width: 40%;
    position: relative;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.block-start__text{
    width: 40%;
    margin-top: 10px;
    font-size: 10px;
    line-height: 110%;
    text-align: center;
    letter-spacing: -1px;
    color: #7C7C7C;
}
.block-start__subtitle{
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
    width: 40%;
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
    margin-top: 10px;
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
.form-login__name{
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
.form-login__surname{
    margin-top: 10px;
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

.form-login__name:focus, .form-login__password:focus, .form-login__surname:focus, .form-login__email:focus{
    outline: 0.4px solid #9D9D9D;
}
.block-start{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}
.block-start__title{
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
  .form-login__button, .form-login__wrapper{
    width: 55%;
  } 
}

@media (max-width: 850px) {
  .container-start{
    flex-direction: column-reverse;
    position: relative;
  }
  .container-picture{
    width: 100%;
    height: 50%;
  }
  .container-main{
    padding: 30px;
    width: 100%;
    height: 50%;
  }


}
@media (max-width: 610px) {
    .form-login__wrapper{
        width: 70%;
    }
  .form-login__name, .form-login__password, .form-login__email, .form-login__surname{
    width: 100%;
  }
  .form-login__button{
    width: 70%;
  }
  .block-start__text{
    width: 70%;
  }
}

@media (max-width: 480px) {
    .form-login__wrapper{
        width: 85%;
    }
  .form-login__name, .form-login__password, .form-login__email, .form-login__surname{
    width: 100%;
  }
  .form-login__button{
    width: 85%;
  }
  .block-start__text{
    width: 80%;
  }
}


</style>