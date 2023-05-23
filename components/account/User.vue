<template>
    <section>
        <div class="container__account">
            <div class="account">
                <div class="account__avatar">
                    <div class="account__image">
                    </div>
                    <b-button class="account__user-change" v-b-modal.modal2>Стать экспертом</b-button>
                </div>
                <div class="account__info-user" v-if="user.name">
                    <div class="account__block-user">
                        <p class="account__name">{{ user.name }} {{ user.surname }}</p>
                        <NuxtLink to="account/edit"><img src="~assets/images/icons/change-icon.png" alt="#"></NuxtLink>
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
                       <div class="content__place name-room">
                           <img src="~assets/images/icons/bedroom.png" alt="" class="room">
                           <span>{{ room.name }}</span>
                        </div>
                        <div class="content__place">
                            <img src="~assets/images/icons/temperature.png" alt="">
                            <span>{{ room.temperature }}°С</span>
                        </div>
                        <div class="content__place">
                            <img src="~assets/images/icons/air.png" alt="">
                            <span>{{ room.air_humidity }}</span>
                        </div>
                        <img class="content__button-change" src="~assets/images/icons/change-icon.png" alt="#" @click="showFormEdit(room)">
                    </div>
                    <div class="form-room-edit" v-show="show" v-if="room.name">
                        <input class="form-room-edit__name" 
                        type="text" 
                        id="name"
                        v-model="room.name">
                        <input class="form-room-edit__temperature" 
                        type="text" 
                        id="temperature"
                        v-model="room.temperature">
                        <input class="form-room-edit__air" 
                        type="text" 
                        id="air_humidity" 
                        v-model="room.air_humidity">
                        <button class="form-room-edit__button" type="button" @click="saveRoom(room)">Сохранить</button>
                    </div>
                </div>
                <p class="no-room" v-else>Создайте комнату, где будут стоять ваши растения!</p>
            </div>
            <div class="block-advice">
               <div class="header-advice">
                   <p class="header__title">Мои статьи</p>
                   <button class="header__button-add-advice" @click="goToAdd()">+</button>
                </div>
                <div class="advice" v-if="myadvice[0]">
                    <div class="advice__body" v-for="ad in myadvice" :key="ad.id" @click="goToArticle(ad)">
                       <p class="advice__date">{{ ad.date_publish }}</p>
                       <p class="advice__title">{{ ad.title }}</p>
                    </div>
                </div>
                <p class="no-room" v-else>Вы можете написать статью и отправить ее нам!</p>
            </div>
            <div class="block-requests" v-if="mylaws[0]">
                <div class="header">
                   <p class="header__title">Мои заявки</p>
                </div>
                <div class="requests">
                    <div class="request__body" v-for="mylaw in mylaws" :key="mylaw.id">
                       <p class="request__date">{{ mylaw.date_create }}</p>
                       <p class="request__description">Вы отправили запрос на предоставление прав эксперта. Ваша заявка сейчас находится на проверке, она может занять несколько дней для подтверждения ваших данных.</p>
                       <p v-if="mylaw.status === 'На рассмотрении'" class="request__status blue">Решение: {{ mylaw.status }}</p>
                       <p v-else-if="mylaw.status === 'Одобрено'" class="request__status green">Решение: {{ mylaw.status }}</p>
                       <p v-else-if="mylaw.status === 'Отказано'" class="request__status red">Решение: {{ mylaw.status }}</p>
                    </div>
                </div>
            </div>
            <div class="block-queries" v-if="myqueries[0]">
                <div class="header">
                   <p class="header__title">Мои заявки на статью</p>
                </div>
                <div class="queries">
                    <div class="query__body" v-for="myquery in myqueries" :key="myquery.id">
                        <p class="query__date">{{ myquery.date_create }}</p>
                        <p class="query__title">{{ myquery.title }}</p>
                        <p v-if="myquery.status === 'На проверке'" class="query__answer blue">Решение: {{ myquery.status }}</p>
                        <p v-else-if="myquery.status === 'Опубликовано'" class="query__answer green">Решение: {{ myquery.status }}</p>
                        <p v-else-if="myquery.status === 'Отказано'" class="query__answer red">Решение: {{ myquery.status }}</p>
                        <p v-if="myquery.comment" class="query__comment">Комментарий: {{ myquery.comment }}</p>
                    </div>
                </div>
            </div>
            <b-modal id="modal" hide-footer content-class="modal-window">
                <div class="modal-window__body">
                   <p class="my-4 modal-window__title">Создать комнату</p>
                   <input type="text" placeholder="Место" class="modal-window__input" required v-model="name">
                   <input type="text" placeholder="Температура в помещении" class="modal-window__input" required v-model="temperature">
                   <input type="text" placeholder="Влажность воздуха в помещении" class="modal-window__input" required v-model="air_humidity">
                   <button class="modal-window__add-room" @click="addRoomUser()">Сохранить</button>
                </div>
            </b-modal>
            <b-modal id="modal2" hide-footer content-class="modal-window">
                <div class="modal-window__body">
                    <p class="my-4 modal-window__title">Стать экспертом</p>
                    <p class="modal-window__text">Чтобы стать экспертом, необходимо подтвердить свою квалификацию.</p>
                    <input type="text" placeholder="Присвоенная квалификация" class="modal-window__input" required v-model="science_degree">
                    <input type="text" placeholder="Место обучения" class="modal-window__input" required v-model="place_study">
                    <textarea type="text" placeholder="Расскажите немного о себе" class="modal-window__textarea" required v-model="about_me"></textarea>
                    <button class="modal-window__add-room" @click="addLaw()">Отправить</button>
                </div>
            </b-modal>
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
        air_humidity: '',
        science_degree: '',
        place_study: '',
        about_me: '',
        status: '',
        show: false,
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
    room() {
      return {...this.$store.state.room}
    },
    law() {
        return this.$store.getters.LAW
    },
    mylaws() {
        return this.$store.getters.MYLAWS
    },
    myqueries() {
        return this.$store.getters.MYQUERIES
    },
    myadvice() {
        return this.$store.getters.MYADVICE
    },
  },
  created() {
    this.$store.dispatch('getUser');
    this.$store.dispatch('getRooms');
    this.$store.dispatch('getCount');
    this.$store.dispatch('myLaws');
    this.$store.dispatch('myQueries');
    this.$store.dispatch('myAdvice');
  },
  methods: {
    addRoomUser() {
      this.$store.dispatch('addRoom', {
        name: this.name,
        temperature: this.temperature,
        air_humidity: this.air_humidity,
      })
    },
    showFormEdit(room) {
        this.show = true;
        console.log(room.id)
        this.$store.dispatch('getMyRoom', room.id);
    },
    saveRoom(room) {
      this.$store.dispatch('updateRoom', {id: room.id, room: {
        name: this.room.name,
        temperature: this.room.temperature,
        air_humidity: this.room.air_humidity,
      }})
    },
    addLaw() {
      this.$store.dispatch('addLaw', {
        science_degree: this.science_degree,
        place_study: this.place_study,
        about_me: this.place_study,
        status: "На рассмотрении"
      })
    },
    goToAdd() {
    this.$router.push('add/article')
  },
  goToArticle(ad) {
    this.$router.push('/advice/' + ad.id)
  },
  }
}
</script>

 
<style>
.content__button-change{
    cursor: pointer;
}

