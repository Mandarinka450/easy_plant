<template>
    <div class="container-start">
      <div class="container-main">
        <div class="container-login">
             <h1 class="container-login__title">Вход</h1>
             <form class="form-login" action="">
                <div class="form-login__wrapper">
                   <input class="form-login__email" type="email" placeholder="E-mail" v-model.trim="state.email" required :class="{ 'error-input': v$.email.$error, 'error-input': state.show422 }">
                   <img class="form-login__icon-login" src="~assets/images/icons/mail.png" alt="#">
                </div>
                <span class="error" v-if="v$.email.$error">{{ v$.email.$errors[0].$message }}</span>
                <div class="form-login__wrapper">
                   <input class="form-login__password" type="password" placeholder="Пароль" v-model.trim="state.password" required :class="{ 'error-input': v$.password.$error, 'error-input': state.show422 }">
                   <img class="form-login__icon-password" src="~assets/images/icons/key.png" alt="#">
                   <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="form-login__icon-eye">
                      <path d="M13.7703 7C13.7703 9.20914 11.9794 11 9.77027 11C7.56114 11 5.77027 9.20914 5.77027 7C5.77027 4.79086 7.56114 3 9.77027 3C11.9794 3 13.7703 4.79086 13.7703 7Z" stroke="currentColor"/>
                      <path d="M17.9583 5.93429C18.3465 6.40556 18.5405 6.64119 18.5405 7C18.5405 7.35881 18.3465 7.59444 17.9583 8.06571C16.5382 9.78986 13.406 13 9.77027 13C6.13454 13 3.00233 9.78986 1.58224 8.06571C1.19408 7.59444 1 7.35881 1 7C1 6.64119 1.19408 6.40556 1.58224 5.93429C3.00233 4.21014 6.13454 1 9.77027 1C13.406 1 16.5382 4.21014 17.9583 5.93429Z" stroke="currentColor"/>
                    </svg>
                </div>
                <span class="error" v-if="v$.password.$error">{{ v$.password.$errors[0].$message }}</span>
                <span v-show="state.show422" class="error">Неправильный пароль или email.</span>
                <button type="button" class="form-login__button" @click="sendLog()">Войти</button>
             </form>
        </div>
      </div>
      <div class="container-picture">
        <img class="container-picture__image" src="~assets/images/admin-login.png" alt="#">
      </div>
    </div>
</template>

<script>
import { reactive, computed } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email, sameAs, minLength, helpers } from '@vuelidate/validators';
import axios from 'axios'
export default {
  name: 'LoginMain',
  head: {
    script: [
      {
        src: "../js/login.js",
        body: true,
      },
    ],
  },
  setup () {
    const state = reactive({
      show422: false,
      email: '',
      password: '',
    });
    const rules = {
      email: { 
        required: helpers.withMessage('Это поле обязательно к заполнению', required),
      },
      password: {
        required: helpers.withMessage('Это поле обязательно к заполнению', required),
      },
    }
    const v$ = useVuelidate(rules, state)

    return { state, v$ }
  },
  // data() {
  //   return{
  //     form: {
  //       email: '',
  //       password: ''
  //     }
  //   }
  // },
  methods: {
    async sendLog() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) return
        this.show422 = false;
        this.$store.dispatch('login', {
          email: this.state.email,
          password: this.state.password,
          remember: true,
        })
        .then(() => {
          this.show422 = false;
          // this.$router.push('/laws')
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status == 422 || error.response.status == 401) this.state.show422 = true;
        })
    }
  }
}
</script>

<style scoped>
.form-login__icon-eye{
    position: absolute;
    right: 14px;
    top: 24px;
    color: #CDCDCD;
    cursor: pointer;
    transition: 0.6s;
}

.form-login__icon-eye:hover{
  color: #656262;
  transition: 0.6s;
}
.active{
  color: #656262;
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
    color: #656262;
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
    color: #656262;
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