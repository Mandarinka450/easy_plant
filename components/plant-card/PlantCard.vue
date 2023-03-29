<template>
    <div class="container__wrapper">
        <div class="container__card-plant">
          <div class="catalog__block-link">
            <img src="~assets/images/icons/strelka.png" alt="">
             <NuxtLink to="/catalog" class="catalog__link">Обратно к растениям</NuxtLink>
          </div>
          <div class="container__block-info-plant">
            <div class="block__image-plant">
              <img src="~assets/images/plants/id-plant.png" alt="картинка комнатного растения">
            </div>
            <div class="block__description-short">
              <p class="block__title-rus">Хавортия полосатая</p>
              <p class="block__title-en">Haworthia fasciata</p>
              <div class="block-notes">
                <div class="block-notes__image">
                  <img src="~assets/images/icons/temp.png" alt="#">
                  <p class="block-notes__signature">25-30°С</p>
                </div>
                <div class="block-notes__image">
                  <img src="~assets/images/icons/water.png" alt="#">
                  <p class="block-notes__signature">Каждые 10 дней</p>
                </div>
                <div class="block-notes__image">
                  <img src="~assets/images/icons/sun.png" alt="#">
                  <p class="block-notes__signature">Яроке солнце</p>
                </div>
                <div class="block-notes__image">
                  <img src="~assets/images/icons/dangerous.png" alt="#">
                  <p class="block-notes__signature">Не опасно</p>
                </div>
              </div>
              <button class="block__button-add">Добавить к растениям</button>
            </div>
          </div>
          <div class="block__dscription">
            <p class="block__title-view">
              Довольно неприхотливое комнатное растение хавортии, которое легко разрастается и размножается. Этот миниатюрный цветок всегда будет выделяться среди других необычной структурой и формой листьев.

              Условия содержания и соответствующий уход для каждого вида хавортий являются одинаковыми. Благодаря своим компактным размерам они прекрасно себя чувствуют в небольших помещениях. Растение напоминает алоэ, но более мелкого размера.

              На протяжении периода вегетации поливать надо умеренно, сразу после того как хорошо просохнет верхний слой почвосмеси. Если в зимнее время куст вступил в период покоя, то количество поливов сокращают до 1 раза в 4 недели.
            </p>
            <p class="block__title-water">Полив</p>
            <p class="block__title-view">Что-то там что-то там что-то там что-то там там там там там там там там там там </p>
            <p class="block__title-sun">Освещение</p>
            <p class="block__title-view">Что-то там что-то там что-то там что-то там там там там там там там там там там </p>
            <p class="block__title-temp">Температурный режим</p>
            <p class="block__title-view">Что-то там что-то там что-то там что-то там там там там там там там там там там </p>
            <p class="block__title-fertilizer">Подкормки</p>
            <p class="block__title-view">Что-то там что-то там что-то там что-то там там там там там там там там там там </p>
            <p class="block__title-transfer">Пересадка</p>
            <p class="block__title-view">Что-то там что-то там что-то там что-то там там там там там там там там там там </p>
            <p class="block__title-diseases">Заболевания</p>
            <p class="block__title-view">Что-то там что-то там что-то там что-то там там там там там там там там там там </p>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PlantCard'
}
</script>

<style scoped>
.container__wrapper{
  z-index: -1;
  overflow: auto;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #C3E2EC;
}

.container__card-plant{
  position: relative;
  width: 720px;
  margin-top: 50px;
  height: auto;
  margin-left: 475px;
}

.catalog__link{
  font-size: 18px;
  line-height: 85.5%;
  letter-spacing: 0.4px;
  color: #979CAE;
  margin-top: 50px;
}

.container__block-info-plant{
  margin-top: 50px;
  display: flex;
  flex-direction: row;
}

.block__image-plant{
  margin-right: 50px;
  width: 30%;
  height: 318px;
}

.block__image-plant img{
  width: 100%;
  height: auto;
}

.block__description-short{
  width: 70%;
  display: flex;
  margin-top: 95px;
  flex-direction: column;
}

.block__title-rus{
  font-size: 24px;
  line-height: 85.5%;
  letter-spacing: 0.4px;
  color: #000000;
}

.block__title-en{
  margin-top: -5px;
  font-size: 18px;
  line-height: 85.5%;
  letter-spacing: 0.4px;
  color: #979CAE;
}

.block-notes{
  display: flex;
  flex-direction: row;
  margin-top: 8px;
}

.block__button-add{
  width: 308px;
  height: 40px;
  background: #D8F0F8;
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  border: none;
  font-weight: 600;
  font-size: 18px;
  line-height: 99.5%;
  color: #5D6062;
  margin-top: 32px;
  transition: all 0.5s;
}

.block__button-add:hover{
  background: #FAE5CB;
  transition: all 0.5s;
}

.block-notes__signature{
  width: 60px;
  height: auto;
  font-size: 12px;
  line-height: 105%;
  letter-spacing: 0.4px;
  margin-top: 15px;
  color: #4E4E4E;
  text-align: center;
}
.block-notes__image{
  margin-right: 30px;
}
.block-notes__image img{
  margin-left: 10px;
}

.block__dscription{
  margin-top: 50px;
  width: 100%;
}
.block__title-view{
  font-size: 18px;
  line-height: 105%;
  letter-spacing: 0.4px;
  color: #4E4E4E;
  text-align: justify;
}

.block__title-water, .block__title-sun, .block__title-temp, .block__title-fertilizer, .block__title-transfer, .block__title-diseases{
  font-weight: 600;
}

@media (max-width: 1230px) {
  .container__card-plant{
    width: 55%;
  }
}

@media (max-width: 1115px) {
  .container__card-plant{
    margin-left: auto;
    margin-right: auto;
    width: 90%;
  }
}
::-webkit-scrollbar { width: 0;}
</style>