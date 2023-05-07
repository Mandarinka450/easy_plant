<template>
    <section>
        <div class="container__card">
            <div class="card-plants">
               <div class="catalog__block-link">
                  <img src="~assets/images/icons/strelka.png" alt="ссылка обратно к растениям">
                  <NuxtLink to="/my-plants" class="catalog__link">Обратно к растениям</NuxtLink>
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
                    <b-button class="block-plants__add-reminders" v-b-modal.modal2>Добавить напоминание</b-button>
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
        </div>
    </section>
</template>

<script>
export default {
  name: 'MyPlantsCard',
  data() {
    return{
        room_id: '',
    }
  }, 
  computed: {
    myplant() {
      return this.$store.getters.MYPLANT
    },
    rooms() {
      return this.$store.getters.ROOMS
    },
  },
  created() {
    this.$store.dispatch('getMyPlant', this.$route.params.id);
    this.$store.dispatch('getRooms');
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
  },
}
</script>

<style scoped>

.conditions{
  width: 60%;
  display: flex;
  flex-direction: column;
  margin-top: auto;
  margin-bottom: auto;
}

.block__functions{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  column-gap: 20px;
}

.block-plants__add-reminders{
  width: 70% !important;
  height: 40px !important;
  background: #D8F0F8 !important;
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.15) !important;
  border-radius: 15px !important;
  border: none !important;
  font-weight: 600 !important;
  font-size: 16px !important;
  line-height: 99.5% !important;
  color: #5D6062 !important;
  margin-top: 32px !important;
  transition: all 0.5s !important;
  margin-left: auto;
  margin-right: auto;
}

.block-plants__go, .block-plants__delete{
  width: 170px !important;
  height: 40px !important;
  background: #D8F0F8 !important;
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.15) !important;
  border-radius: 15px !important;
  border: none !important;
  font-weight: 600 !important;
  font-size: 16px !important;
  line-height: 99.5% !important;
  color: #5D6062 !important;
  margin-top: 32px !important;
  transition: all 0.5s !important;
}

.block-plants__go:hover, .block-plants__delete:hover, .block-plants__add-reminders:hover{
  background: #FAE5CB !important;
  transition: all 0.5s !important;
}

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
    /* width: 60%; */
    height: 250px;
    /* margin-top: auto;
    margin-bottom: auto; */
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

@media (max-width: 560px) {
  .block-plants__add-reminders{
    width: 100% !important;
}
}

@media (max-width: 525px) {
   .container__image{
    width: 70%;
   }
   .container__description{
    width: 100%;
   }
   .block__functions{
    flex-direction: column;
    justify-content: center;
    width: 100%;
   }
   .block-plants__go, .block-plants__delete{
      width: 100% !important;
      margin-left: auto;
      margin-right: auto;
   }
   .block__condition{
    margin-left: 0;
   }
}

@media (max-width: 425px) {
   .container__image{
    width: 90%;
   }
   .conditions{
    align-items: center;
    width: 90%;
   }
   .container__description{
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 60px;
}
}

::-webkit-scrollbar { width: 0;}
</style>