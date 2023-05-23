<template>
    <div class="wrapper-menu">
        <div id="plashka" class="plashka"><img id="icon1" class="wrapper-menu__icon" src="~assets/images/icons/menu.png" alt="иконка меню"></div>
    <div id="menu" class="container-menu">
        <div class="block__content-flex">
            <img id="icon2" class="wrapper-menu__close" src="~assets/images/icons/x.png" alt="иконка закрытия меню">
            <p class="block__title">Easy Plant</p>
            <div class="block__menu">
                <ul class="block__content">
                    <li>
                        <NuxtLink to="/laws" class="block__link">Заявки</NuxtLink>
                   </li>
                   <li>
                        <NuxtLink to="/queries" class="block__link">Советы</NuxtLink>
                   </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'SideMenu',
  head: {
    script: [
      {
        src: "../js/menu.js",
        body: true,
      },
    ],
  },
  methods: {
  }
}
</script>

<style scoped>

.wrapper-menu{
    top: 0;
    position: fixed;
    height: 100%;
    width: 80px;
    z-index: 99;
}

.wrapper-menu__icon{
    position: fixed;
    top: 25px;
    left: 30px;
    width: 30px;
    height: auto;
    z-index: 7;
    display: none;
}

.wrapper-menu__close{
    position: absolute;
    top: 20px;
    right: 15px;
    width: 30px;
    height: auto;
    display: none;
}

.container-menu{
    width: 303px;
    height: 100%;
    top: 0;
    position: fixed;
    background: #EBEBEB;
}

.block__content-flex{
    display: flex;
    flex-direction: column;
    width: 215px;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
}

.block__title{
    font-size: 64px;
    line-height: 99.5%;
    letter-spacing: 0.4px;
    color: #000000;
}

.block__menu{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 0;
    margin-top: 50px;
    
}

li{
    list-style-type: none;
    margin-bottom: 35px;
}

.block__link{
    font-size: 20px;
    line-height: 16px;
    letter-spacing: 0.4px;
    color: #B6B6B6;
    margin-left: 8px;
}

.block__button-add{
    width: 215px;
    height: 44px;
    background: #8FB377;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    border: none;
    font-weight: 800;
    font-size: 24px;
    line-height: 99.5%;
    color: #FFFFFF;
    transition: all 0.5s;
}
.block__button-add:hover{
    background: #768A68;
    transition: all 0.5s;
}
.block__content{
    padding-left: 0;
}
a.nuxt-link-active {
  color: black;
}

a.nuxt-link-active svg{
    color: #000000;
}

a{
    transition: all 0.7s;
    margin-top: 5px;
}
a:hover{
    color: black;
    text-decoration: none;
    transition: all 0.7s;
}

svg{
    margin-top: -5px;
    color: #B6B6B6;
    transition: all 0.7s;
}

a:hover svg{
    color: #000000;
    transition: all 0.7s;
}



@media (max-width: 1115px) {
    .container-menu{
        left: -360px;
    }
    .wrapper-menu__icon{
        display: block;
    }

    .state-one{
       z-index: 20;
       left: 0;
       transition: 0.5s;
    }

    .state-two{
       left: -360px;
       transition: 0.5s;
    }

    .state-act{
       display: block;
    }
    .state-react{
        display: none;
    }

}

@media (max-width: 768px) {
    .plashka{
        position: fixed;
        width: 100%;
        height: 70px;
        background-color: #EBEBEB;
    }
}

@media (max-width: 360px) {
    .container-menu{
        width: 100%;
    }
}
</style>