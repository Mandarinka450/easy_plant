<template>
    <section>
        <div class="container__cart" v-if="query.id">
            <div class="catalog__block-link">
              <img src="~assets/images/icons/strelka.png" alt="">
              <NuxtLink to="/queries" class="catalog__link">Обратно к зявкам</NuxtLink>
            </div>
            <p class="advice__user">{{ query.users.name }} {{ query.users.surname }} от {{ query.date_create }}</p>
            <div class="advice__body">
                <p class="advice__element">{{ query.date_create }}</p>
                <p class="advice__element">{{ query.users.name }} {{ query.users.surname }}</p>
                <p class="advice__element">Название: {{ query.title }}</p>
                <p class="advice__element">{{ query.content }}</p>
                <div v-if="query.status === 'На проверке'" class="footer">
                  <button @click="updateQueryPublish(query)" class="footer__button-positive">Опубликовать</button>
                  <b-button v-b-modal.modal class="footer__button-negative">Отказать</b-button>
               </div>
            </div>
        </div>
        <b-modal id="modal" hide-footer content-class="modal-window">
            <div class="modal-window__body">
              <p>Напишите причину отказа, добавьте комментарий к ответу</p>
              <input type="text" placeholder="Причина отказа" class="modal-window__input" v-model="comment">
              <button class="modal-window__add-room" @click="updateQuery(query)">Отказать</button>
              </div>
        </b-modal>
    </section>
</template>

<script>
export default {
  name: 'IdQuery',
  data() {
    return{
        status: '',
        comment: '',
        query_id: '',
        title: '',
        content: ''
    }
  }, 
  computed: {
    query() {
      return this.$store.getters.QUERY
    },
  },
  created() {
    this.$store.dispatch('getQueryById', this.$route.params.id);
  },
  methods: {
    updateQuery(query){
      this.$store.dispatch('updateQuery', {id: query.id, query: {
        status: "Отказано",
        comment: this.comment
      }})
    },
    updateQueryPublish(query){
      this.$store.dispatch('updateQuery', {id: query.id, query: {
        status: "Опубликовано",
      }})
      this.$store.dispatch('addAdvice', {
        query_id: this.query.id,
        title: this.query.title,
        content: this.query.content,
      })
    }
  },
}
</script>

<style scoped>
.footer{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin-top: 60px;
}
.footer__button-positive{
  width: 261px;
  height: 40px;
  background: #8FB377;
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  font-size: 16px;
  color: #FFFFFF;
  border: none;
  margin-right: 20px;
  transition: all 0.5s;
}
.footer__button-positive:hover{
    background: #768A68;
    transition: all 0.5s;
}
.footer__button-negative{
  width: 261px;
  height: 40px;
  background: #FF3F3F;
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  font-size: 16px;
  color: #FFFFFF;
  border: none;
  transition: all 0.5s;
}
.footer__button-negative:hover{
    background: #c12b2b;
    transition: all 0.5s;
}
.advice__body{
  width: 90%;
  height: auto;
  padding:20px 20px;
  border: 1px solid #CDCDCD;
  filter: drop-shadow(0.5px 0.5px 5px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
}
.advice__element{
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 110%;
  color: #4E4E4E;
}
.advice__user{
  font-weight: 600;
  font-size: 32px;
  line-height: 105%;
  color: #4E4E4E;
  margin-bottom: 60px;
  margin-top: 50px;
}
.container__cart{
    margin-top: 100px;
    margin-left: 475px;
}

@media (max-width: 1433px) {
  .container__cart{
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
 
}

@media (max-width: 540px) {
  .advice__user{
    text-align: center;
  }
  .footer{
    flex-direction: column;
    row-gap: 20px;
    align-items: center;
  }
  .footer__button-positive{
    margin-right: 0;
  }
  .advice__body{
    width: 100%;
  }
 
}
</style>