<template>
    <section>
        <div class="container__card">
            <div class="card-plants" v-if="myplant.plants && roomPlant.rooms">
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
               <div class="container__air-advice" v-if="roomPlant.rooms.air_humidity < myplant.plants.air">
                <div class="rules__icon">
                  <img src="~assets/images/icons/capli.png" alt="#">
                </div>
                <div class="rules__text">
                  <p class="agree">Недостаточный уровень влажности. </p>
                  <p>Оптимальная влажность воздуха для растения - <b>{{ myplant.plants.air }}%</b>. Чтобы создать повышенную влажность в квартире существуют несколько способов:</p>
                  <p>• регулярное опрыскивание листьев водой комнатной температуры;</p>
                  <p>• использование гигроскопичных веществ;</p>
                  <p>• использование увлажнителя воздуха.</p>
                </div>
               </div>
               <div class="block-plants" v-if="myplant.plants">
                  <div class="container__image">
                    <p class="title-rus">{{ myplant.name }}</p>
                    <p class="title-eng">{{ myplant.plants.name_rus }}</p>
                    <img :src="myplant.plants.image" alt="картинка растения" class="not-smile">
                    <img src="~assets/images/icons/smile.png" alt="" class="smile" :class="{ 'show-image': showImage }">
                    <div class="shadow"></div>
                  </div>
                  <div class="conditions">
                    <div class="container__remind-by-plant" v-if="myremind && myremind.show === '1'">
                      <img src="~assets/images/icons/pl-icon.png" alt="" class="image-remind-by-id">
                      <p class="text-remind-by-plant">Пора обо мне позаботиться</p>
                      <p>{{ myremind.comment }}</p>
                      <div class="buttons">
                        <b-button class="button-remind-by-id ura" v-b-modal.modal4>Позже</b-button>
                        <button class="button-remind-by-id" @click="updateDone(myremind)">Позаботиться</button>
                      </div>
                    </div>
                  <div class="container__description" v-else>
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
               <p class="card-plants__message" :class="{ 'show-message': showMessage }">Напоминание успешно создалось!</p>
               <p class="card-plants__message" :class="{ 'show-message': showMessage2 }">Напоминание было отложено!</p>
            </div>
            <Loader v-else></Loader>
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
              <input type="date" id="meeting-time"
               name="meeting-time" value="2023-06-12T19:30"
               min="2023-05-11T00:00" max="2025-06-14T00:00"
               v-model="date_remind"
               class="modal-window__input">
              <input type="text" placeholder="Пересадить в другой горшок" class="modal-window__input" v-model="comment">
              <button class="modal-window__add-room" @click="createRemind()">Добавить</button>
              </div>
          </b-modal>
          <b-modal id="modal4" hide-footer content-class="modal-window">
            <div class="modal-window__body">
              <p class="my-4 modal-window__title">Отложить напоминание</p>
              <p class="my-4">Выберите день, когда необходимо будет напомнить</p>
              <input type="date" id="meeting-time"
               name="meeting-time" value="2023-06-12T19:30"
               min="2023-05-11T00:00" max="2025-06-14T00:00"
               v-model="new_date_remind"
               class="modal-window__input">
              <button class="modal-window__add-room" @click="updateDayRemind(myremind)">Сохранить</button>
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
        plant_id: '',
        date_remind: '',
        new_date_remind: '',
        comment: '',
        showMessage: false,
        showMessage2: false,
        showImage: false,
        showDiv: false
        
    }
  }, 
  computed: {
    myplant() {
      return this.$store.getters.MYPLANT
    },
    myremind() {
      return this.$store.getters.REMIND
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
    this.$store.dispatch('getRemind', this.$route.params.id);
    this.$store.dispatch('roomByPlant', this.$route.params.id);

  },
  methods: {
    updateMyPlant(myplant) {
      this.$store.dispatch('updateMyPlant', {id: myplant.id,  myplant: {
        room_id: this.room_id,
      }})
      .then(() => {
        this.$bvModal.hide('modal');
        this.room_name = '';
      }) 
    },
    deleteMyPlant(id) {
      this.$store.dispatch('deleteMyPlant', id)
    },
    hide(){
      setTimeout(() => {
        this.showMessage = false
      }, 4000)
    },
    hide2(){
      setTimeout(() => {
        this.showMessage2 = false
      }, 4000)
    },
    hideImage(){
      setTimeout(() => {
        this.showImage = false
      }, 30000)
    },
    createRemind() {
      this.$store.dispatch('createReminders', {
        myplant_id: this.myplant.id,
        plant_id: this.myplant.plants.id,
        date_remind: this.date_remind,
        comment: this.comment,
      })
      .then(() => {
        this.$bvModal.hide('modal3');
        this.date_remind = '';
        this.comment = '';
        this.showMessage = true;
      }) 
      this.hide()
    },
    updateDone(myremind) {
      this.$store.dispatch('updateMyRemind', {id: myremind.id,  myremind: {
        show: "0"
      }})
      .then(() => {
        this.showImage = true;
      }) 
      this.hideImage()
    },
    updateDayRemind(myremind){
      this.$store.dispatch('updateMyRemind', {id: myremind.id,  myremind: {
        date_remind: this.new_date_remind,
        show: "0"
      }})
      .then(() => {
        this.$bvModal.hide('modal4');
        this.showMessage2 = true;
      }) 
      this.hide2()
    },
    showAir(myplant){
      if (myplant) {
        console.log(myplant)
        this.showDiv = true;
      }
      else{
        this.showDiv = false;
      }
    }
  },
}
</script>

<style scoped>

</style>