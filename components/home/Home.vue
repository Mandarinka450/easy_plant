<template>
    <section>
        <div class="container__wrapper">
            <div class="container__main">
                <p class="container__title">Пора помочь растениям</p>
                <div class="block__pictures">
                    <p class="block__title-pictures">Новые идеи домашних джунглей</p>
                    <div class="block-grid">
                        <div class="block-grid__first">
                            <img class="block-grid__image" id="image1" src="~assets/images/new_idea/img1.png" alt="первая картинка с растениями">
                        </div>
                        <div class="block-grid__second">
                            <img class="block-grid__image" id="image2" src="~assets/images/new_idea/img2.png" alt="вторая картинка с растениями">
                        </div>
                        <div class="block-grid__third">
                            <img class="block-grid__image" id="image3" src="~assets/images/new_idea/img3.png" alt="третья картинка с растениями">
                        </div>
                        <div class="block-grid__fourth">
                            <img class="block-grid__image" id="image4" src="~assets/images/new_idea/img4.png" alt="четвертая картинка с растениями">
                        </div>
                        <div class="block-grid__fiveth">
                            <img class="block-grid__image" id="image5" src="~assets/images/new_idea/img5.jpg" alt="пятая картинка с растениями">
                        </div>
                        <div class="block-grid__sixth">
                            <img class="block-grid__image" id="image6" src="~assets/images/new_idea/img6.png" alt="шестая картинка с растениями">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="myModal" class="modal">
            <span class="close" onclick="document.getElementById('myModal').style.display='none'">&times;</span>
            <div class="modal__content">
                <img class="modal__image" id="img">
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Home',
  head: {
    script: [
      {
        src: "../js/popup.js",
        body: true,
      },
    ],
  }
}

</script>

<style scoped>

.modal{
    display: none;
    position: fixed;
    z-index: 12;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
}

.modal__image{
    margin: auto;
    display: block;
    height: 90%;
    width: auto;
    object-fit: cover;
    animation-name: zoom1;
    animation-duration: 0.6s;
}


.modal__content{
    height: 100%;
    display: flex;
    align-items: center;
}

@keyframes zoom1{
    from{transform: scale(0);}
    to{transform: scale(1);}
}

.close{
    position: absolute;
    top: 15px;
    right: 35px;
    color: antiquewhite;
    font-size: 40px;
    transition: 0.3s;
}

.close:hover{
    color: aliceblue;
    transition: 0.3s;
}
.container__wrapper{
  z-index: -1;
  overflow: auto;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #E0F0D5;
}

.container__main{
    width: 620px;
    margin-top: 50px;
    margin-left: 475px;
}
.container__title{
    width: 650px;
    font-weight: 600;
    font-size: 96px;
    line-height: 85.5%;
    letter-spacing: 0.4px;
    color: #000000;
}

.block__pictures{
    margin-top: 50px;
    margin-bottom: 50px;
}

.block__title-pictures{
    font-size: 24px;
    line-height: 105%;
    letter-spacing: 0.4px;
    color: #000000;
}

.block-grid__image{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.block-grid__first{
    grid-area: A;
    border-radius: 10px;
}

.block-grid__second{
    grid-area: B;
    border-radius: 10px;
}

.block-grid__third{
    grid-area: C;
    border-radius: 10px;
}

.block-grid__fourth{
    grid-area: D;
    border-radius: 10px;
}

.block-grid__fiveth{
    grid-area: E;
    border-radius: 10px;
}

.block-grid__sixth{
    grid-area: H;
    border-radius: 10px;
}

.block-grid{
    display: grid;
    height: 600px;
    gap: 20px;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(7, 1fr);
    grid-template-areas: "A A A B B B C C C"
                         "A A A B B B C C C"
                         "A A A B B B C C C"
                         "D D D E E E E E E"
                         "D D D E E E E E E"
                         "D D D H H H H H H"
                         "D D D H H H H H H";
}


::-webkit-scrollbar { width: 0;}
</style>