<template>
    <section>
        <div class="container__account" v-if="user.name && count">
            <div class="account">
                <div class="account__avatar">
                    <div class="account__image">
                    </div>
                    <b-button class="account__user-change" v-b-modal.modal2 v-if="user.roles == 'user'">Стать экспертом</b-button>
                </div>
                <div class="account__info-user">
                        <div class="account__check-expert">
                            <img src="~assets/images/icons/check.png" alt="" v-if="user.roles == 'expert'">
                            <p class="check" v-if="user.roles == 'expert'">Эксперт</p>
                        </div>
                    <div class="account__block-user">
                        <p class="account__name">{{ user.name }} {{ user.surname }}</p>
                        <NuxtLink to="account/edit"><img src="~assets/images/icons/change-icon.png" alt="#"></NuxtLink>
                    </div>
                    <p class="account__mail">{{ user.email }}</p>
                    <div class="account__block-plants">
                        <img src="~assets/images/icons/plants-icon.png" alt="#">
                        <p class="account__quantity-plants">{{ count }}</p>
                    </div>
                    <p class="account__description">{{ user.description }}</p>
                </div>
            </div>   
            <div class="block-rooms">
              <p class="block-rooms__message" :class="{ 'show-message': showMessage }">Комната успешно изменена!</p>
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
                        type="number" 
                        id="temperature"
                        v-model="room.temperature">
                        <input class="form-room-edit__air" 
                        type="number" 
                        id="air_humidity" 
                        v-model="room.air_humidity">
                        <button class="form-room-edit__button" type="button" @click="saveRoom(room)">Сохранить</button>
                    </div>
                </div>
                <p class="no-room" v-else>Создайте комнату, где будут стоять ваши растения!</p>
            </div>
            <div class="block-advice" v-if="user.roles == 'expert'">
               <div class="header-advice">
                   <p class="header__title">Мои статьи</p>
                   <button class="header__button-add-advice" @click="goToAdd()">+</button>
                </div>
                <div class="advice" v-if="myadvice[0]">
                    <div class="advice__body" v-for="ad in myadvice" :key="ad.id" @click="goToArticle(ad)">
                       <p class="advice__date">{{ ad.date_publish }}</p>
                       <p class="advice__title">{{ ad.title }}</p>
                       <p class="advice__content">{{ ad.content }}</p>
                    </div>
                </div>
                <p class="no-room" v-else>Вы можете написать статью и отправить ее нам!</p>
            </div>
            <div class="block-requests" v-if="user.roles == 'user'">
                <div class="header" v-if="mylaws[0]">
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
            <div class="block-queries" v-if="user.roles == 'expert'">
                <div class="header" v-if="myqueries[0]">
                   <p class="header__title">Мои заявки на опубликование статьи</p>
                </div>
                <div class="queries">
                    <div class="query__body" v-for="myquery in myqueries" :key="myquery.id">
                        <p class="query__date">{{ myquery.date_create }}</p>
                        <p class="query__title">{{ myquery.title }}</p>
                        <p class="query__content">{{ myquery.content }}</p>
                        <p v-if="myquery.status === 'На проверке'" class="query__answer blue">Решение: {{ myquery.status }}</p>
                        <p v-else-if="myquery.status === 'Опубликовано'" class="query__answer green">Решение: {{ myquery.status }}</p>
                        <p v-else-if="myquery.status === 'Отказано'" class="query__answer red">Решение: {{ myquery.status }}</p>
                        <p v-if="myquery.comment" class="query__comment"><b>Комментарий: {{ myquery.comment }}</b></p>
                    </div>
                </div>
            </div>
            <b-modal id="modal" hide-footer content-class="modal-window">
                <div class="modal-window__body">
                   <p class="my-4 modal-window__title">Создать комнату</p>
                   <input type="text" placeholder="Место" class="modal-window__input" required v-model="name" >
                   <input type="number" placeholder="Температура в помещении" class="modal-window__input" required v-model="temperature" >
                   <input type="number" placeholder="Влажность воздуха в помещении в %" class="modal-window__input" required v-model="air_humidity" >
                   <button class="modal-window__add-room" @click="addRoomUser()">Сохранить</button>
                </div>
            </b-modal>
            <b-modal id="modal2" hide-footer content-class="modal-window">
                <div class="modal-window__body">
                    <p class="my-4 modal-window__title">Стать экспертом</p>
                    <p class="modal-window__text">Чтобы стать экспертом, необходимо подтвердить свою квалификацию.</p>
                    <input type="text" placeholder="Присвоенная квалификация" class="modal-window__input" required v-model="science_degree" >
                    <input type="text" placeholder="Место обучения" class="modal-window__input" required v-model="place_study" >
                    <textarea type="text" placeholder="Расскажите немного о себе" class="modal-window__textarea" required v-model="about_me" ></textarea>
                    <button class="modal-window__add-room" @click="addLaw()">Отправить</button>
                </div>
            </b-modal>
        </div>
        <Loader v-else></Loader>
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
        showMessage: false,
    }
  }, 
  computed: {
    user() {
      return this.$store.getters.USER
    },
    admin(){
      return this.$store.getters.ADMIN
    },
    auth(){
      return this.$store.getters.AUTH
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
      .then(() => {
        this.$bvModal.hide('modal');
        this.name = '';
        this.temperature = '';
        this.air_humidity = '';
      }) 
    },
    showFormEdit(room) {
        this.show = true;
        console.log(room.id)
        this.$store.dispatch('getMyRoom', room.id);
    },
    hide(){
      setTimeout(() => {
        this.showMessage = false
      }, 4000)
    },
    saveRoom(room) {
      this.$store.dispatch('updateRoom', {id: room.id, room: {
        name: this.room.name,
        temperature: this.room.temperature,
        air_humidity: this.room.air_humidity,
      }})
      .then(() => {
        this.showMessage = true;
      }) 
      this.hide()
    },
    addLaw() {
      this.$store.dispatch('addLaw', {
        science_degree: this.science_degree,
        place_study: this.place_study,
        about_me: this.about_me,
        status: "На рассмотрении"
      })
      .then(() => {
        this.$bvModal.hide('modal2');
        this.science_degree = '';
        this.place_study = '';
        this.about_me = '';
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
</style>