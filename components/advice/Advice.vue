<template>
    <section>
    <div class="container-advice" v-if="advices[0]">
        <h1 class="container-advice__title">Советы</h1>
        <div class="card" v-for="advice in advices" :key="advice.id" @click="goToIdCard(advice)">
            <div class="block-hover">
                <img src="~assets/images/three-plants.png" alt="#">
                <div class="wave1">
                    <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                       <defs>
                           <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                      </defs>
                        <g class="parallax">
                          <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,1)" />
                          <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                          <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                        </g>
                    </svg>
                </div>
            </div>
            <p class="card__date-publish">{{ advice.date_publish }}</p>
            <p class="card__title">{{ advice.title }}</p>
            <p class="card__description">{{ advice.content }}</p>
        </div>
        <div class="container__pagination">
            <div>
                <img src="~assets/images/icons/list.png" alt="#" v-show="isActive1">
                <p :class="{'p1': isActive1}" @click="nextUrl1()">{{ p1 }}</p>
            </div>
            <div>
                <img src="~assets/images/icons/list.png" alt="#" v-show="isActive2">
                <p @click="nextUrl2()" :class="{'p1': isActive2}">{{ p2 }}</p>
            </div>
            <div>
                <img src="~assets/images/icons/list.png" alt="#" v-show="isActive3">
                <p @click="nextUrl3()" :class="{'p1': isActive3}">{{ p3 }}</p>
            </div>
            
        </div>
    </div>
    <Loader v-else></Loader>
   </section>
</template>

<script>
export default {
    name: "Advice",
    data() {
    return{
        p1: 1,
        p2: 2,
        p3: 3,
        isActive1: true,
        isActive2: false,
        isActive3: false,
    }
  }, 
    computed: {
        advices() {
            return this.$store.getters.ADVICES;
        }
    },
    created() {
        this.$store.dispatch('getAdvice', 1);
    },
    methods: {
        goToIdCard(advice) {
            this.$router.push("/advice/" + advice.id);
        },
        nextUrl1(){
            this.$store.dispatch('getAdvice', 1);
            this.isActive1 = true;
            this.isActive2 = false;
            this.isActive3 = false;
        },
        nextUrl2(){
            this.$store.dispatch('getAdvice', 2);
            this.isActive1 = false;
            this.isActive2 = true;
            this.isActive3 = false;
        },
        nextUrl3(){
            this.$store.dispatch('getAdvice', 3);
            this.isActive1 = false;
            this.isActive2 = false;
            this.isActive3 = true;
        }
    },
}
</script>

<style scoped>

.container__pagination{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    gap: 60px;
    height: 60px;
    margin-top: 80px;
}

.container__pagination > div > p{
    font-size: 20px;
    color: #768A68;
    position: absolute;
    cursor: pointer;
}


.container__pagination > div {
    position: relative;
    display: flex;
    justify-content: center;
}

.container__pagination > div > img {
    width: 50px;
    height: auto;
    position: absolute;
    top: -10px;
}

.p1{
    font-weight: 600;
}
.container-advice{
    width: 650px;
    height: auto;
    position: relative;
    margin-left: 475px;
    margin-top: 50px;
}

.container-advice__title{
    font-weight: 600;
    font-size: 28px;
    line-height: 85.5%;
    letter-spacing: 0.4px;
    color: #000000;
    margin-bottom: 30px;
}

.card{
    width: 100%;
    height: auto;
    overflow: hidden;
    box-shadow: 0.5px 0.5px 5px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    background: #FFFFFF;
    margin-bottom: 25px;
    cursor: pointer;
    transition: height 0.7s;
}

.card__date-publish{
    font-size: 18px;
    line-height: 110%;
    letter-spacing: -1px;
    color: #8F8F8F;
    margin-top: 10px;
    margin-left: 20px;
}

.card__title{
    font-weight: 500;
    font-size: 20px;
    line-height: 110%;
    letter-spacing: -1px;
    margin-top: -10px;
    color: #4E4E4E;
    margin-left: 20px;
}

.card__description{
    font-weight: 300;
    font-size: 18px;
    line-height: 110%;
    letter-spacing: -1px;
    color: #A3A3A3;
    margin-left: 20px;
    margin-right: 20px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.block-hover{
    height: 0;
    overflow: hidden;
    transition: height 0.7s;
}

.card:hover .block-hover{
    z-index: 10;
    height: 230px;
    transition: 0.7s;
    
}


.block-hover{
    background-color: #FAE5CB;
    position: relative;
}

.block-hover img{
    margin-top: 30px;
    width: 340px;
    height: 150px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
}

.waves {
    position: relative;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    max-height: 150px;
}
/* Animation */
.parallax>use {
    animation: move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite;
}
.parallax>use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
}
.parallax>use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
}
.parallax>use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
}
.parallax>use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
}

@keyframes move-forever {
    0% {
        transform: translate3d(-90px, 0, 0);
    }
    100% {
        transform: translate3d(85px, 0, 0);
    }
}

@media (max-width: 768px) {
    .waves {
        height: 40px;
        min-height: 40px;
    }
    .container-advice{
      margin-top: 100px;
    }
}

@media (max-width: 1146px) {
    .container-advice{
        width: 55%;
    }
}

@media (max-width: 1115px) {
    .container-advice{
        margin-left: auto;
        margin-right: auto;
        width: 90%;
    }
}
</style>