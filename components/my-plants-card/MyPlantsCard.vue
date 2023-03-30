<template>
    <section>
        <div class="container__card">
            <div class="card-plants">
               <div class="catalog__block-link">
                  <img src="~assets/images/icons/strelka.png" alt="ссылка обратно к растениям">
                  <NuxtLink to="/my-plants" class="catalog__link">Обратно к растениям</NuxtLink>
               </div>
               <div class="block-plants">
                  <div class="container__image">
                    <p class="title-rus">Эхеверия Таурус</p>
                    <p class="title-eng">Эхеверия Таурус</p>
                    <img src="~assets/images/type_plants/succulent.png" alt="картинка растения">
                    <div class="shadow"></div>
                  </div>
                  <div class="container__description">
                    <div class="block__condition">
                        <img src="~assets/images/icons/icon_temp.png" alt="иконка для температуры">
                        <p class="signature-condition">18-27°С</p>
                    </div>
                    <div class="block__condition">
                        <img src="~assets/images/icons/icon_water.png" alt="иконка для полива">
                        <p class="signature-condition">Через 5 дней</p>
                    </div>
                    <div class="block__condition">
                        <img src="~assets/images/icons/icon_sun.png" alt="иконка для освещения">
                        <p class="signature-condition">Очень яркое</p>
                    </div>
                    <div class="block__condition">
                        <img src="~assets/images/icons/icon_flower.png" alt="иконка для цветения">
                        <p class="signature-condition">Апрель</p>
                    </div>
                    <div class="block__condition">
                        <img src="~assets/images/icons/icon_fertilizer.png" alt="иконка для подкормки">
                        <p class="signature-condition">Апрель</p>
                    </div>
                    <div class="block__condition">
                        <img src="~assets/images/icons/icon_transfer.png" alt="иконка для пересадки">
                        <p class="signature-condition">Апрель</p>
                    </div>
                  </div>
               </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'MyPlantsCard'
}
</script>

<style scoped>
.container__card{
  z-index: -1;
  overflow: auto;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #FFF3D4;
}

.card-plants{
    width: 650px;
    height: auto;
    position: relative;
    margin-left: 475px;
    margin-top: 50px;
}

.catalog__link{
  font-size: 18px;
  line-height: 85.5%;
  letter-spacing: 0.4px;
  color: #979CAE;
  margin-top: 50px;
}

.block-plants{
    margin-top: 200px;
    display: flex;
    width: 100%;
    margin-bottom: 100px;
}

.container__image{
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}

.container__image img{
    width: 100%;
    height: auto;
}
.title-rus{
    font-size: 24px;
    line-height: 85.5%;
    color: #000000;
}

.title-eng{
    font-size: 18px;
    line-height: 85.5%;
    color: #979CAE;
}

.container__description{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 60%;
    height: 250px;
    margin-top: auto;
    margin-bottom: auto;
}
.block__condition{
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.signature-condition{
    text-align: center;
    line-height: 105%;
    color: #4E4E4E;
    margin-top: 10px;
}

.shadow{
    position: absolute;
    width: 100%;
    height: 55.75px;
    background: #E6D097;
    filter: blur(10px);
    bottom: 0;
    z-index: -1;
    border-radius: 100%;
}

@media (max-width: 1115px) {
    .card-plants{
        margin-left: auto;
        margin-right: auto;
    }
}

@media (max-width: 660px) {
    
    .block-plants{
        flex-direction: column;
        align-items: center;
    }

    .container__description{
        margin-top: 60px;
    }

    .card-plants{
        width: 100%;
    }
}

@media (max-width: 525px) {
   .container__image{
    width: 70%;
   }
   .container__description{
    width: 90%;
   }
}

@media (max-width: 525px) {
   .container__image{
    width: 90%;
   }
}

::-webkit-scrollbar { width: 0;}
</style>