.blue{
    font-weight: 500;
    color: blue;
}
.green{
    font-weight: 500;
    color: green;
}
.red{
    font-weight: 500;
    color: red;
}

.advice{
    cursor: pointer;
}

.form-room-edit__name, .form-room-edit__temperature, .form-room-edit__air{
    position: relative;
    box-sizing: border-box;
    height: 43px;
    width: 100%;
    background: transparent;
    padding-left: 19px;
    border: none;
    border-bottom: 0.5px solid #8FB377;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.05);
    font-size: 16px;
    line-height: 110%;
    letter-spacing: -1px;
    color: #656262;
}

.form-room-edit__button{
    width: 170px;
    height: 40px;
    transition: all 0.5s;
    background: #8FB377;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    font-weight: 400;
    font-size: 20px;
    line-height: 99.5%;
    letter-spacing: 0.4px;
    border: none;
    margin-top: 45px;
    color: #FFFFFF;
}

.form-room-edit__button:hover{
    background: #768A68;
    transition: all 0.5s;
}

.modal-window__text{
    text-align: center;
}

.requests, .queries, .advice{
    display: flex;
    flex-direction: column;
    margin-bottom: 80px;
    margin-top: 35px;

}

.request__body, .query__body, .advice__body{
    background: #FFFFFF;
    box-shadow: 0.5px 0.5px 5px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 650px;
    min-height: 117px;
    padding: 10px 20px;
    margin-bottom: 20px;
}

