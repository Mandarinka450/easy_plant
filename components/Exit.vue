<template>
    <div class="container-exit">
        <img src="~assets/images/icons/exit.png" alt="Выход из профиля">
        <nuxt-link to="#" class="container-exit__link-exit">Выход</nuxt-link>
    </div>
</template>

<script>
export default {
  name: 'Exit'
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
}
</style>