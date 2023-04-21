<template>
    <section>
        <div class="container__account">
            <div class="account">
                <div class="account__avatar">
                    <div class="account__image">
                    </div>
                    <button class="account__user-change">Стать экспертом</button>
                </div>
                <div class="account__info-user">
                    <div class="account__block-user">
                        <p class="account__name">{{ user.name }} {{ user.surname }}</p>
                        <img src="~assets/images/icons/change-icon.png" alt="#">
                    </div>
                    <p class="account__mail">{{ user.email }}</p>
                    <div class="account__block-plants">
                        <img src="~assets/images/icons/plants-icon.png" alt="#">
                        <p class="account__quantity-plants">{{ count }} растений</p>
                    </div>
                    <p class="account__description">{{ user.description }}</p>
                </div>
            </div>   
            <div class="block-rooms">
                <div class="header">
                    <p class="header__title">Мои комнаты</p>
                    <b-button class="header__button-add-room" v-b-modal.modal>+</b-button>
                </div>
                <div class="content" v-if="rooms[0]">
                    <div class="content__body" v-for="room in rooms" :key="room.id">
                        <div class="content__place">
                            <img src="~assets/images/icons/bedroom.png" alt="" class="room">
                            <span>{{ room.name }}</span>
                        </div>
                        <div class="content__place">
                            <img src="~assets/images/icons/temperature.png" alt="">
                            <span>{{ room.temperature }}</span>
                        </div>
                        <div class="content__place">
                            <img src="~assets/images/icons/air.png" alt="">
                            <span>{{ room.air_humidity }}</span>
                        </div>
                    </div>
                </div>
                <p v-else>Создайте комнату!</p>
                <b-modal id="modal" hide-footer content-class="modal-window">
                    <div class="modal-window__body">
                       <p class="my-4 modal-window__title">Создать комнату</p>
                       <input type="text" placeholder="Место" class="modal-window__input" required v-model="name">
                       <input type="text" placeholder="Температура в помещении" class="modal-window__input" required v-model="temperature">
                       <input type="text" placeholder="Влажность воздуха в помещении" class="modal-window__input" required v-model="air_humidity">
                       <button class="modal-window__add-room" @click="addRoomUser()">Сохранить</button>
                    </div>
                </b-modal>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Categories',
  data() {
    return{
        name: '',
        temperature: '',
        air_humidity: ''
    }
  }, 
  computed: {
    user() {
      return this.$store.getters.USER
    },
    rooms() {
      return this.$store.getters.ROOMS
    },
    count() {
      return this.$store.getters.COUNT
    },
  },
  created() {
    this.$store.dispatch('getUser');
    this.$store.dispatch('getRooms');
    this.$store.dispatch('getCount');
  },
  methods: {
    addRoomUser() {
      this.$store.dispatch('addRoom', {
        name: this.name,
        temperature: this.temperature,
        air_humidity: this.air_humidity,
      })
    }
  }
}
</script>


<style>
.container__account{
    width: 1000px;
    height: auto;
    margin-top: 90px;
    margin-left: 475px;
    position: relative;
    z-index: 1;
}

.account{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.account__avatar{
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 70px;
}

.account__info-user{
    width: 630px;
    margin-top: 60px;
}

.account__image{
    width: 266px;
    height: 266px;
    background-color: gray;
    border-radius: 100%;
    border: 6px solid #C3E2EC;
    margin-bottom: 40px;
}

.account__user-change{
    background: #D8F0F8;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    width: 308px;
    height: 40px;
    border: none;
    font-weight: 600;
    font-size: 20px;
    line-height: 99.5%;
    letter-spacing: 0.4px;
    color: #5D6062;
    transition: all 0.5s;
}

.account__user-change:hover{
    background: #BFE7F5;
    transition: all 0.5s;
}

.account__name{
    font-weight: 600;
    font-size: 32px;
    line-height: 105%;
    letter-spacing: 0.4px;
    color: #4E4E4E;
    text-transform: uppercase;
}

.account__mail{
    font-weight: 500;
    font-size: 18px;
    line-height: 105%;
    letter-spacing: 0.4px;
    text-decoration-line: underline;
    color: #4E4E4E;
}

.account__quantity-plants{
    margin-top: 5px;
    font-weight: 500;
    font-size: 18px;
    line-height: 105%;
    letter-spacing: 0.4px;
    color: #8A8A8E;
}

.account__description{
    width: 90%;
    font-size: 20px;
    line-height: 105%;
    letter-spacing: 0.4px;
    color: #000000;
    text-align: justify;
}

.account__block-user, .account__block-plants{
    display: flex;
}
.account__block-user img{
    margin-top: 7px;
    margin-left: 15px;
    width: 20px;
    height: 22px;
}
.account__block-plants img{
    width: 30px;
    height: 28px;
    margin-right: 8px;
}

.block-rooms{
    margin-top: 80px;
    width: 70%;
    height: auto;
}

.header__title{
    font-weight: 600;
    font-size: 32px;
    line-height: 105%;
    color: #4E4E4E;
}

.header__button-add-room{
    background: #E7D39B !important;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.15) !important;
    border-radius: 15px !important;
    border: none !important;
    width: 215px !important;
    font-weight: 800 !important;
    font-size: 24px !important;
    line-height: 99.5% !important;
    height: 44px !important;
    transition: 0.5s !important;
}

.header__button-add-room:hover {
    background: #f1ec5a !important;
    transition: 0.5s !important;
}

.header{
    display: flex;
    justify-content: space-between;
}

.modal-window {
    box-shadow: -6px -6px 5px rgba(253, 253, 253, 0.25), 6px 6px 5px rgba(253, 253, 253, 0.25);
    border-radius: 10px;
}

.modal-window__body{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.modal-window__add-room{
    background: #C3E2EC;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    height: 40px;
    width: 50%;
    border: none;
    margin-bottom: 35px;
    font-weight: 600;
    font-size: 20px;
    transition: 0.5s;
}

.modal-window__add-room:hover{
    background: #77b1c5;
    transition: 0.5s;
}

.modal-window__input{
    border: 1px solid #B6B6B6;
    border-radius: 10px;
    height: 43px;
    font-weight: 400;
    font-size: 16px;
    line-height: 105%;
    color: #B6B6B6;
    margin-bottom: 26px;
    padding: 13px 27px;
    width: 100%;
}

.modal-window__title{
    font-weight: 600;
    font-size: 28px;
    line-height: 85.5%;
}

.content{
    margin-top: 35px;
}

.content__body{
    width: 400px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.content > span {
    font-weight: 400;
    font-size: 20px;
    line-height: 105%;
}

.content__place{
    margin-bottom: 35px;
}

.room{
    width: 47px;
    height: 47px;
}

.modal-window__input:focus{
    outline: 0.4px solid #9D9D9D;
    color: #959393;
}

@media (max-width: 1433px) {
    .container__account{
        width: 65%;
    }
}

@media (max-width: 1280px) {
    .container__account{
        width: 55%;
    }
}

@media (max-width: 1115px) {
   .container__account{
    margin-left: auto;
    margin-right: auto;
    width: 90%;
   }
}

@media (max-width: 720px) {
   .account{
    flex-direction: column;
    align-items: center;
   }

   .account__info-user{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
   }

   .account__avatar{
    margin-right: 0;
   }

   .account__description{
    text-align: center;
   }
}

@media (max-width: 330px) {
   .account__user-change{
    width: 100%;
   }
}
</style>