.request__date, .request__description, .query__date, .query__title, .advice__date, .advice__title{
    color: #8F8F8F;
}

.query__comment{
    color: #4E4E4E;
}


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
    background: url("~assets/images/avatar.jpg") no-repeat;
    background-size: cover;
    border-radius: 100%;
    border: 6px solid #C3E2EC;
    margin-bottom: 40px;
}

.account__user-change{
    background: #D8F0F8 !important;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.15) !important;
    border-radius: 15px !important;
    width: 308px !important;
    height: 40px !important;
    border: none !important;
    font-weight: 600 !important;
    font-size: 20px !important;
    line-height: 99.5% !important;
    letter-spacing: 0.4px !important;
    color: #5D6062 !important;
    transition: all 0.5s !important;
}

.account__user-change:hover{
    background: #BFE7F5 !important;
    transition: all 0.5s !important;
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

.block-rooms, .block-advice, .block-requests{
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

.header__button-add-room, .header__button-add-advice{
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
    color: white;
}

.header__button-add-room:hover, .header__button-add-advice:hover {
    background: #f1ec5a !important;
    transition: 0.5s !important;
}

.header, .header-advice{
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
    font-size: 16px;
    transition: 0.5s;
    color: #4E4E4E;
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

.modal-window__textarea{
    border: 1px solid #B6B6B6;
    border-radius: 10px;
    height: 150px;
    font-weight: 400;
    font-size: 16px;
    line-height: 105%;
    color: #B6B6B6;
    margin-bottom: 26px;
    padding: 13px 27px;
    width: 100%;
    resize: none;
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
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 35px;
}

.name-room{
    width: 150px;
}

.content > span {
    font-weight: 400;
    font-size: 20px;
    line-height: 105%;
}

.room{
    width: 47px;
    height: 47px;
}

.content__delete{
    width: 27px;
    height: 27px;
}

.no-room{
    font-size: 20px;
    color: #959393;
    text-align: center;
    margin-top: 30px;
}

.content__button-change{
    width: 20px;
    height: 24px;
}

.modal-window__input:focus{
    outline: 0.4px solid #9D9D9D;
    color: #959393;
}

@media (max-width: 1433px) {
    .container__account{
        width: 65%;
    }
    .block-rooms, .block-advice, .block-requests, .block-queries{
        width: 100%;
    }

    .advice__body, .request__body, .query__body{
        width: 100%;
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
@media (max-width: 500px) {
    .header, .header-advice{
        flex-direction: column;
        align-items: center;
    }
}

@media (max-width: 430px) {
   .content__body{
      width: 100%;
   }
   .form-room-edit{
    display: flex;
    flex-direction: column;
   }
   .form-room-edit__button{
    margin-left: auto;
    margin-right: auto;
   }
}

@media (max-width: 330px) {
   .account__user-change{
    width: 100%;
   }
}
</style>