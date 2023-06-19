<template>
    <div class="container-register">
      <div class="container-section">
        <div class="block-start">
             <h1 class="block-start__title">Регистрация</h1>
             <form class="form-register" id="form-register">
                <div class="form-register__wrapper">
                   <input class="form-register__name" 
                     type="text" 
                     placeholder="Имя" 
                     id="name"
                     v-model.trim="state.name"
                     :class="{ 'error-input': v$.name.$error }">
                   <img class="form-register__icon-user" src="~assets/images/icons/user.png" alt="#">
                   <span class="error" v-if="v$.name.$error">{{ v$.name.$errors[0].$message }}</span>
                </div>
                <div class="form-register__wrapper">
                   <input class="form-register__surname" 
                   type="text" 
                   placeholder="Фамилия" 
                   id="surname"
                   v-model.trim="state.surname"
                   :class="{ 'error-input': v$.surname.$error }">
                   <img class="form-register__icon_sur" src="~assets/images/icons/user.png" alt="#">
                   <span class="error" v-if="v$.surname.$error">{{ v$.surname.$errors[0].$message }}</span>
                </div>
                <div class="form-register__wrapper">
                   <input class="form-register__email" 
                   type="email" 
                   placeholder="E-mail"
                   id="email" 
                   v-model.trim="state.email" 
                   :class="{ 'error-input': v$.email.$error }">
                   <img class="form-register__icon-email" src="~assets/images/icons/mail.png" alt="#">
                   <span class="error" v-if="v$.email.$error">{{ v$.email.$errors[0].$message }}</span>
                </div>
                <div class="form-register__wrapper">
                   <input class="form-register__password" 
                   type="password" 
                   placeholder="Пароль" 
                   id="first-password" 
                   v-model.trim="state.password" 
                   :class="{ 'error-input': v$.password.$error }">
                   <img class="form-register__icon-password" src="~assets/images/icons/key.png" alt="#">
                   <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="form-register__icon-eye" data-target="#first-password">
                      <path d="M13.7703 7C13.7703 9.20914 11.9794 11 9.77027 11C7.56114 11 5.77027 9.20914 5.77027 7C5.77027 4.79086 7.56114 3 9.77027 3C11.9794 3 13.7703 4.79086 13.7703 7Z" stroke="currentColor"/>
                      <path d="M17.9583 5.93429C18.3465 6.40556 18.5405 6.64119 18.5405 7C18.5405 7.35881 18.3465 7.59444 17.9583 8.06571C16.5382 9.78986 13.406 13 9.77027 13C6.13454 13 3.00233 9.78986 1.58224 8.06571C1.19408 7.59444 1 7.35881 1 7C1 6.64119 1.19408 6.40556 1.58224 5.93429C3.00233 4.21014 6.13454 1 9.77027 1C13.406 1 16.5382 4.21014 17.9583 5.93429Z" stroke="currentColor"/>
                   </svg>
                   <span class="error" v-if="v$.password.$error">{{ v$.password.$errors[0].$message }}</span>
                </div>
                <div class="form-register__wrapper">
                   <input class="form-register__password" 
                   type="password" 
                   placeholder="Подтвердите пароль" 
                   id="second-password" 
                   v-model.trim="state.password_confirmation"
                   :class="{ 'error-input': v$.password_confirmation.$error }">
                   <img class="form-register__icon-password" src="~assets/images/icons/key.png" alt="#">
                   <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="form-register__icon-eye" data-target="#second-password">
                      <path d="M13.7703 7C13.7703 9.20914 11.9794 11 9.77027 11C7.56114 11 5.77027 9.20914 5.77027 7C5.77027 4.79086 7.56114 3 9.77027 3C11.9794 3 13.7703 4.79086 13.7703 7Z" stroke="currentColor"/>
                      <path d="M17.9583 5.93429C18.3465 6.40556 18.5405 6.64119 18.5405 7C18.5405 7.35881 18.3465 7.59444 17.9583 8.06571C16.5382 9.78986 13.406 13 9.77027 13C6.13454 13 3.00233 9.78986 1.58224 8.06571C1.19408 7.59444 1 7.35881 1 7C1 6.64119 1.19408 6.40556 1.58224 5.93429C3.00233 4.21014 6.13454 1 9.77027 1C13.406 1 16.5382 4.21014 17.9583 5.93429Z" stroke="currentColor"/>
                   </svg>
                   <span class="error" v-if="v$.password_confirmation.$error">{{ v$.password_confirmation.$errors[0].$message }}</span>
                </div>
                <button class="form-register__button" type="button" @click="sendReg">Зарегистрироваться</button>
             </form>
             <p class="block-start__text">Продолжая с использованием Email Вы соглашаетесь с Условиями использования и Политикой конфиденциальности.</p>
             <p class="block-start__subtitle">Уже зарегистрированы? <NuxtLink to="/login" style="color: #8FB277;">Войти</NuxtLink></p>

        </div>
      </div>
      <div class="container__picture-plant">
        <img class="container__picture-plant__image" src="~assets/images/plant.png" alt="#">
      </div>
    </div>
</template>

<script>
import { reactive, computed } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email, sameAs, minLength, helpers } from '@vuelidate/validators';

export default {
  name: 'Registration',
  head: {
    script: [
      {
        src: "../js/registration.js",
        body: true,
      },
    ],
  },
  setup () {
    const state = reactive({
      name: '',
      surname: '',
      email: '',
      password: '',
      password_confirmation: '',
    });
    const rules = {
      name: { 
        required: helpers.withMessage('Это поле обязательно к заполнению', required)
      },
      surname: { 
        required: helpers.withMessage('Это поле обязательно к заполнению', required)
      },
      email: { 
        required: helpers.withMessage('Это поле обязательно к заполнению', required),
        email: helpers.withMessage('Неккоректный формат поля', email),
      },
      password: {
        required: helpers.withMessage('Это поле обязательно к заполнению', required),
        minLength: helpers.withMessage('Пароль должен состоять минимум из 6 знаков', minLength(6)),
      },
      password_confirmation: {
        required: helpers.withMessage('Это поле обязательно к заполнению', required),
        sameAs: helpers.withMessage("Пароли не совпадают", sameAs(computed(()=> state.password))),
      }
    }

    const v$ = useVuelidate(rules, state)

    return { state, v$ }
  },
  // data() {
  //   return{
  //       name: '',
  //       surname: '',
  //       email: '',
  //       password: '',
  //       password_confirmation: '',
  //   }
  // },
  methods: {
    async sendReg() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) return
        this.$store.dispatch('register', {
          name: this.state.name,
          surname: this.state.surname,
          email: this.state.email,
          password: this.state.password,
          password_confirmation: this.state.password_confirmation,
          description: 'Всем привет! Я начинающий растениевод, успела посадить уже базилик и мяту! В планах посадить еще много всего.',
          remember: true
      })
    }
  },
}
</script>
