<template>
    <section>
        <div class="container__card">
            <div class="card-plants">
               <div class="catalog__block-link">
                  <img src="~assets/images/icons/strelka.png" alt="ссылка обратно к растениям">
                  <NuxtLink to="/my-plants" class="catalog__link">Обратно к растениям</NuxtLink>
               </div>
               <div class="plant__place" v-if="roomPlant.rooms">
                  <div class="plant__room-element">
                    <span class="element__one">{{ roomPlant.rooms.name }}</span>
                    <p>Местонахождение</p>
                  </div> 
                  <div class="plant__room-element">
                    <span class="element__one">{{ roomPlant.rooms.temperature }}°С</span>
                    <p>Температура</p>
                  </div> 
                  <div class="plant__room-element">
                    <span class="element__one">{{ roomPlant.rooms.air_humidity }}%</span>
                    <p>Влажность</p>
                  </div> 
               </div>
               <div class="block-plants" v-if="myplant.plants">
                  <div class="container__image">
                    <p class="title-rus">{{ myplant.name }}</p>
                    <p class="title-eng">{{ myplant.plants.name_rus }}</p>
                    <img :src="myplant.plants.image" alt="картинка растения">
                    <div class="shadow"></div>
                  </div>
                  <div class="conditions">
                  <div class="container__description">
                    <div class="block__condition">
                        <img src="~assets/images/icons/icon_temp.png" alt="иконка для температуры">
                        <p class="signature-condition">{{ myplant.plants.short_temperature }}°С</p>
                    </div>
                    <div class="block__condition">
                        <img src="~assets/images/icons/icon_water.png" alt="иконка для полива">
                        <p class="signature-condition">{{ myplant.plants.short_watering }}</p>
                    </div>
                    <div class="block__condition">
                        <img src="~assets/images/icons/icon_sun.png" alt="иконка для освещения">
                        <p class="signature-condition">{{ myplant.plants.short_sun }}</p>
                    </div>
                    <div class="block__condition">
                        <img src="~assets/images/icons/icon_flower.png" alt="иконка для цветения">
                        <p class="signature-condition">{{ myplant.plants.short_flowers }}</p>
                    </div>
                    <div class="block__condition">
                        <img src="~assets/images/icons/icon_fertilizer.png" alt="иконка для подкормки">
                        <p class="signature-condition">{{ myplant.plants.short_fertilizer }}</p>
                    </div>
                    <div class="block__condition">
                        <img src="~assets/images/icons/icon_transfer.png" alt="иконка для пересадки">
                        <p class="signature-condition">{{ myplant.plants.short_transfer }}</p>
                    </div>
                  </div>
                    <div class="block__functions">
                      <b-button class="block-plants__go" v-b-modal.modal>Переместить</b-button>
                      <b-button class="block-plants__delete" v-b-modal.modal2>Удалить</b-button>
                    </div>
                    <b-button class="block-plants__add-reminders" v-b-modal.modal3>Добавить напоминание</b-button>
                  </div>
               </div>
            </div>
            <b-modal id="modal" hide-footer content-class="modal-window">
            <div class="modal-window__body" v-if="rooms[0]">
              <p class="my-4 modal-window__title">Выберите комнату</p>
              <select class="modal-window__select" name="rooms" id="room-select"  v-model="room_id">
                <option selected disabled value="">Комнаты</option>
                <option v-for="room in rooms" :key="room.id" :value="room.id">{{ room.name }}</option>
              </select>
              <button class="modal-window__add-room" @click="updateMyPlant(myplant)">Сохранить</button>
              </div>
          </b-modal>
          <b-modal id="modal2" hide-footer content-class="modal-window">
            <div class="modal-window__body">
              <p class="my-4">Вы уверены, что хотите удалить растение из списка?</p>
              <button class="modal-window__add-room" @click="deleteMyPlant(myplant.id)">Удалить</button>
              </div>
          </b-modal>
          <b-modal id="modal3" hide-footer content-class="modal-window">
            <div class="modal-window__body">
              <p class="my-4 modal-window__title">Добавить напоминание</p>
              <input type="datetime-local" id="meeting-time"
               name="meeting-time" value="2023-06-12T19:30"
               min="2023-05-11T00:00" max="2025-06-14T00:00"
               v-model="date_remind"
               class="modal-window__input">
              <input type="text" placeholder="Необходимо пересадить в другой горшок" class="modal-window__input" v-model="comment">
              <button class="modal-window__add-room" @click="createRemind()">Добавить</button>
              </div>
          </b-modal>
        </div>
    </section>
</template>

<script>
export default {
  name: 'MyPlantsCard',
  data() {
    return{
        room_id: '',
        myplant_id: '',
        date_remind: '',
        comment: ''
    }
  }, 
  computed: {
    myplant() {
      return this.$store.getters.MYPLANT
    },
    rooms() {
      return this.$store.getters.ROOMS
    },
    roomPlant() {
      return this.$store.getters.ROOMPLANT
    },
  },
  created() {
    this.$store.dispatch('getMyPlant', this.$route.params.id);
    this.$store.dispatch('getRooms');
    this.$store.dispatch('roomByPlant', this.$route.params.id);
  },
  methods: {
    updateMyPlant(myplant) {
      this.$store.dispatch('updateMyPlant', {id: myplant.id, myplant: {
        room_id: this.room_id,
      }})
    },
    deleteMyPlant(id) {
      this.$store.dispatch('deleteMyPlant', id)
    },
    createRemind() {
      this.$store.dispatch('createReminders', {
        myplant_id: this.myplant.id,
        date_remind: this.date_remind,
        comment: this.comment,
      })
    }
  },
}
</script>

<style scoped>

</style>