<template>
    <div class="container-menu">
        <div class="block__content-flex">
            <p class="block__title">Easy Plant</p>
            <div class="block__menu">
                <ul class="block__content">
                    <li>
                        <NuxtLink to="/home" class="block__link">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_304_269" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="2" y="1" width="24" height="25">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.2797 17.9822L24.9194 23.6218C25.4055 24.1079 25.4055 24.896 24.9194 25.3821C24.4333 25.8682 23.6452 25.8682 23.1591 25.3821L17.4233 19.6463C15.8667 20.7178 13.9852 21.3443 11.9587 21.3443C6.59675 21.3443 2.25 16.958 2.25 11.5472C2.25 6.13634 6.59675 1.75 11.9587 1.75C17.3207 1.75 21.6675 6.13634 21.6675 11.5472C21.6675 14.0101 20.7668 16.2608 19.2797 17.9822ZM11.9587 18.8322C15.9458 18.8322 19.178 15.5706 19.178 11.5472C19.178 7.52373 15.9458 4.26209 11.9587 4.26209C7.97161 4.26209 4.73942 7.52373 4.73942 11.5472C4.73942 15.5706 7.97161 18.8322 11.9587 18.8322Z" fill="white"/>
                                </mask>
                                <g mask="url(#mask0_304_269)"></g>
                                <g clip-path="url(#clip0_304_269)">
                                    <path d="M5 11L14 4L23 11V22C23 22.5304 22.7893 23.0391 22.4142 23.4142C22.0391 23.7893 21.5304 24 21 24H7C6.46957 24 5.96086 23.7893 5.58579 23.4142C5.21071 23.0391 5 22.5304 5 22V11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M11 24V14H17V24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_304_269">
                                        <rect width="24" height="24" fill="white" transform="translate(2 2)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            Главная
                        </NuxtLink>
                   </li>
                   <li>
                        <NuxtLink to="/my-plants" class="block__link">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.0001 21.2052C12.3709 21.2131 8.96397 19.7347 7.96371 17.0498C7.46934 15.7229 7.34021 14.2628 7.59265 12.8542C8.22855 9.30607 11.6467 6.61549 13.996 4C16.3491 6.61498 19.7713 9.30361 20.4076 12.8542C20.66 14.2628 20.5309 15.7229 20.0365 17.0498C19.0363 19.7347 15.6294 21.1973 14.0001 21.2052ZM14.0001 21.2052L13.996 13.9832M14.0001 21.2052V25" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Мои растения
                       </NuxtLink>
                   </li>
                   <li>
                        <NuxtLink to="/advice" class="block__link">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.0663 21C17.19 21 20.5329 17.4183 20.5329 13C20.5329 8.58172 17.19 5 13.0663 5C8.94255 5 5.59961 8.58172 5.59961 13C5.59961 17.4183 8.94255 21 13.0663 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M22.3998 22.9999L18.3398 18.6499" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Советы
                        </NuxtLink>
                   </li>
                   <li>
                        <NuxtLink to="/account" class="block__link">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                               <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Профиль
                       </NuxtLink>
                   </li>
                </ul>
            </div>
            <button class="block__button-add" @click="goToCatalog()">+</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SideMenu',
  methods: {
    goToCatalog() {
        this.$router.push('/categories')
    }
  }
}
</script>

<style scoped>

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
        display: none;
    }
}
</style>