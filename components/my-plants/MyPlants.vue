<template>
    <section>
      <div class="catalog plant">
        <div class="account__block-plants">
            <img src="~assets/images/icons/plants-icon.png" alt="#">
            <p class="account__quantity-plants">10 растений</p>
        </div>
        <h1 class="catalog__title roro">Мои растения</h1>
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
  name: 'MyPlants'
}
</script>

<style scoped>
.plant{
  position: relative;
  margin-top: 50px;
  margin-left: 170px;
}
.roro{
  font-weight: 600;
  font-size: 28px;
  line-height: 85.5%;
  letter-spacing: 0.4px;
  color: #000000;
  position: relative;
  margin-bottom: 20px;
}

.container-plants{
  width: 420px;
  height: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 15px;
  row-gap: 20px;
  margin-top: 55px;
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

.account__block-plants{
    display: flex;
}
.account__block-plants img{
    width: 30px;
    height: 28px;
    margin-right: 8px;
}

.account__quantity-plants{
    margin-top: 5px;
    font-weight: 500;
    font-size: 18px;
    line-height: 105%;
    letter-spacing: 0.4px;
    color: #8A8A8E;
}
</style>