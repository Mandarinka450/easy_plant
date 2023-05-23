<template>
    <div id="avatar" class="container-avatar" @click="goToProfile()">
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
    z-index: 100;
}

.container-avatar__icon{
    border: none;
    background: url("~assets/images/avatar.jpg") no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    border-radius: 10px;
}

@media (max-width: 1300px) {
  .container-avatar{
    top: 20px;
  }

}

@media (max-width: 768px) {
  .container-avatar{
    width: 50px;
    height: 50px;
    top: 10px;
  }

}

@media (max-width: 360px) {
  .state-act{
    display: block;
  }
  .state-react{
    display: none;
  }
}

</style>