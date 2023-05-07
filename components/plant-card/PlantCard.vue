<template>
    <div class="container__wrapper">
        <div class="container__card-plant">
          <div class="catalog__block-link">
            <img src="~assets/images/icons/strelka.png" alt="">
             <NuxtLink to="./" class="catalog__link">Обратно к растениям</NuxtLink>
          </div>
          <div class="container__block-info-plant">
            <div class="block__image-plant">
              <img :src="plant.image" alt="картинка комнатного растения">
            </div>
            <div class="block__description-short">
              <p class="block__title-rus">{{ plant.name_rus }}</p>
              <p class="block__title-en">{{ plant.name_eng }}</p>
              <div class="block-notes">
                <div class="block-notes__image">
                  <img src="~assets/images/icons/temp.png" alt="#">
                  <p class="block-notes__signature">{{ plant.short_temperature }}°С</p>
                </div>
                <div class="block-notes__image">
                  <img src="~assets/images/icons/water.png" alt="#">
                  <p class="block-notes__signature">{{ plant.short_watering }}</p>
                </div>
                <div class="block-notes__image">
                  <img src="~assets/images/icons/sun.png" alt="#">
                  <p class="block-notes__signature">{{ plant.short_sun }}</p>
                </div>
                <div class="block-notes__image">
                  <img src="~assets/images/icons/dangerous.png" alt="#">
                  <p class="block-notes__signature">{{ plant.dangerous }}</p>
                </div>
              </div>
              <b-button class="block__button-add" v-b-modal.modal-room>Добавить к растениям</b-button>
            </div>
          </div>
          <div class="block__dscription">
            <p class="block__title-view">
              Довольно неприхотливое комнатное растение хавортии, которое легко разрастается и размножается. Этот миниатюрный цветок всегда будет выделяться среди других необычной структурой и формой листьев.

              Условия содержания и соответствующий уход для каждого вида хавортий являются одинаковыми. Благодаря своим компактным размерам они прекрасно себя чувствуют в небольших помещениях. Растение напоминает алоэ, но более мелкого размера.

              На протяжении периода вегетации поливать надо умеренно, сразу после того как хорошо просохнет верхний слой почвосмеси. Если в зимнее время куст вступил в период покоя, то количество поливов сокращают до 1 раза в 4 недели.
            </p>
            <p class="block__title-water">Полив</p>
            <p class="block__title-view">{{ plant.watering }}</p>
            <p class="block__title-sun">Освещение</p>
            <p class="block__title-view">{{ plant.sun }}</p>
            <p class="block__title-temp">Температурный режим</p>
            <p class="block__title-view">{{ plant.temperature }}</p>
            <p class="block__title-fertilizer">Подкормки</p>
            <p class="block__title-view">{{ plant.fertilizer }}</p>
            <p class="block__title-transfer">Пересадка</p>
            <p class="block__title-view">{{ plant.transfer }}</p>
            <p class="block__title-diseases">Заболевания</p>
            <p class="block__title-view">{{ plant.diseases }}</p>
          </div>
          <b-modal id="modal-room" hide-footer content-class="modal-window">
            <div class="modal-window__body" v-if="rooms[0]">
              <p class="my-4 modal-window__title">Выберите комнату</p>
              <input type="text" placeholder="Как вы назовете свое растение?" class="modal-window__input" v-model="name">
              <select class="modal-window__select" name="rooms" id="room-select"  v-model="room_id">
                <option selected disabled value="">Комнаты</option>
                <option v-for="room in rooms" :key="room.id" :value="room.id">{{ room.name }}</option>
              </select>
              <button class="modal-window__add-room" @click="addPlantUser()">Сохранить</button>
              </div>
              <p v-else>Чтобы добавить растение, выберите комнату. Если комнаты нет, создайте в своем <NuxtLink to="/account">личном кабинете</NuxtLink>.</p>
          </b-modal>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PlantCard',
  middleware: 'auth',
  data() {
    return{
        plant_id: '',
        room_id: '',
        name: '',
    }
  }, 
  computed: {
    plant() {
      return this.$store.getters.PLANT
    },
    url(){
      return this.$router.back()
    },
    rooms() {
      return this.$store.getters.ROOMS
    },
  },
  created() {
    this.$store.dispatch('getPlant', this.$route.params.id);
    this.$store.dispatch('getRooms');
  },
  methods: {
    addPlantUser() {
      this.$store.dispatch('addPlantUser', {
        plant_id: this.plant.id,
        room_id: this.room_id,
        name: this.name,
      })
    }
  }
}
</script>

<style scoped>
.modal-window__select{
    border: 1px solid #B6B6B6;
    border-radius: 10px;
    height: 50px;
    font-weight: 400;
    font-size: 16px;
    line-height: 105%;
    color: #656262;
    margin-bottom: 26px;
    padding: 13px 27px;
    width: 100%;
}

.modal-window__select:focus{
    outline: none;
}

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
  width: 308px !important;
  height: 40px !important;
  background: #D8F0F8 !important;
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.15) !important;
  border-radius: 15px !important;
  border: none !important;
  font-weight: 600 !important;
  font-size: 18px !important;
  line-height: 99.5% !important;
  color: #5D6062 !important;
  margin-top: 32px !important;
  transition: all 0.5s !important;
}

.block__button-add:hover{
  background: #FAE5CB !important;
  transition: all 0.5s !important;
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