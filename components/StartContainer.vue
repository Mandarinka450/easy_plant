<template>
    <div class="block-main container center">
        <div class="block-main__wrapper">
           <h1 class="block-main__title">Easy Plant</h1>
           <button class="block-main__button-reg" @click="goToRegister()">Регистрация</button>
           <button class="block-main__button-login" @click="goToLogin()">Войти</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'STartContainer',
  methods: {
  goToLogin() {
    this.$router.push('/login')
  },
  goToRegister() {
    this.$router.push('/registration')
  },
}
}
</script>

<style scoped>
.block-main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
}
.block-main__title{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 6vw;
    line-height: 99.5%;
    letter-spacing: 0.4px;
    color: #000000;
    width: 40%;
    
}
.block-main__button-reg{
    width: 74%;
    height: 40px;
    font-family: 'Montserrat';
    transition: all 0.5s;
    background: #FFFFFF;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    border: none;
    font-style: normal;
    font-weight: 400;
    font-size: 1.4vw;
    line-height: 99.5%;
    color: #4E4E4E;
    margin-top: 50px;
}

.block-main__button-login{
    width: 74%;
    font-family: 'Montserrat';
    height: 40px;
    transition: all 0.5s;
    background: #8FB377;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    vertical-align: middle;
    text-align: center;
    border: none;
    font-weight: 400;
    font-size: 1.4vw;
    line-height: 99.5%;
    color: #FFFFFF;
    margin-top: 20px;
}

.block-main__button-reg:hover{
    background: #F0EEEE;
    transition: all 0.5s;
}

.block-main__button-login:hover{
    background: #768A68;
    transition: all 0.5s;
}

.block-main__wrapper{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
}

@media (max-width: 850px) {
    .block-main__wrapper{
        padding-left: 30px;
    }
    .block-main__title{
        font-size: 10vw;
    }
    .block-main__button-reg, .block-main__button-login{
        font-size: 3vw;
    }
}
</style>