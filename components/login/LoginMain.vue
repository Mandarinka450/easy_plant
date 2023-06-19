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
                <button class="form-login__button" type="button" @click="sendLog">Войти</button>
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
  //       email: '',
  //       password: ''
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
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status == 422 || error.response.status == 401) this.state.show422 = true;
        })
    }
  }
}
</script>
