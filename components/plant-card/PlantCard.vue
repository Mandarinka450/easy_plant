<template>
    <div class="container__wrapper">
        <div class="container__card-plant">
          <div class="catalog__block-link">
            <img src="~assets/images/icons/strelka.png" alt="">
             <NuxtLink to="." class="catalog__link">Обратно к растениям</NuxtLink>
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
            <p class="block__title-view">{{ plant.view }}</p>
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

</style>