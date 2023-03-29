<template>
    <div class="container-advice">
        <h1 class="container-advice__title">Советы</h1>
        <div class="card" @click="goToIdCard()">
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
                          <!-- <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" /> -->
                        </g>
                    </svg>
                </div>
            </div>
            <p class="card__date-publish">17.02.2022</p>
            <p class="card__title">Ошибки при уходе за растениями</p>
            <p class="card__description">Недостаток света, отсутствие свежего воздуха, чрезмерная его сухость, сквозняк...</p>
        </div>
        <div class="card">
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
                          <!-- <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" /> -->
                        </g>
                    </svg>
                </div>
            </div>
            <p class="card__date-publish">17.02.2022</p>
            <p class="card__title">Ошибки при уходе за растениями</p>
            <p class="card__description">Недостаток света, отсутствие свежего воздуха, чрезмерная его сухость, сквозняк...</p>
        </div>
        <div class="card">
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
                          <!-- <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" /> -->
                        </g>
                    </svg>
                </div>
            </div>
            <p class="card__date-publish">17.02.2022</p>
            <p class="card__title">Ошибки при уходе за растениями</p>
            <p class="card__description">Недостаток света, отсутствие свежего воздуха, чрезмерная его сухость, сквозняк...</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Advice',
  methods: {
  goToIdCard() {
    this.$router.push('/advice/_id')
  },
}
}
</script>

<style scoped>
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