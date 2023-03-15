<template>
  <section>
  <div class="catalog">
    <h1 class="catalog__title">Каталог растений</h1>
    <div class="container-plants">
        <div class="container-plants__block gray">
          <p class="container-plants__title">Суккуленты</p>
          <img class="container-plants__image first" src="~assets/images/type_plants/succulent.png" alt="комнатное растение">
          <p class="container-plants__description">Растения, имеющие специальные ткани для запаса воды. </p>
        </div>
        <div class="container-plants__block purple">
          <p class="container-plants__title">Декоративно-лиственные</p>
          <img class="container-plants__image second" src="~assets/images/type_plants/decorat.png" alt="комнатное растение">
          <p class="container-plants__description">Многообразная группа, насчитывающая больше сотни интересных видов. </p>
        </div>
        <div class="container-plants__block dark-purple">
          <p class="container-plants__title">Насекомоядные</p>
          <img class="container-plants__image third" src="~assets/images/type_plants/nasekomo.png" alt="комнатное растение">
          <p class="container-plants__description">Хищное растение, которое питается насекомыми. </p>
        </div>
        <div class="container-plants__block blue">
          <p class="container-plants__title">Кактусы</p>
          <img class="container-plants__image fourth" src="~assets/images/type_plants/cactus.png" alt="комнатное растение">
          <p class="container-plants__description">Многолетние травянистые растения, относящиеся к группе стеблевых суккулентов.</p>
        </div>
        <div class="container-plants__block purple">
          <p class="container-plants__title">Орхидеи</p>
          <img class="container-plants__image fifth" src="~assets/images/type_plants/orhideus.png" alt="комнатное растение">
          <p class="container-plants__description">Группа растений с красочными и ароматными цветками.</p>
        </div>
        <div class="container-plants__block dark-purple">
          <p class="container-plants__title">Пальмы</p>
          <img class="container-plants__image sixth" src="~assets/images/type_plants/palma.png" alt="комнатное растение">
          <p class="container-plants__description">Растение, которое растет исключительно в тропическом и субтропическом климате. </p>
        </div>
        <div class="container-plants__block gray">
          <p class="container-plants__title">Бромелиевые</p>
          <img class="container-plants__image seventh" src="~assets/images/type_plants/bromelievie.png" alt="комнатное растение">
          <p class="container-plants__description">Семейство однодольных цветковых растений, входящее в порядок Злакоцветные. </p>
        </div>
        <div class="container-plants__block purple">
          <p class="container-plants__title">Папоротники</p>
          <img class="container-plants__image eighth" src="~assets/images/type_plants/paporotniki.png" alt="комнатное растение">
          <p class="container-plants__description">Группа высших споровых растений с хорошо развитыми тканями. </p>
        </div>
    </div>
  </div>
  </section>
</template>

<script>
export default {
  name: 'Categories'
}
</script>

<style scoped>
.catalog__title{
  font-weight: 600;
  font-size: 28px;
  line-height: 85.5%;
  letter-spacing: 0.4px;
  color: #000000;
  position: relative;
  margin-top: 65px;
  margin-left: 170px;
}

.container-plants{
  width: 420px;
  height: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 15px;
  row-gap: 20px;
  margin-top: 95px;
  margin-left: 170px;
}

.container-plants__block{
  cursor: pointer;
  position: relative;
  background-color: #DEF1D0;
  border-radius: 20px;
  width: 155px;
  height: 191px;
  overflow: hidden;
}
.purple{
  background: #FAE5CB;
}
.dark-purple{
  background: #F8E3E3;
}
.blue{
  background: #D8F0F8;
}

.container-plants__image{
  width: 80%;
  height: auto;
  position: absolute;
  bottom: -25px;
  left: 10px;
}

.fifth, .seventh, .third{
  width: 100%;
  bottom: 0;
  left: 0;
}
.second{
  width: 95%;
  bottom: -25px;
}
.sixth{
  width: 100%;
  left: 0;
  bottom: -10px;
}
.eighth{
  width: 120%;
  left: -20px;
  bottom: -25px;
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

.container-plants__description{
  opacity:0;
  transition: 0.7s;
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 10px;
}

.container-plants__block:hover .container-plants__description{
  background: rgba(195, 226, 236, 0.8);
  opacity:1;
  transition: 0.7s;
  color: #000000;
}
</style>