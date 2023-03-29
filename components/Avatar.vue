<template>
    <div class="container-avatar" @click="goToProfile()">
        <button class="container-avatar__icon"></button>
    </div>
</template>

<script>
export default {
  name: 'Avatar',
  methods: {
  goToProfile() {
    this.$router.push('/account')
  },
}
}
</script>

<style scoped>
.container-avatar{
    filter: drop-shadow(2px 2px 6px rgba(0, 0, 0, 0.15));
    width: 60px;
    height: 60px;
    position: fixed;
    top: 60px;
    right: 30px;
    z-index: 10;
}

.container-avatar__icon{
    border: none;
    background: gray;
    width: 100%;
    height: 100%;
    border-radius: 10px;
}

@media (max-width: 1300px) {
  .container-avatar{
    top: 20px;
  }
}
</style>