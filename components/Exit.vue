<template>
    <div class="container-exit">
        <img src="~assets/images/icons/exit.png" alt="Выход из профиля">
        <span class="container-exit__link-exit" @click="logout">Выход</span>
    </div>
</template>

<script>
export default {
  name: 'Exit',
  middleware: 'auth',
  methods: {
    logout(){
       this.$store.dispatch('logout')
    }
  },
}
</script>

<style scoped>
.container-exit{
    position: fixed;
    top: 60px;
    right: 30px;
}
.container-exit__link-exit{
    font-size: 18px;
    line-height: 105%;
    letter-spacing: 0.4px;
    color: #4E4E4E;
    cursor: pointer;
}

@media (max-width: 1300px) {
  .container-exit{
    top: 20px;
  }
}
</style>