<template>
    <section>
      <div class="catalog plant">
        <div class="catalog__block-link">
          <img src="~assets/images/icons/strelka.png" alt="">
          <NuxtLink to="/categories" class="catalog__link">Обратно к каталогу</NuxtLink>
        </div>
        <h1 class="catalog__title roro">Найти растение</h1>
        <Search/>
        <div class="container-plants">
        <div class="container-plants__block gray">
          <p class="container-plants__title">Суккуленты</p>
          <img class="container-plants__image" src="~assets/images/type_plants/succulent.png" alt="комнатное растение">
        </div>
        <div class="container-plants__block purple">
          <p class="container-plants__title">Декоративно-лиственные</p>
          <img class="container-plants__image" src="~assets/images/type_plants/decorat.png" alt="комнатное растение">
        </div>
        <div class="container-plants__block dark-purple">
          <p class="container-plants__title">Насекомоядные</p>
          <img class="container-plants__image" src="~assets/images/type_plants/nasekomo.png" alt="комнатное растение">
        </div>
        <div class="container-plants__block blue">
          <p class="container-plants__title">Кактусы</p>
          <img class="container-plants__image" src="~assets/images/type_plants/cactus.png" alt="комнатное растение">
        </div>
        <div class="container-plants__block purple">
          <p class="container-plants__title">Орхидеи</p>
          <img class="container-plants__image" src="~assets/images/type_plants/orhideus.png" alt="комнатное растение">
        </div>
        <div class="container-plants__block dark-purple">
          <p class="container-plants__title">Пальмы</p>
          <img class="container-plants__image" src="~assets/images/type_plants/palma.png" alt="комнатное растение">
        </div>
        <div class="container-plants__block gray">
          <p class="container-plants__title">Бромелиевые</p>
          <img class="container-plants__image" src="~assets/images/type_plants/bromelievie.png" alt="комнатное растение">
        </div>
        <div class="container-plants__block purple">
          <p class="container-plants__title">Папоротники</p>
          <img class="container-plants__image" src="~assets/images/type_plants/paporotniki.png" alt="комнатное растение">
        </div>
    </div>
  </div>
    </section>
</template>

<script>
export default {
  name: 'Plants'
}
</script>

<style scoped>

.plant{
  position: relative;
  margin-top: 50px;
  margin-left: 475px;
  margin-bottom: 70px;
}
.roro{
  font-weight: 600;
  font-size: 28px;
  line-height: 85.5%;
  letter-spacing: 0.4px;
  color: #000000;
  position: relative;
  margin-top: 50px;
  margin-bottom: 20px;
}

.container-plants{
  width: 420px;
  height: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 15px;
  row-gap: 20px;
  margin-top: 30px;
}

.container-plants__block{
  cursor: pointer;
  position: relative;
  background-color: #FEF8F7;
  border-radius: 20px;
  width: 155px;
  height: 191px;
  overflow: hidden;
}

.container-plants__image{
  width: 80%;
  height: auto;
  position: absolute;
  bottom: -25px;
  left: 10px;
}

.container-plants__title{
  position: absolute;
  left: 8px;
  top: 14px;
  font-size: 16px;
  line-height: 110%;
  letter-spacing: -1px;
  color: #4E4E4E;
}

.catalog__link{
  font-size: 18px;
  line-height: 85.5%;
  letter-spacing: 0.4px;
  color: #979CAE;
  margin-top: 50px;
}

@media (max-width: 1160px) {
  .plant{
    width: 55%;
  }

  .container-plants{
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 1115px) {
  .plant{
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 550px) {
  .container-plants{
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }

  .container-plants__block{
    width: 100%;
  }
  .container-plants__title{
    font-size: 18px;
    z-index: 1;
  }
}

@media (max-width: 320px) {
  .container-plants{
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
  }
}

</style>